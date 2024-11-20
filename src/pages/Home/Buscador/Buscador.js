import "./Buscador.css";
import { useState, useEffect } from "react";
import { Container, Form, FormGroup, Button } from "react-bootstrap";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import useFilterStore from "../../../store";
import Select from 'react-select';

const Buscador = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionOperation, setSelectedOptionOperation] = useState(null);
    const [selectedOptionLocalidad, setSelectedOptionLocalidad] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [dataTypes, setDataTypes] = useState(null);
    const setFilters = useFilterStore((state) => state.setFilters);

    const handleBuscar = () => {
        const type = selectedOption?.value;
        const operation = selectedOptionOperation?.value;
        const address = selectedOptionLocalidad?.value;
        
        const filters = {};

        if (type) {
            filters.propertyTypes = type;
        }

        if (operation) {
            filters.operationTypes = operation;
        }

        if (address) {
            filters.address = address;
        }
        // Establecer los filtros y navegar a la página de propiedades
        setFilters(filters);
        navigate("/propiedades");
    };

    const handleConoceMas = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").slice(1); // ID del enlace
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarCompensacion = 82; // Para compensar el tamaño de la navbar
            const elementPosition =
                targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - navbarCompensacion,
                behavior: "smooth",
            });
        }
    };

    const optionsType = dataTypes?.objects.map((type) => ({
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

    const optionsLocalidad = [
        { value: 'hurlingham', label: 'Hurlingham' },
        { value: 'moron', label: 'Moron' },
        { value: 'haedo', label: 'Haedo' },
        { value: 'jose-c-paz', label: 'Jose C Paz' },
        { value: 'san-miguel', label: 'San Miguel' },
    ]

    const handleChangeLocalidad = (option) => {
        setSelectedOptionLocalidad(option);
    }

    const filteredOptions = inputValue.length >= 2
        ? optionsLocalidad.filter(option =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        )
        : [];


    useEffect(() => {
        const fetchData = async () => {
            try {
                const queryParams = new URLSearchParams({
                    format: "json",
                    key: process.env.REACT_APP_TOKKO_API_KEY,
                    lang: "es_ar",
                    limit: 25,
                    offset: 0,
                });

                const response = await fetch(
                    `http://tokkobroker.com/api/v1/property_type?${queryParams.toString()}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setDataTypes(result);
            } catch (err) { }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const queryParams = new URLSearchParams({
                    format: "json",
                    key: process.env.REACT_APP_TOKKO_API_KEY,
                    lang: "es_ar",
                    limit: 25,
                    offset: 0,
                });

                const response = await fetch(
                    `http://tokkobroker.com/api/v1/operation_type?${queryParams.toString()}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();

                // Mapear los datos al formato de react-select
                const mappedOptions = result.objects.map((operation) => ({
                    value: operation.id,
                    label: operation.name,
                }));

                setOptionsOperation(mappedOptions);
            } catch (err) {
                console.error("Error fetching operation types:", err);
            }
        };

        fetchData();
    }, []);



    return (
        <Container fluid className="p-0 vh-100">
            <div>
                <div className="buscador-contenedor">
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
                                    />
                                </FormGroup>
                                <Form.Group className="buscador-form-group">
                                    <Select
                                        className="d-flex"
                                        classNamePrefix="select-type-casa"
                                        value={selectedOptionLocalidad}
                                        onChange={handleChangeLocalidad}
                                        placeholder="Localidad" // Placeholder cuando no hay selección
                                        options={filteredOptions}
                                        onInputChange={setInputValue}
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
                                className="mb-3"
                                type="button"
                                onClick={handleBuscar}
                            >
                                <IoMdSearch />
                            </Button>
                        </Form>
                    </div>

                    <div className="contenedor-boton-conocermas">
                        <a
                            href="#titulo-bienes-raices"
                            id="boton-conocermas"
                            onClick={handleConoceMas}
                        >
                            Conocé Más <IoIosArrowDown />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export { Buscador };