import React from "react";
import { NavLink, Container } from "react-bootstrap";
import "./TuLugar.css"

const TuLugar = () => {

    return (

        <>
            <Container fluid>
                <div id="titulo-tu-lugar">
                    <h2>Encuentra tu lugar</h2>
                </div>
                <div className="contenedor">

                    <div className="contenedor-cards">

                        <NavLink className="link-card">
                            <div className="card" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"})`
                            }}>
                                Bella Vista
                            </div>
                        </NavLink>


                        <NavLink className="link-card">
                            <div className="card" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"})`
                            }}>
                                Palomar
                            </div>
                        </NavLink>

                    </div>

                    <div className="contendor-banner">

                        <NavLink>
                            <div className="banner" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"})`
                            }}>
                                Hurlingham
                            </div>
                        </NavLink>

                    </div>
                    <div className="contenedor-cards">

                        <NavLink className="link-card">
                            <div className="card" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"})`
                            }}>
                                Haedo
                            </div>
                        </NavLink>


                        <NavLink className="link-card">
                            <div className="card" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"})`
                            }}>
                                Castelar
                            </div>
                        </NavLink>

                    </div>
                    <div className="contendor-banner">
                        <NavLink>
                            <div className="banner" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"})`
                            }}>
                                Moron
                            </div>
                        </NavLink>
                    </div>


                </div>


            </Container>
        </>
    )




}
export { TuLugar };