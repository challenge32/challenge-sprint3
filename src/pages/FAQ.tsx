import PageTitle from "../components/PageTitle";

const faqs = [
  { q: "Como funciona o chatbot?", a: "Você pode usar a assistente virtual clicando no ícone de mensagem ou acessando via Telegram, falando ou digitando sua dúvida." },
  { q: "Idosos conseguem usar a plataforma?", a: "Sim! A interface é simples e intuitiva, com botões grandes e suporte técnico humanizado." },
  { q: "Preciso instalar algum aplicativo?", a: "Em geral sim. Acesse a página inicial e selecione Play Store ou App Store para instalar o aplicativo." },
  { q: "É seguro compartilhar meus dados?", a: "Sim. Seguimos protocolos de segurança da informação do HCFMUSP." },
  { q: "Não consigo entrar na consulta, e agora?", a: "Vá em Ajuda > Como acessar a consulta. Se persistir, entre em contato com o hospital." },
  { q: "Como eu sei se estou pronto para a consulta?", a: "Na aba Ajuda, clique em 'Estou pronto para a consulta?'. Há uma lista simples para conferir." },
  { q: "O que eu preciso para conseguir entrar na consulta?", a: "Um celular, tablet ou computador com internet, o app instalado ou o portal no navegador, ambiente silencioso e boa iluminação." },
];

export default function FAQ() {
  return (
    <section className="faq">
      <PageTitle title="Perguntas Frequentes" />
      <div className="grid-2">
        {faqs.map((f, i) => (
          <article key={i} className="card">
            <h2 className="font-semibold">{f.q}</h2>
            <p>{f.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
// sprint03-marker
