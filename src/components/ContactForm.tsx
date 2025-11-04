import { useForm } from "react-hook-form";
import { useState } from "react";

export type ContactFormValues = {
  nome: string;
  telefone: string;
  mensagem: string;
};

export default function ContactForm({ className = "" }: { className?: string }) {
  const [ok, setOk] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    // simula envio
    await new Promise((r) => setTimeout(r, 400));
    setOk(true);
    reset();
    setTimeout(() => setOk(false), 2500);
  };

  return (
    <div className={className}>
      {ok && (
        <div className="mb-4 rounded-md bg-green-50 text-green-800 px-3 py-2 border border-green-200">
          Mensagem enviada com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-zinc-200">
            Nome
          </label>
          <input
            type="text"
            {...register("nome", { required: "Informe seu nome" })}
            className="mt-1 w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
            aria-invalid={!!errors.nome}
          />
          {errors.nome && (
            <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-zinc-200">
            Telefone
          </label>
          <input
            type="tel"
            {...register("telefone", {
              required: "Informe seu telefone",
              pattern: {
                value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                message: "Telefone inválido (ex: 11 98765-4321)",
              },
            })}
            className="mt-1 w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
            aria-invalid={!!errors.telefone}
          />
          {errors.telefone && (
            <p className="mt-1 text-sm text-red-600">{errors.telefone.message}</p>
          )}
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-zinc-200">
            Mensagem
          </label>
          <textarea
            rows={5}
            {...register("mensagem", { required: "Descreva sua dúvida" })}
            className="mt-1 w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
            aria-invalid={!!errors.mensagem}
          />
          {errors.mensagem && (
            <p className="mt-1 text-sm text-red-600">
              {errors.mensagem.message}
            </p>
          )}
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
