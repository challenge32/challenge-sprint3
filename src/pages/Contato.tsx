import { useForm } from "react-hook-form";
import PageTitle from "../components/PageTitle";
import FormField from "../components/ui/FormField";
import Button from "../components/ui/Button";

type FormData = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function Contato() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 400)); // simula envio
    console.log("Dados enviados:", data);
  };

  return (
    <section className="contato">
      <PageTitle title="Fale Conosco" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 max-w-xl">
        <FormField id="nome" label="Nome" error={errors.nome?.message}>
          <input id="nome" className="w-full rounded-xl border border-slate-300 px-3 py-2" {...register("nome", { required: "Informe seu nome" })} />
        </FormField>
        <div>
          <label htmlFor="email" className="block font-medium">E-mail</label>
          <input id="email" type="email" className="w-full rounded-xl border border-slate-300 px-3 py-2"
            {...register("email", { required: "Informe seu e-mail", pattern: { value: /.+@.+\..+/, message: "E-mail inválido" } })} />
          {errors.email && <p role="alert" className="text-red-700">{errors.email.message}</p>}
        </div>
        <FormField id="mensagem" label="Mensagem" error={errors.mensagem?.message}>
          <textarea id="mensagem" rows={5} className="w-full rounded-xl border border-slate-300 px-3 py-2" {...register("mensagem", { required: "Escreva sua mensagem" })} />
        </FormField>

        <Button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>

        {isSubmitSuccessful && (
          <p role="status" className="text-green-700">Mensagem enviada. Entraremos em contato!</p>
        )}
      </form>
    </section>
  );
}
// sprint03-marker
