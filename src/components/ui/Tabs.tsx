// src/components/ui/Tabs.tsx
import { useId, useState, KeyboardEvent } from "react";

type Tab = { id: string; label: string; content: JSX.Element };
type TabsProps = { tabs: Tab[]; defaultId?: string };

export default function Tabs({ tabs, defaultId }: TabsProps) {
  const [active, setActive] = useState(defaultId ?? tabs[0]?.id);
  const base = useId();

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key === "ArrowRight") setActive(tabs[(i + 1) % tabs.length].id);
    if (e.key === "ArrowLeft") setActive(tabs[(i - 1 + tabs.length) % tabs.length].id);
  }

  return (
    <div>
      <div role="tablist" aria-label="Seções de ajuda" className="flex gap-2 border-b border-slate-200 dark:border-zinc-800">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            id={`${base}-tab-${t.id}`}
            role="tab"
            aria-controls={`${base}-panel-${t.id}`}
            aria-selected={active === t.id}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={
              (active === t.id
                ? "border-blue-600 text-blue-700 "
                : "border-transparent text-slate-600 hover:text-slate-800 ")
              + "px-3 py-2 border-b-2 font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            }
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          id={`${base}-panel-${t.id}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${t.id}`}
          hidden={active !== t.id}
          className="p-4 border border-t-0 border-slate-200 dark:border-zinc-800 rounded-b-md bg-white dark:bg-zinc-900"
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
