import { ReactNode, useState } from "react";
type Tab = { id: string; label: string; content: ReactNode };
export default function Tabs({ tabs, defaultId }: { tabs: Tab[]; defaultId?: string }) {
  const [active, setActive] = useState<string>(defaultId ?? tabs[0]?.id);
  return (
    <div>
      <div className="tabs" role="tablist">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`tablink ${active === t.id ? "active" : ""}`}
            role="tab"
            aria-selected={active === t.id}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map(t => active === t.id && (
        <section key={t.id} className="tab-content" role="tabpanel">
          {t.content}
        </section>
      ))}
    </div>
  );
}