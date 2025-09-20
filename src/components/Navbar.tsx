import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import { useState } from "react";

type Props = {
  dark: boolean; setDark: (v: boolean) => void;
  fontScale: number; setFontScale: (n: number) => void;
};

export default function Navbar({ dark, setDark, fontScale, setFontScale }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
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
              <li><NavLink to="/integrantes" className={({isActive}) => isActive ? "btn" : "btn-ghost"}>Integrantes</NavLink></li></ul>
          </nav>
        </div>
        <div className="flex items-center gap-2" role="group" aria-label="Ajustes de acessibilidade">
          <Button variant="ghost" onClick={() => setDark(!dark)} aria-pressed={dark}>{dark ? "Claro" : "Escuro"}</Button>
          <Button variant="ghost" onClick={() => setFontScale(Math.max(0.875, fontScale - 0.125))} aria-label="Diminuir fonte">A-</Button>
          <Button variant="ghost" onClick={() => setFontScale(Math.min(1.5, fontScale + 0.125))} aria-label="Aumentar fonte">A+</Button>
          <Button variant="ghost" onClick={() => setMenuOpen(v => !v)} className="md:hidden" aria-expanded={menuOpen} aria-label="Abrir menu">Menu</Button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950">
          <nav aria-label="Menu móvel">
            <ul className="container-main m-0 p-0 list-none grid gap-2">
              <li><NavLink to="/" end className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>Início</NavLink></li>
              <li><NavLink to="/ajuda" className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>Ajuda</NavLink></li>
              <li><NavLink to="/faq" className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>FAQ</NavLink></li>
              <li><NavLink to="/contato" className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>Contato</NavLink></li>
              <li><NavLink to="/integrantes" className={({isActive}) => isActive ? "btn" : "btn-ghost"} onClick={() => setMenuOpen(false)}>Integrantes</NavLink></li></ul>
          </nav>
        </div>
      )}
    </header>
  );
}