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

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  REACT_APP_TOKKO_API_KEY="3cbc5baf1ad3ebb4672111e2f3aa215c17f962eb"

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="propiedades/:id" element={<Detail />} />
        <Route path="propiedades" element={<Propiedades />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="condiciones" element={<TerminoCondiciones />} />
        <Route path="privacidad" element={<PoliticasDePrivacidad />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}