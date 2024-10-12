import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Propiedades from "./pages/Propiedades";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="propiedades" element={<Propiedades />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
