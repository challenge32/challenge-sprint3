import { useForm } from "react-hook-form";
import PageTitle from "../components/PageTitle";
import { useState } from "react";

type FormValues = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function Contato() {
  const [ok, setOk] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // simula envio
    await new Promise((r) => setTimeout(r, 400));
    setOk(true);
    reset();
    setTimeout(() => setOk(false), 2500);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <PageTitle title="Contato" subtitle="Envie sua mensagem para nossa equipe" />
      {ok && (
        <div className="mb-4 rounded-md bg-green-50 text-green-800 px-3 py-2 border border-green-200">
          Mensagem enviada com sucesso!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-zinc-200">Nome</label>
          <input
            type="text"
            {...register("nome", { required: "Informe seu nome" })}
            className="mt-1 w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
            aria-invalid={!!errors.nome}
          />
          {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-zinc-200">E-mail</label>
          <input
            type="email"
            {...register("email", {
              required: "Informe seu e-mail",
              pattern: { value: /\S+@\S+\.\S+/, message: "E-mail inválido" },
            })}
            className="mt-1 w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-zinc-200">Mensagem</label>
          <textarea
            rows={5}
            {...register("mensagem", { required: "Descreva sua dúvida" })}
            className="mt-1 w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
            aria-invalid={!!errors.mensagem}
          />
          {errors.mensagem && <p className="mt-1 text-sm text-red-600">{errors.mensagem.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}
