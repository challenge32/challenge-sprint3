import PageTitle from "../components/PageTitle";

export default function Sobre() {
  return (
    <section className="container-main sobre">
      <PageTitle
        title="Sobre o Projeto"
        subtitle="Facilitando o acesso de todos às consultas online"
      />

      <div className="card space-y-4">
        <p>
          Este projeto é uma plataforma criada com o objetivo de tornar mais
          simples e acessível o processo de participação em consultas online.
        </p>
        <p>
          Pensado especialmente para pessoas com baixa afinidade em tecnologia,
          ele oferece uma interface clara, intuitiva e com recursos de
          acessibilidade, como ajuste de contraste, tamanho da fonte e leitura
          em voz alta.
        </p>
        <p>
          Acreditamos que a tecnologia deve aproximar as pessoas e nunca ser uma
          barreira. Por isso, nosso foco está em garantir que todos possam
          acessar seus atendimentos de forma prática, segura e inclusiva.
        </p>
      </div>
    </section>
  );
}
