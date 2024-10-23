import React from "react";
import { NavLink, Container } from "react-bootstrap";
import "./TuLugar.css"
import { SliderTuLugar } from "./SliderTuLugar";
const TuLugar = () => {

    return (

        <>
            <Container className="p-0" fluid>
                <div className="alternativa-div">
                    <h2 className="titulo-bienes-raices">Una alternativa superior en Bienes Raices</h2>

                </div>
                <h1 id="titulo-tu-lugar" className="text-center" >Descubri tu barrio ideal</h1>

                <SliderTuLugar />


            </Container >
        </>
    )




}
export { TuLugar };