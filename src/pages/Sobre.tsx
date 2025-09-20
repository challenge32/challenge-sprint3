import PageTitle from "../components/PageTitle";
export default function Sobre() {
  return (
    <section className="sobre">
      <PageTitle title="Sobre o Projeto" subtitle="Objetivo, público e diretrizes de acessibilidade e usabilidade" />
      <article className="card">
        <p>
          Este projeto tem como objetivo apoiar pacientes com baixa afinidade digital no acesso às teleconsultas do Hospital das Clínicas.
          A solução é uma Single Page Application (SPA) em React + Vite + TypeScript, com foco em acessibilidade, responsividade e usabilidade.
        </p>
        <p>
          O conteúdo foi reestruturado a partir das páginas da Sprint 02 e organizado em componentes reutilizáveis, seguindo boas práticas
          de arquitetura e versionamento no GitHub.
        </p>
      </article>
    </section>
  );
}