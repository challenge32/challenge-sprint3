import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Grid from "../components/ui/Grid";
import MemberCard, { Member } from "../components/ui/MemberCard";

const membros: Member[] = [
  { nome: "Pedro Henrique Costa", rm: "559932", turma: "1TDSPV", github: "https://github.com/pedrocostah", linkedin: "https://www.linkedin.com/in/pedrocostahc/", foto: "public/imgs/pedro.jpg" },
  { nome: "Júlia Kauane Menezes", rm: "565568", turma: "1TDSPV", github: "https://github.com/juliamenezesf", linkedin: "https://www.linkedin.com/in/julia-menezesf/", foto: "public/imgs/julia.jfif" },
];

export default function Integrantes() {
  return (
    <section className="integrantes">
      <PageTitle title="Quem Somos" />
      <Grid variant="members">
        {membros.map((m) => (
          <article key={m.rm} className="membro">
            <img src={m.foto} alt={`Foto de ${m.nome}`} className="w-full rounded-xl" />
            <h2 className="text-lg font-semibold mt-2">{m.nome}</h2>
            <p>RM: {m.rm} | Turma: {m.turma}</p>
            <p className="mt-1">
              <a href={m.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
              <a href={m.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn</a>
            </p>
            <Link to={`/integrantes/${m.rm}`} className="botao mt-2" aria-label={`Ver perfil de ${m.nome}`}>Ver perfil</Link>
          </article>
        ))}
      </Grid>
    </section>
  );
}

