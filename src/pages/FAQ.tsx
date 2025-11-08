import { useEffect, useState } from "react";
import FAQItem from "../components/ui/FAQItem";
import PageTitle from "../components/PageTitle";
import { getFaqs, createFaq, deleteFaq, type FAQ, API_BASE } from "../api/faq";

// FAQs oficiais (fixas)
const faqOficiais = [
  { q: "Como marcar consulta?", a: "Acesse 'Como Acessar' e siga o passo a passo do Portal do Paciente." },
  { q: "Preciso de cadastro?", a: "Sim. Cadastre uma senha com CPF do paciente e um contato válido." },
  { q: "Posso falar com atendente?", a: "Use a página Contato para enviar sua mensagem à equipe." },
];

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [okMsg, setOkMsg] = useState<string | null>(null);

  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  async function load() {
    setLoading(true);
    setErr(null);
    setOkMsg(null);
    try {
      const data = await getFaqs();
      setFaqs(Array.isArray(data) ? data : []);
    } catch (e: any) {
      setErr(e.message || "Erro ao buscar FAQs");
      setFaqs([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function criar() {
    const p = pergunta.trim();
    const r = resposta.trim();
    if (!p || !r || saving) return;
    setErr(null);
    setOkMsg(null);
    setSaving(true);
    try {
      const nova = await createFaq(p, r);
      setFaqs((prev) => [...prev, nova]);
      setPergunta("");
      setResposta("");
      setOkMsg("Contribuição enviada com sucesso!");
    } catch (e: any) {
      setErr(e.message || "Erro ao enviar contribuição");
    } finally {
      setSaving(false);
    }
  }

  async function remover(id: number) {
    setErr(null);
    setOkMsg(null);
    const backup = faqs;
    setFaqs((prev) => prev.filter((f) => f.id !== id)); // otimista
    try {
      await deleteFaq(id);
      setOkMsg("Contribuição excluída.");
    } catch (e: any) {
      setErr(e.message || "Erro ao excluir contribuição");
      setFaqs(backup);
    }
  }

  const canSubmit = pergunta.trim() && resposta.trim() && !saving;

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PageTitle title="FAQ" subtitle="Perguntas frequentes" />

      {/* Contribuição (CRUD da API) */}
      <div className="rounded-xl border p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">Contribua para nosso site</h2>
          <button
            onClick={load}
            className="text-sm rounded border px-3 py-1 hover:bg-gray-50"
            disabled={loading}
            title="Recarregar contribuições"
          >
            {loading ? "Atualizando…" : "Recarregar"}
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Envie uma pergunta e resposta que possa ajudar outros usuários. As contribuições aparecem na seção “Perguntas da comunidade”.
        </p>

        {err && <p className="text-red-600">{err}</p>}
        {okMsg && <p className="text-green-600">{okMsg}</p>}

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
            className={`rounded px-4 py-2 text-white ${
              canSubmit ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={criar}
            disabled={!canSubmit}
          >
            {saving ? "Enviando…" : "Enviar"}
          </button>
        </div>
      </div>

      {/* FAQs oficiais */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Perguntas frequentes (oficiais)</h2>
        {faqOficiais.map((f, i) => (
          <FAQItem key={`oficial-${i}`} question={f.q} answer={f.a} defaultOpen={i === 0} />
        ))}
      </div>

      {/* Contribuições (API) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Perguntas da comunidade {(!loading && faqs.length > 0) ? `(${faqs.length})` : ""}
          </h2>
        </div>

        {loading && <p className="opacity-70">Carregando…</p>}
        {!loading && faqs.length === 0 && (
          <p className="opacity-70">Ainda não há contribuições.</p>
        )}

        {faqs.map((f) => (
          <div key={f.id} className="relative">
            <FAQItem question={f.pergunta} answer={f.resposta} defaultOpen={false} />
            <button
              className="absolute top-2 right-2 text-sm text-red-600 hover:underline"
              onClick={() => remover(f.id)}
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
