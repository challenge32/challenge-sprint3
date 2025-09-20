import { Component, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.error("Erro capturado pelo ErrorBoundary:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <section className="card" role="alert" aria-live="assertive">
          <h1 className="text-2xl font-bold">Opa! Algo deu errado.</h1>
          <p>Tente recarregar a página ou voltar para a página inicial.</p>
        </section>
      );
    }
    return this.props.children;
  }
}