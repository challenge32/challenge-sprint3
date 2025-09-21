// src/pages/AjudaDireta.tsx
import PageTitle from "../components/PageTitle";
import Tabs from "../components/ui/Tabs";

export default function AjudaDireta() {
  const tabs = [
    { id: "portal", label: "Portal do Paciente", content: <p>Link e instruções rápidas do portal.</p> },
    { id: "telefone", label: "Telefones úteis", content: <ul className="list-disc pl-6"><li>Central: (11) 0000-0000</li></ul> },
    { id: "faq", label: "FAQ", content: <p>Veja dúvidas comuns na página FAQ.</p> },
  ];
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-4">
      <PageTitle title="Preciso de Ajuda" subtitle="Acesso rápido às principais informações" />
      <Tabs tabs={tabs} defaultId="portal" />
    </section>
  );
}
