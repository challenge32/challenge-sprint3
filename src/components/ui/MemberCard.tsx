import { Link } from "react-router-dom";
export type Member = { nome: string; rm: string; turma: string; github: string; linkedin: string; foto: string };
export default function MemberCard({ m }: { m: Member }) {
  return (
    <article className="membro">
      <img src={m.foto} alt={`Foto de ${m.nome}`} className="w-full rounded-xl" />
      <h2 className="text-lg font-semibold mt-2">{m.nome}</h2>
      <p>RM: {m.rm} | Turma: {m.turma}</p>
      <p className="mt-1">
        <a href={m.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
        <a href={m.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn</a>
      </p>
      <Link to={`/integrantes/${m.rm}`} className="btn mt-2" aria-label={`Ver perfil de ${m.nome}`}>Ver perfil</Link>
    </article>
  );
}