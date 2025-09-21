// src/pages/Home.tsx (ajuste de layout)
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-white dark:bg-zinc-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Bem-vindo ao HC Saúde Digital
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
            Acompanhe informações essenciais, tire dúvidas e explore conteúdos de apoio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/galeria")}
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Explorar Galeria
            </button>
            <button
              type="button"
              onClick={() => navigate("/como-acessar")}
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-slate-700 bg-slate-100 hover:bg-slate-200 dark:text-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Como Acessar
            </button>
          </div>
        </div>

       <div className="w-full max-w-xl justify-self-center lg:justify-self-end">
  <img
    src="/public/imgs/hc.png"
    alt="Hospital das Clínicas"
    className="w-full h-auto max-h-[360px] sm:max-h-[420px] lg:max-h-[460px] object-contain rounded-2xl shadow-sm"
  />
</div>

      </section>
    </main>
  );
}
