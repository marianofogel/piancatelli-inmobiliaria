import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import loadable from "@loadable/component";
import { useEffect } from "react";
import ReactGA from "react-ga4";
const TRACKING_ID = "G-S22TF0EHV5";

// Importación diferida de los componentes de página
const Home = loadable(() => import("./pages/Home"));
const Propiedades = loadable(() => import("./pages/Propiedades"));
const Contacto = loadable(() => import("./pages/Contacto"));
const Detail = loadable(() => import("./pages/Detail"));
const TerminoCondiciones = loadable(() =>
  import("./pages/TerminosYCondiciones")
);
const PoliticasDePrivacidad = loadable(() =>
  import("./pages/PoliticasDePrivacidad")
);
const Barrios = loadable(() => import("./pages/Barrios"));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({
      hitType: "pageview",
      page: "/homepage",
      title: "Home Page",
    });
  }, []);

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
        <Route path="barrios" element={<Barrios />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
