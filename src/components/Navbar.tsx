import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Início" },
  { to: "/ajuda", label: "Ajuda" },
  { to: "/como-acessar", label: "Como Acessar" },
  { to: "/checklist", label: "Checklist" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
  { to: "/integrantes", label: "Integrantes" },
  { to: "/galeria", label: "Galeria" },
  { to: "/preciso-ajuda", label: "Preciso de Ajuda" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200 dark:bg-zinc-900/80 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Principal">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 rounded-md">
            <img src="/public/imgs/hc.png" alt="HC Saúde Digital" className="h-8 w-8 object-contain" width={32} height={32} />
            <span className="font-semibold text-slate-900 dark:text-zinc-100">HC Saúde Digital</span>
          </Link>

         
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}