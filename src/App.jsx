import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Propiedades from "./pages/Propiedades";
import Contacto from "./pages/Contacto"
import Detail from "./pages/Detail";
import { useEffect } from "react";

export default function App() {
  const location = useLocation(); /* Esto vuelve al top al cambiar de pagina */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="propiedades/:id" element={<Detail />} />
        <Route path="propiedades" element={<Propiedades />}></Route>
        <Route path="contacto" element={<Contacto />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
