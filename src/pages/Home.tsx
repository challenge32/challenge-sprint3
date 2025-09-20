import PageTitle from "../components/PageTitle";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="home">
      <div className="hero">
        <div>
          <PageTitle title="Saúde Digital no Hospital das Clínicas" subtitle="Facilitando o acesso à saúde para pacientes com baixa afinidade digital" />
          <div className="mt-4 flex gap-3">
            <Button onClick={() => navigate('/galeria')} aria-label="Aprenda a acessar sua consulta">Aprender a acessar</Button>
            <a className="btn-ghost" href="https://portaldopaciente.hc.fm.usp.br/" target="_blank" rel="noreferrer">Acessar consulta</a>
          </div>
        </div>
        <img src="/public/imgs/hc-05.png" alt="Imagem do Hospital das Clínicas" className="hero-img" />
      </div>

      <section className="mt-6 grid gap-4">
        <article className="card">
          <h2 className="text-xl font-semibold">Bem-vindo ao HC Saúde Digital</h2>
          <p>
            Este site foi criado para ajudar pessoas que têm dificuldade em usar celulares ou computadores a participarem
            de consultas médicas por vídeo com mais facilidade.
          </p>
          <p>
            Aqui você encontrará um passo a passo simples e visual, com explicações claras, imagens ilustrativas e até
            instruções em áudio. Também disponibilizamos uma seção com dúvidas frequentes e uma área de contato.
          </p>
          <p>
            Nosso objetivo é que ninguém perca uma consulta por não saber como acessar. A tecnologia deve aproximar as
            pessoas da saúde, não afastá-las.
          </p>
        </article>
      </section>
    </section>
  );
}
// sprint03-marker
