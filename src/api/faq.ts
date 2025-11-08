export type FAQ = { id: number; pergunta: string; resposta: string };

const API_PYTHON =
  import.meta.env.VITE_API_URL_PYTHON ??
  "https://sprint4-python.onrender.com";

export async function getFaqs(): Promise<FAQ[]> {
  const res = await fetch(`${API_PYTHON}/api/faqs`);
  if (!res.ok) throw new Error(`Erro ao buscar FAQs (${res.status})`);
  return res.json();
}

// 🔹 Criar nova FAQ
export async function createFaq(pergunta: string, resposta: string): Promise<FAQ> {
  const res = await fetch(`${API_PYTHON}/api/faqs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta, resposta }),
  });
  if (!res.ok) throw new Error(`Erro ao criar FAQ (${res.status})`);
  return res.json();
}

// 🔹 Excluir FAQ
export async function deleteFaq(id: number): Promise<void> {
  const res = await fetch(`${API_PYTHON}/api/faqs/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`Erro ao excluir FAQ (${res.status})`);
}

// 🔹 Exporta a base para debug / exibir no front
export const API_BASE = API_PYTHON;
