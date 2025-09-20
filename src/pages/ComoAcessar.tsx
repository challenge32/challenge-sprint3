import PageTitle from "../components/PageTitle";

export default function ComoAcessar() {
  const passos1 = [
    `Acesse o Portal do Paciente HC pelo site ou aplicativo`,
    `Clique na opção "Cadastrar Senha"`,
    `Digite o número do CPF do paciente e clique em "Localizar Paciente"`,
    `Informe dados para contato, confirme as informações pessoais e registre uma senha de acesso`,
    `Clique novamente em "Cadastrar Senha" e "Acessar Agora"`,
    `Digite o CPF e a senha cadastrada`,
    `Acesse o Portal, selecione "Teleconsultas" e aceite o termo de autorização`,
    `Selecione o teleatendimento, habilite câmera e microfone e aguarde o profissional`
  ];

  const passos2 = [
    `Acesse o Portal do Paciente HC pelo site ou aplicativo`,
    `Após o login, acesse o menu principal`,
    `Role até a seção "Termos" e clique`,
    `Clique em "Termo de aceite de teleconsulta"`,
    `Clique em "Alterar resposta"`,
    `Se concordar com o termo, selecione "Sim"`,
    `O seu consentimento é de extrema importância para a teleconsulta`
  ];

  return (
    <section className="passos">
      <PageTitle title="Como fazer o primeiro acesso no app ou site" />
      <ol className="space-y-2">
        {passos1.map((p, i) => (
          <li key={i}><section className="card"><h2 className="font-semibold">Passo {i+1}</h2><p>{p}</p></section></li>
        ))}
      </ol>

      <PageTitle title="Como acessar a consulta" />
      <ol className="space-y-2">
        {passos2.map((p, i) => (
          <li key={i}><section className="card"><h2 className="font-semibold">Passo {i+1}</h2><p>{p}</p></section></li>
        ))}
      </ol>
    </section>
  );
}