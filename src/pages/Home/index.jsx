import { TuLugar } from "../../pages/Home/TuLugar";
import { ServiceOptions } from "../../pages/Home/ServiceOptions/ServiceOptions";
import PropiedadesDestacadas from "../../pages/Home/PropiedadesDestacadas/PropiedadesDestacadas";
import { Buscador } from "./Buscador/Buscador";
import { NuevosIngresos } from "./NuevosIngresos/NuevosIngresos"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const navbarHeight = 95; // Ajusta este valor a la altura de tu navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Obtener la posición del elemento
        window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' }); // Desplazarse
        window.history.replaceState(null, "", " "); 
      }
    }
  }, [location]);
  
  return (
    <>
      <Buscador/> 
      <TuLugar />
      <NuevosIngresos/>
      <PropiedadesDestacadas id="propiedades-destacadas-piancatelli" />
      <ServiceOptions id="servicios-piancatelli" />
    </>
  );

}
