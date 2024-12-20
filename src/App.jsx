import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import loadable from '@loadable/component';
import { useEffect } from "react";

// Importación diferida de los componentes de página
const Home = loadable(() => import('./pages/Home'));
const Propiedades = loadable(() => import('./pages/Propiedades'));
const Contacto = loadable(() => import('./pages/Contacto'));
const Detail = loadable(() => import('./pages/Detail'));
const TerminoCondiciones = loadable(() => import('./pages/TerminosYCondiciones'));
const PoliticasDePrivacidad = loadable(() => import('./pages/PoliticasDePrivacidad'));
const BarrioDetail = loadable(() => import('./pages/BarrioDetail'));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="propiedades/:id" element={<Detail />} />
        <Route path="propiedades" element={<Propiedades />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="condiciones" element={<TerminoCondiciones />} />
        <Route path="privacidad" element={<PoliticasDePrivacidad />} />
        <Route path="barrios/:id" element={<BarrioDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}