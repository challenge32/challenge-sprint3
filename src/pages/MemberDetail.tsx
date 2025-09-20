import { useParams, Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const membros = [
  { nome: "Pedro Henrique Costa", rm: "559932", turma: "1TDSPV", github: "https://github.com/pedrocostah", linkedin: "https://www.linkedin.com/in/pedrocostahc/", foto: "/public/imgs/pedro.jpg" },
  { nome: "Júlia Kauane Menezes", rm: "565568", turma: "1TDSPV", github: "https://github.com/juliamenezesf", linkedin: "https://www.linkedin.com/in/julia-menezesf/", foto: "/public/imgs/julia.jfif" },
];

export default function MemberDetail() {
  const { rm } = useParams<{ rm: string }>();
  const m = membros.find(x => x.rm === rm);
  if (!m) {
    return (
      <section className="card">
        <PageTitle title="Integrante não encontrado" />
        <Link className="btn mt-2" to="/integrantes">Voltar</Link>
      </section>
    );
  }
  return (
    <section className="card">
      <img src={m.foto} alt={`Foto de ${m.nome}`} className="w-full max-w-md rounded-xl" />
      <h1 className="text-2xl font-bold mt-2">{m.nome}</h1>
      <p>RM: {m.rm} | Turma: {m.turma}</p>
      <p className="mt-2">
        <a href={m.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
        <a href={m.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn</a>
      </p>
      <Link className="btn mt-4" to="/integrantes">Voltar para a lista</Link>
    </section>
  );
}
// sprint03-marker
