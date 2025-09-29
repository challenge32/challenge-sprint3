import { useMemo, useState } from "react";
import ChecklistItem from "../components/ui/ChecklistItem";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const items = [
  "Estou com o celular carregado",
  "Tenho acesso à internet/Wi-Fi",
  "Recebi o link da consulta",
  "Sei o horário da minha consulta",
  "Estou em um local tranquilo para conversar",
];

export default function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(Array(items.length).fill(false));
  const navigate = useNavigate();

  const total = items.length;
  const done = useMemo(() => checked.filter(Boolean).length, [checked]);
  const ready = done === total;

  return (
    <section className="checklist">
      <PageTitle title="Checklist de Preparação" subtitle="Veja se está tudo certo para sua consulta online" />

      <form aria-describedby="resultado" className="mt-3 space-y-2">
        {items.map((label, i) => (
          <ChecklistItem
            key={i}
            label={label}
            checked={checked[i]}
            onChange={(v) => { const next = [...checked]; next[i] = v; setChecked(next); }}
          />
        ))}
        <div id="resultado" aria-live="polite" className={`mt-2 ${ready ? "text-green-700" : "text-red-700"}`}>
          {ready
            ? "Tudo certo! Você está pronto(a) para a consulta ✅"
            : `Você marcou ${done}/${total}. Conclua todos os itens para ficar pronto(a).`}
        </div>
        <button
          type="button"
          disabled={!ready}
          onClick={() => navigate("/como-acessar")}
          className={`btn mt-2 ${!ready ? "opacity-50 cursor-not-allowed" : ""}` }
        >
          Ver como acessar a consulta
        </button>
      </form>
    </section>
  );
}
