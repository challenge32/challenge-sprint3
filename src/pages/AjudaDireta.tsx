import PageTitle from "../components/PageTitle";
import Tabs from "../components/ui/Tabs";
import ContactForm from "../components/ContactForm";

export default function AjudaDireta() {
  const tabs = [
    {
      id: "portal",
      label: "Portal do Paciente",
      content: (
        <div className="space-y-6">
          <p>
            <a
              href="https://portaldopaciente.hc.fm.usp.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-blue-600 hover:text-blue-700"
            >
              Acesse o Portal do Paciente clicando aqui!
            </a>
          </p>

          <hr className="border-zinc-700/40" />

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Não encontrou o que precisava? Envie uma mensagem:
            </h3>
            <ContactForm />
          </div>
        </div>
      ),
    },
    {
      id: "telefone",
      label: "Telefones úteis",
      content: (
        <ul className="list-disc pl-6">
          <li>Central: (11) 0000-0000</li>
        </ul>
      ),
    },
    { id: "faq", label: "FAQ", content: <p>Veja dúvidas comuns na página FAQ.</p> },
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-4">
      <PageTitle
        title="Preciso de Ajuda"
        subtitle="Acesso rápido às principais informações"
      />
      <Tabs tabs={tabs} defaultId="portal" />
    </section>
  );
}
