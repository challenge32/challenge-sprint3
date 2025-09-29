type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  return (
    <details className="group rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <h3 className="text-base font-medium text-slate-900 dark:text-zinc-100">{question}</h3>
        <span
          className="shrink-0 rounded-md border border-slate-200 dark:border-zinc-700 p-1 text-slate-500 group-open:rotate-180 transition-transform"
          aria-hidden
        >
          ▲
        </span>
      </summary>
      <div className="mt-3 text-slate-600 dark:text-zinc-300">{answer}</div>
    </details>
  );
}
