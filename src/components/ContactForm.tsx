import { useState } from "react";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!nome.trim() || !mensagem.trim()) {
      alert("Por favor, preencha pelo menos Nome e Mensagem.");
      return;
    }

    const payload = {
      nomeContato: nome,
      telefoneContato: telefone,
      problemaRelato: mensagem,
      statusAtendimento: "ABERTO",
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:8080/api/solicitacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let details = "";
        try {
          const err = await response.json();
          details = err?.details || JSON.stringify(err);
        } catch (_) {
          details = `Status HTTP: ${response.status}`;
        }
        alert("Erro ao enviar solicitação: " + details);
        return;
      }

      alert("Solicitação enviada com sucesso!");
      setNome("");
      setTelefone("");
      setMensagem("");
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com o servidor. Verifique se a API está rodando.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-zinc-100">
          Nome completo
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-zinc-100">
          Telefone
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="(11) 99999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-zinc-100">
          Mensagem
        </label>
        <textarea
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          rows={4}
          placeholder="Descreva com o máximo de detalhes o problema que está tendo para acessar a consulta..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
