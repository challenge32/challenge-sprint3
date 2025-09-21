import FAQItem from "../components/ui/FAQItem";
import PageTitle from "../components/PageTitle";

const faqs = [
  { q: "Como marcar consulta?", a: "Acesse 'Como Acessar' e siga o passo a passo do Portal do Paciente." },
  { q: "Preciso de cadastro?", a: "Sim. Cadastre uma senha com CPF do paciente e um contato válido." },
  { q: "Posso falar com atendente?", a: "Use a página Contato para enviar sua mensagem à equipe." },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-4">
      <PageTitle title="FAQ" subtitle="Perguntas frequentes" />
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <FAQItem key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
