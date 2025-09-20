import { PropsWithChildren, useState } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";

type AppProps = {
  fontScale: number;
  setFontScale: (n: number) => void;
  dark: boolean;
  setDark: (v: boolean) => void;
};

export default function App({ fontScale, setFontScale, dark, setDark }: PropsWithChildren<AppProps>) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Layout fontScale={fontScale} setFontScale={setFontScale} dark={dark} setDark={setDark}>
  <ErrorBoundary>
    <AppRoutes />
  </ErrorBoundary>
</Layout>
    </>
  );
}