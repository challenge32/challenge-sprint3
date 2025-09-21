import PageTitle from "../components/PageTitle";
import Card from "../components/ui/Card";

export default function Galeria() {
  return (
    <section className="galeria">
      <PageTitle
        title="Galeria de Vídeos Tutoriais"
        subtitle="Assista aos tutoriais e aprenda a usar o aplicativo de forma fácil e rápida."
      />

      <div className="grid-2">
        <Card>
          <h2 className="font-semibold">Como fazer o primeiro acesso</h2>
          <figure>
            <video
              controls
              preload="metadata"
              className="w-full rounded-xl"
            >
              {/* 👇 remover /public do caminho */}
              <source src="/videos/Cópia de PRIMEIRO ACESSO.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
            <figcaption>
              Tutorial sobre como fazer o primeiro acesso ao aplicativo.
            </figcaption>
          </figure>
        </Card>

        <Card>
          <h2 className="font-semibold">Como acessar consulta</h2>
          <figure>
            <video
              controls
              preload="metadata"
              className="w-full rounded-xl"
            >
              {/* 👇 remover /public do caminho */}
              <source src="/videos/Cópia de Acesso ao Portal.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
            <figcaption>
              Explicação sobre como acessar a consulta no aplicativo.
            </figcaption>
          </figure>
        </Card>
      </div>

      <section className="card mt-4">
        <h2 className="font-semibold">
          Instale o aplicativo do HC e acesse suas consultas
        </h2>
        <p>Baixe agora em seu celular:</p>
        <p className="space-x-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente&pcampaignid=web_share"
            target="_blank"
            rel="noreferrer"
            className="galeria-botao"
          >
            Google Play
          </a>
          <a
            href="https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502"
            target="_blank"
            rel="noreferrer"
            className="galeria-botao"
          >
            App Store
          </a>
        </p>
      </section>
    </section>
  );
}
