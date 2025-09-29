import { useEffect, useState } from "react";

export default function ReadPage() {
  const [reading, setReading] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      setSupported(true);
    }
  }, []);

  const toggleRead = () => {
    if (!supported) return;
    if (reading) {
      window.speechSynthesis.cancel();
      setReading(false);
      return;
    }
    const text = document.getElementById("conteudo")?.innerText || document.body.innerText;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "pt-BR";
    utter.rate = 1;
    utter.pitch = 1;

    utter.onend = () => setReading(false);
    utter.onerror = () => setReading(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
    setReading(true);
  };

  return (
    <button
      type="button"
      disabled={!supported}
      onClick={toggleRead}
      className="btn-ghost"
      aria-pressed={reading}
      aria-label={reading ? "Parar leitura da página" : "Ler página em voz alta"}
      title={reading ? "Parar leitura" : "Ler página"}
    >
      {reading ? "⏹️ Parar" : "🔊 Ler"}
    </button>
  );
}
