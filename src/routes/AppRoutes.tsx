import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Ajuda = lazy(() => import("../pages/Ajuda"));
const ComoAcessar = lazy(() => import("../pages/ComoAcessar"));
const Checklist = lazy(() => import("../pages/Checklist"));
const FAQ = lazy(() => import("../pages/FAQ"));
const Contato = lazy(() => import("../pages/Contato"));
const Integrantes = lazy(() => import("../pages/Integrantes"));
const MemberDetail = lazy(() => import("../pages/MemberDetail"));
const Galeria = lazy(() => import("../pages/Galeria"));
const AjudaDireta = lazy(() => import("../pages/AjudaDireta"));
const Sobre = lazy(() => import("../pages/Sobre"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/como-acessar" element={<ComoAcessar />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/integrantes/:rm" element={<MemberDetail />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/preciso-ajuda" element={<AjudaDireta />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
