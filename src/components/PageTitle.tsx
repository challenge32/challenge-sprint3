type PageTitleProps = { title: string; subtitle?: string };
export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <header className="mb-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="text-slate-600">{subtitle}</p>}
    </header>
  );
}