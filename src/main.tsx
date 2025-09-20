import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

function Root() {
  const [fontScale, setFontScale] = useState<number>(() => Number(localStorage.getItem("font-scale") ?? 1));
  const [dark, setDark] = useState<boolean>(() => localStorage.getItem("dark") === "1");

  useEffect(() => {
    document.documentElement.style.fontSize = `${16 * fontScale}px`;
    localStorage.setItem("font-scale", String(fontScale));
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark", dark ? "1" : "0");
  }, [dark]);

  return (
    <StrictMode>
      <BrowserRouter>
        <App fontScale={fontScale} setFontScale={setFontScale} dark={dark} setDark={setDark} />
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);