import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  fontScale: number;
  setFontScale: (n: number) => void;
  dark: boolean;
  setDark: (v: boolean) => void;
};
export default function Layout({ fontScale, setFontScale, dark, setDark, children }: PropsWithChildren<Props>) {
  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para conteúdo</a>
      <Navbar fontScale={fontScale} setFontScale={setFontScale} dark={dark} setDark={setDark} />
      <main id="conteudo" className="container-main">{children}</main>
      <Footer />
    </>
  );
}