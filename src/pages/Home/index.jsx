import { TuLugar } from "../../pages/Home/TuLugar";
import { ServiceOptions } from "../../pages/Home/ServiceOptions/ServiceOptions";
import PropiedadesDestacadas from "../../pages/Home/PropiedadesDestacadas/PropiedadesDestacadas";
import { Buscador } from "./Buscador/Buscador";
import { NuevosIngresos } from "./NuevosIngresos/NuevosIngresos";
import { Element } from "react-scroll";
import React from "react";

export default function Home() {
  return (
    <>
      <Buscador />
      <TuLugar />
      <NuevosIngresos />
      <Element name="destacadas">
        <PropiedadesDestacadas />
      </Element>
      {/* 
      <Element name="servicios">
        <ServiceOptions />
      </Element>
      */}
    </>
  );
}
