import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

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
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200 dark:bg-zinc-900/80 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Principal">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <img src="/public/imgs/hc.png" alt="HC Saúde Digital" className="h-8 w-8 object-contain" width={32} height={32} />
            <span className="font-semibold text-slate-900 dark:text-zinc-100">HC Saúde Digital</span>
          </Link>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-controls="primary-navigation"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            {open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cx(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    )
                  }
           
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>


        {open && (
          <div className="lg:hidden pb-4" id="primary-navigation">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cx(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
