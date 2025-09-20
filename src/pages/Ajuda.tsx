import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Grid from "../components/ui/Grid";
import Button from "../components/ui/Button";
export default function Ajuda() {
  return (
    <section className="main-ajuda">
      <PageTitle title="Central de Ajuda" />
      <Grid variant="3" className="ajuda-opcoes">
        <Link className="" to="/como-acessar" aria-label="Instruções sobre como acessar a consulta">📱 Como acessar a consulta</Link>
        <Link className="" to="/checklist" aria-label="Checklist para estar pronto para a consulta">✅ Estou pronto para a consulta?</Link>
        <Link className="" to="/preciso-ajuda" aria-label="Opção para contato direto em caso de urgência">📞 Preciso de ajuda agora</Link>
      </Grid>
    </section>
  );
}