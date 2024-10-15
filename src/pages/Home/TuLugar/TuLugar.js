import React from "react";
import { NavLink, Container } from "react-bootstrap";
import "./TuLugar.css"

import { SliderTuLugar } from "./SliderTuLugar";
const TuLugar = () => {

    return (

        <>
            <Container fluid>

                <h1 className="text-center">Encuentra tu lugar!</h1>

                <SliderTuLugar />

            </Container>
        </>
    )




}
export { TuLugar };