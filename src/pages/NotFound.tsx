import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
export default function NotFound() {
  return (
    <section className="card">
      <PageTitle title="Página não encontrada (404)" />
      <p>A página que você tentou acessar não existe.</p>
      <Link className="btn mt-2" to="/">Voltar ao início</Link>
    </section>
  );
}