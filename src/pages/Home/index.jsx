import { TuLugar } from "../../pages/Home/TuLugar";
import { GridQueHacen } from "../../pages/Home/GridQueHacen/GridQueHacen";
import PropiedadesDestacadas from "../../pages/Home/PropiedadesDestacadas/PropiedadesDestacadas";
import { Buscador } from "./Buscador/Buscador";

export default function Home() {
  return (
    <>
      <Buscador/> 
      <TuLugar />
      <PropiedadesDestacadas />
      <GridQueHacen />
    </>
  );

}
