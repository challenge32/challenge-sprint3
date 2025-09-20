import { PropsWithChildren, useState } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";

type AppProps = {
  fontScale: number;
  setFontScale: (n: number) => void;
  dark: boolean;
  setDark: (v: boolean) => void;
};

export default function App({ fontScale, setFontScale, dark, setDark }: PropsWithChildren<AppProps>) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para conteúdo</a>
      <header className="navbar sticky top-0 z-10">
        <div className="container-main flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <img src="/logo-hc.png" alt="Logo do Hospital das Clínicas" className="logo" />
            <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-2">
  <ul className="flex gap-2 m-0 p-0 list-none">
    <li><NavLink to="/" end className={({isActive}) => isActive ? "btn" : "btn-ghost"}>Início</NavLink></li>
    <li><NavLink to="/ajuda" className={({isActive}) => isActive ? "btn" : "btn-ghost"}>Ajuda</NavLink></li>
    <li><NavLink to="/faq" className={({isActive}) => isActive ? "btn" : "btn-ghost"}>FAQ</NavLink></li>
    <li><NavLink to="/contato" className={({isActive}) => isActive ? "btn" : "btn-ghost"}>Contato</NavLink></li>
    <li><NavLink to="/integrantes" className={({isActive}) => isActive ? "btn" : "btn-ghost"}>Integrantes</NavLink></li>
    <li><NavLink to="/sobre" className={({isActive}) => isActive ? "btn" : "btn-ghost"}>Sobre</NavLink></li>
  </ul>
</nav>
          </div>
          <div className="flex items-center gap-2" role="group" aria-label="Ajustes de acessibilidade">
            <button onClick={() => setDark(!dark)} aria-pressed={dark} className="btn-ghost">{dark ? "Claro" : "Escuro"}</button>
            <button onClick={() => setFontScale(Math.max(0.875, fontScale - 0.125))} aria-label="Diminuir fonte" className="btn-ghost">A-</button>
            <button onClick={() => setFontScale(Math.min(1.5, fontScale + 0.125))} aria-label="Aumentar fonte" className="btn-ghost">A+</button>
          </div>
        
<div className="md:hidden border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950">
  <div className="container-main flex items-center justify-between">
    <button
      data-testid="menu-toggle"
      className="btn-ghost"
      aria-label="Abrir menu"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(v => !v)}
    >
      {menuOpen ? "Fechar menu" : "Menu"}
    </button>
  </div>
  {menuOpen && (
    <nav aria-label="Menu móvel">
      <ul className="container-main m-0 p-0 list-none grid gap-2">
        <li><NavLink to="/" end className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>Início</NavLink></li>
        <li><NavLink to="/ajuda" className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>Ajuda</NavLink></li>
        <li><NavLink to="/faq" className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>FAQ</NavLink></li>
        <li><NavLink to="/contato" className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>Contato</NavLink></li>
        <li><NavLink to="/integrantes" className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>Integrantes</NavLink></li>
        <li><NavLink to="/sobre" className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>Sobre</NavLink></li>
      </ul>
    </nav>
  )}
</div>

      </header>

      <main id="conteudo" className="container-main">
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="container-main text-center">
          <p>&copy; 2025 Hospital das Clínicas - Projeto Saúde Digital - Challenge - FIAP</p>
        </div>
      </footer>
    </>
  );
}