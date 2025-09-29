import { KeyboardEvent } from "react";

type Props = {
  fontScale: number;
  setFontScale: (n: number) => void;
  dark: boolean;
  setDark: (v: boolean) => void;
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export default function AccessibilityBar({ fontScale, setFontScale, dark, setDark }: Props) {
  const inc = () => setFontScale(clamp(Number((fontScale + 0.1).toFixed(2)), 0.75, 1.8));
  const dec = () => setFontScale(clamp(Number((fontScale - 0.1).toFixed(2)), 0.75, 1.8));
  const reset = () => setFontScale(1);

  // Atalhos: Ctrl/Cmd + + / - / 0
  const onKeyDown = (e: KeyboardEvent) => {
    const meta = e.ctrlKey || e.metaKey;
    if (!meta) return;
    if (e.key === "=" || e.key === "+") { e.preventDefault(); inc(); }
    if (e.key === "-") { e.preventDefault(); dec(); }
    if (e.key === "0") { e.preventDefault(); reset(); }
  };

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label="Controles de acessibilidade"
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className="btn-ghost"
        onClick={dec}
        aria-label="Diminuir tamanho da fonte"
        title="Diminuir fonte (Ctrl/⌘−)"
      >
        A−
      </button>
      <button
        type="button"
        className="btn-ghost"
        onClick={reset}
        aria-label="Restaurar tamanho da fonte"
        title="Restaurar fonte (Ctrl/⌘0)"
      >
        A
      </button>
      <button
        type="button"
        className="btn-ghost"
        onClick={inc}
        aria-label="Aumentar tamanho da fonte"
        title="Aumentar fonte (Ctrl/⌘+)"
      >
        A+
      </button>

      <span className="sr-only">Separador</span>

      <button
        type="button"
        className="btn"
        onClick={() => setDark(!dark)}
        aria-pressed={dark}
        aria-label={dark ? "Desativar alto contraste (modo claro)" : "Ativar alto contraste (modo escuro)"}
        title={dark ? "Modo claro" : "Modo escuro"}
      >
        {dark ? "🌞 Claro" : "🌙 Escuro"}
      </button>
    </div>
  );
}