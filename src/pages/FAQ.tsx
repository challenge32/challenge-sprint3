import { useEffect, useState } from "react";
import FAQItem from "../components/ui/FAQItem";
import PageTitle from "../components/PageTitle";

type FAQ = { id: number; pergunta: string; resposta: string };

const API = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:5000";

// ✅ FAQs oficiais (fixas – não sofrem CRUD)
const faqOficiais = [
  { q: "Como marcar consulta?", a: "Acesse 'Como Acessar' e siga o passo a passo do Portal do Paciente." },
  { q: "Preciso de cadastro?", a: "Sim. Cadastre uma senha com CPF do paciente e um contato válido." },
  { q: "Posso falar com atendente?", a: "Use a página Contato para enviar sua mensagem à equipe." },
];

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([]); // contribuições da comunidade (API)
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  // form (criar contribuição)
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`${API}/api/faqs`);
      if (!res.ok) throw new Error("Falha ao carregar FAQs");
      const data: FAQ[] = await res.json();
      setFaqs(data);
    } catch (e: any) {
      setErr(e.message || "Erro ao buscar FAQs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function criarFaq() {
    if (!pergunta || !resposta) return;
    setErr(null);
    try {
      const res = await fetch(`${API}/api/faqs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta, resposta }),
      });
      if (!res.ok) throw new Error("Falha ao enviar contribuição");
      const nova: FAQ = await res.json();
      setFaqs((prev) => [...prev, nova]);
      setPergunta("");
      setResposta("");
    } catch (e: any) {
      setErr(e.message || "Erro ao enviar contribuição");
    }
  }

  async function removerFaq(id: number) {
    setErr(null);
    try {
      const res = await fetch(`${API}/api/faqs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Falha ao excluir contribuição");
      setFaqs((prev) => prev.filter((f) => f.id !== id));
    } catch (e: any) {
      setErr(e.message || "Erro ao excluir contribuição");
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PageTitle title="FAQ" subtitle="Perguntas frequentes" />

      {/* 🔹 Bloco de contribuição (CRUD da API) */}
      <div className="rounded-xl border p-4 space-y-3">
        <h2 className="text-lg font-semibold">Contribua para nosso site</h2>
        <p className="text-sm text-gray-600">
          Envie uma pergunta e resposta que possa ajudar outros usuários. As contribuições aparecem na seção “Perguntas da comunidade”.
        </p>
        {err && <p className="text-red-600">{err}</p>}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3 items-end">
          <input
            className="border rounded p-2"
            placeholder="Pergunta"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
          />
          <input
            className="border rounded p-2"
            placeholder="Resposta"
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white rounded px-4 py-2"
            onClick={criarFaq}
          >
            Enviar
          </button>
        </div>
      </div>

      {/* 🔹 FAQs oficiais (fixas) */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Perguntas frequentes (oficiais)</h2>
        {faqOficiais.map((f, i) => (
          <FAQItem key={`oficial-${i}`} question={f.q} answer={f.a} defaultOpen={i === 0} />
        ))}
      </div>

      {/* 🔹 Contribuições (vindas do back) */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Perguntas da comunidade</h2>
        {loading && <p className="opacity-70">Carregando…</p>}
        {!loading && faqs.length === 0 && (
          <p className="opacity-70">Ainda não há contribuições.</p>
        )}
        {faqs.map((f) => (
          <div key={f.id} className="relative">
            <FAQItem question={f.pergunta} answer={f.resposta} defaultOpen={false} />
            {/* delete apenas nas contribuições */}
            <button
              className="absolute top-2 right-2 text-sm text-red-600 hover:underline"
              onClick={() => removerFaq(f.id)}
              title="Excluir contribuição"
            >
              excluir
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
