import "./Buscador.css";
import { useState, useEffect } from "react";
import { Container, Form, FormGroup, Button } from "react-bootstrap";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import useFilterStore from "../../../store";
import Select from 'react-select';
import useFetchTiposYLocalidad from "../../../hooks/useFetchTiposYLocalidad";


const Buscador = () => {
    useFetchTiposYLocalidad();
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionOperation, setSelectedOptionOperation] = useState(null);
    const [selectedOptionLocalidad, setSelectedOptionLocalidad] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const { tipos, localidades } = useFilterStore();
    const setFilters = useFilterStore((state) => state.setFilters);

    const handleBuscar = () => {
        const type = selectedOption?.value;
        const operation = selectedOptionOperation?.value;
        const localizationId = selectedOptionLocalidad?.value;

        const filters = {};

        if (type) {
            filters.propertyTypes = type;
        }

        if (operation) {
            filters.operationTypes = operation;
        }

        if (localizationId) {
            filters.localizationId = localizationId;
        }
        // Establecer los filtros y navegar a la página de propiedades
        if (Object.keys(filters).length > 0)
            setFilters(filters);
        navigate("/propiedades");
    };

    const handleConoceMas = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").slice(1); // ID del enlace
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarCompensacion = 130; // Para compensar el tamaño de la navbar
            const elementPosition =
                targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - navbarCompensacion,
                behavior: "smooth",
            });
        }
    };

    const optionsType = tipos.map((type) => ({
        value: type.id,
        label: type.name,
    }));

    const handleChangeType = (option) => {
        setSelectedOption(option);

    };

    const optionsOperation = [
        { value: '1', label: 'Venta' },
        { value: '2', label: 'Alquiler' },
        { value: '3', label: 'Alquiler Temporal' }
    ];

    const handleChangeOperation = (option) => {
        setSelectedOptionOperation(option);
    }


    const handleChangeLocalidad = (option) => {
        setSelectedOptionLocalidad(option);
    }




    return (
        <Container fluid className="p-0 vh-100">
            <div>
                <div className="buscador-contenedor">
                    <video src={process.env.PUBLIC_URL + " img/piancatelli-video.mp4"} autoPlay loop muted className="video-buscador" />
                    <div className="buscador-fondo">
                        <h2 className="buscador-titulo">Encontrá tu próximo hogar</h2>

                        <Form className="d-xl-flex">
                            <div className="buscador-form">
                                <FormGroup className="buscador-form-group">
                                    <Select
                                        className="d-flex"
                                        classNamePrefix="select-type-casa"
                                        value={selectedOption}
                                        onChange={handleChangeType}
                                        placeholder="Tipo" // Placeholder cuando no hay selección
                                        options={optionsType}
                                        styles={{
                                            input: (provided) => ({
                                                ...provided,
                                                cursor: "default", // Evita que aparezca el cursor de escritura
                                                caretColor: "transparent", // Opcional: Oculta el caret (la línea parpadeante)
                                            })
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup className="buscador-form-group">
                                    <Select
                                        className="d-flex"
                                        classNamePrefix="select-type-casa"
                                        value={selectedOptionOperation}
                                        onChange={handleChangeOperation}
                                        placeholder="Operación" // Placeholder cuando no hay selección
                                        options={optionsOperation}
                                        styles={{
                                            input: (provided) => ({
                                                ...provided,
                                                cursor: "default", // Evita que aparezca el cursor de escritura
                                                caretColor: "transparent", // Opcional: Oculta el caret (la línea parpadeante)
                                            })
                                        }}
                                    />
                                </FormGroup>
                                <Form.Group className="buscador-form-group">
                                    <Select
                                        className="d-flex"
                                        classNamePrefix="select-type-casa"
                                        value={selectedOptionLocalidad}
                                        onChange={handleChangeLocalidad}
                                        placeholder="Ubicación" // Placeholder cuando no hay selección
                                        options={inputValue.length >= 2
                                            ? localidades
                                                .filter(localidad =>
                                                    localidad.location_name && // Verifica que location_name no sea null o undefined
                                                    localidad.location_name.toLowerCase().includes(inputValue.toLowerCase())
                                                )
                                                .map(localidad => ({
                                                    value: localidad.location_id,
                                                    label: localidad.location_name,
                                                }))
                                            : []}
                                        onInputChange={value => setInputValue(value)}
                                        noOptionsMessage={() => null}  // Elimina el mensaje "No options"
                                        components={{
                                            IndicatorSeparator: () => null, // Elimina la flechita del dropdown
                                        }}
                                        styles={{
                                            dropdownIndicator: (provided) => ({
                                                ...provided,
                                                color: "white",
                                                "&:hover": {
                                                    color: "white", // Cambia este color según prefieras
                                                },
                                            })
                                        }}
                                    />
                                </Form.Group>

                            </div>
                            <Button
                                id="buscador-boton"
                                className="mb-3 d-flex align-items-center justify-content-center gap-2"
                                type="button"
                                onClick={handleBuscar}

                            >
                                <p className="ms-2 mb-0 buscar-texto p-2"> Buscar </p>
                                <IoMdSearch size='1.5em' />
                            </Button>
                        </Form>
                    </div>

                    <div className="contenedor-boton-conocermas">
                        <a
                            href="#titulo-bienes-raices"
                            id="boton-conocermas"
                            onClick={handleConoceMas}
                        >
                            Conocé más <IoIosArrowDown />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export { Buscador };