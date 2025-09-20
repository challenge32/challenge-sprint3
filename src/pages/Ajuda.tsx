import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
export default function Ajuda() {
  return (
    <section className="main-ajuda">
      <PageTitle title="Central de Ajuda" />
      <div className="ajuda-opcoes">
        <Link className="botao" to="/como-acessar" aria-label="Instruções sobre como acessar a consulta">📱 Como acessar a consulta</Link>
        <Link className="botao" to="/checklist" aria-label="Checklist para estar pronto para a consulta">✅ Estou pronto para a consulta?</Link>
        <Link className="botao" to="/preciso-ajuda" aria-label="Opção para contato direto em caso de urgência">📞 Preciso de ajuda agora</Link>
      </div>
    </section>
  );
}