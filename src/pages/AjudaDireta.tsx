import PageTitle from "../components/PageTitle";
import Tabs from "../components/ui/Tabs";
export default function AjudaDireta() {
  return (
    <section className="ajuda-direta">
      <PageTitle title="Preciso de ajuda agora" />
      <Tabs defaultId="contatos" tabs={[
        { id: "contatos", label: "Contatos", content: (
          <section>
            <h2 className="font-semibold">Telefones e E-mail</h2>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
            <p><strong>Suporte Técnico:</strong> suporte@hcsaudedigital.com.br</p>
          </section>
        )},
        { id: "bot", label: "Bot Virtual", content: (
          <section>
            <h2 className="font-semibold">Atendimento com Bot Virtual</h2>
            <p>Você pode acessar nossa assistente virtual no Telegram:</p>
            <p><a className="btn" href="https://t.me/Challenge1737_bot" target="_blank" rel="noreferrer">Abrir Assistente no Telegram</a></p>
          </section>
        )}
      ]} />
    </section>
  );
}