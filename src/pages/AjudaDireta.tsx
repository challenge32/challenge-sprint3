import { useState } from "react";
import PageTitle from "../components/PageTitle";
export default function AjudaDireta() {
  const [tab, setTab] = useState<"contatos"|"bot">("contatos");
  return (
    <section className="ajuda-direta">
      <PageTitle title="Preciso de ajuda agora" />
      <div className="tabs" role="tablist" aria-label="Opções de ajuda">
        <button className={`tablink ${tab === "contatos" ? "active" : ""}`} role="tab" aria-selected={tab==="contatos"} onClick={() => setTab("contatos")}>Contatos</button>
        <button className={`tablink ${tab === "bot" ? "active" : ""}`} role="tab" aria-selected={tab==="bot"} onClick={() => setTab("bot")}>Bot Virtual</button>
      </div>
      {tab === "contatos" && (
        <section className="tab-content">
          <h2 className="font-semibold">Telefones e E-mail</h2>
          <p><strong>Telefone:</strong> (11) 99999-9999</p>
          <p><strong>Suporte Técnico:</strong> suporte@hcsaudedigital.com.br</p>
        </section>
      )}
      {tab === "bot" && (
        <section className="tab-content">
          <h2 className="font-semibold">Atendimento com Bot Virtual</h2>
          <p>Você pode acessar nossa assistente virtual no Telegram:</p>
          <p><a className="botao" href="https://t.me/Challenge1737_bot" target="_blank" rel="noreferrer">Abrir Assistente no Telegram</a></p>
        </section>
      )}
    </section>
  );
}