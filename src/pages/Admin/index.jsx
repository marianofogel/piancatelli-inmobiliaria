import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import {
  Button,
  Container,
  Modal,
  Alert,
  Image,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Card,
} from "react-bootstrap";
import AdminForm from "./Form/AdminForm";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { MdDelete, MdPreview } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaImages } from "react-icons/fa";
import { getToken } from "../../utils/getToken";
import { DropZone } from "./DropZone";
import { TiDelete } from "react-icons/ti";

import "./Admin.css";

export default function AdminPage() {
  const navigate = useNavigate();
  const [catalog, setCatalog] = useState([]);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showImageGrid, setShowImageGrid] = useState(false);
  const [actualImages, setActualImages] = useState([[], null]);
  const [deleteId, setDeleteId] = useState();
  const [formData, setFormData] = useState();
  const accessToken = getToken();

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("address", {
      header: () => "Dirección",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("propertyType", {
      header: () => "Tipo de Propiedad",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("operationType", {
      header: () => "Operación",
      cell: (info) => info.getValue(),
      size: 100,
    }),
    columnHelper.accessor("price", {
      header: () => "Precio",
      cell: (info) => `$${info.getValue()}`,
      meta: {
        filterVariant: "range",
      },
    }),
    columnHelper.accessor("available", {
      header: () => "Disponible",
      cell: (info) => `${info.getValue() ? "Sí" : "No"}`,
      meta: {
        filterVariant: "select",
      },
    }),
    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => (
        <div style={{ display: "flex", gap: "1em" }}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-edit">Editar</Tooltip>}
          >
            <Button
              variant="warning"
              onClick={() => handleEdit(info.row.original)}
            >
              <CiEdit />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-images">Imágenes</Tooltip>}
          >
            <Button
              variant="primary"
              onClick={() => handleImages(info.row.original)}
            >
              <FaImages />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-preview">Previsualizar</Tooltip>}
          >
            <Button
              variant="dark"
              onClick={() => handlePreview(info.row.original)}
            >
              <MdPreview />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-visible">Visibilidad</Tooltip>}
          >
            <Button
              variant="secondary"
              onClick={() => handleVisible(info.row.original)}
            >
              {info.row.original.visible ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-delete">Eliminar</Tooltip>}
          >
            <Button
              variant="danger"
              onClick={() => {
                setDeleteId(info.row.original);
                setShowDelete(true);
              }}
            >
              <MdDelete />
            </Button>
          </OverlayTrigger>
        </div>
      ),
    }),
  ];

  const resetForm = () => {
    setFormData({
      propertyType: "",
      operationType: "",
      address: "",
      price: "",
      surface: "",
      bedrooms: "",
      bathrooms: "",
      age: "",
      tags: [],
    });
  };

  const handleImages = async (data) => {
    try {
      const response = await fetch(`/catalog/${data._id}/images`);
      const images = await response.json();
      const imageElements = images.map((image, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + image}
          alt={`Property ${index}`}
        />
      ));
      setActualImages([imageElements, data._id]);
    } catch (error) {
      console.error("Error fetching images:", error);
      setActualImages([[], data._id]);
    } finally {
      setShowImageGrid(true);
    }
  };

  const handleEdit = (data) => {
    setFormData(data);
    setShow(true);
  };

  const handleDelete = (data) => {
    try {
      fetch(`/catalog/${deleteId._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": accessToken,
        },
      });
      fetchCatalog();
    } catch (error) {
      console.error("Error deleting property:", error);
    }
    setShowDelete(false);
  };

  const handleVisible = async (data) => {
    try {
      const response = await fetch(`/catalog/${data._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": accessToken,
        },
        body: JSON.stringify({ visible: !data.visible }),
      });
      if (response) {
        fetchCatalog();
      }
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchCatalog = async () => {
    try {
      const response = await fetch("/catalog");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCatalog(data);
    } catch (error) {
      console.error("Error fetching catalog:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData._id) {
        await fetch(`/catalog/${formData._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": accessToken,
          },
          body: JSON.stringify(formData),
        });
      } else {
        formData.visible = true;
        await fetch("/catalog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": accessToken,
          },
          body: JSON.stringify(formData),
        });
      }
      fetchCatalog();
    } catch (error) {
      console.error("Error creating property:", error);
    }
    setShow(false);
  };

  const fileUploadHandler = async (files) => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    try {
      await fetch(`/catalog/${actualImages[1]}/images`, {
        method: "POST",
        headers: {
          "x-auth-token": accessToken,
        },
        body: formData,
      });
      handleImages({ _id: actualImages[1] });
      setActualImages([[], actualImages[1]]);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const removeImage = async (src) => {
    try {
      const parts = src.split("/");
      await fetch(
        `/catalog/${actualImages[1]}/images/${parts[parts.length - 1]}`,
        {
          method: "DELETE",
          headers: {
            "x-auth-token": accessToken,
          },
        }
      );
      handleImages({ _id: actualImages[1] });
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
      return;
    }
    fetchCatalog();
  }, [navigate]);

  return (
    <Container fluid className="mt-3">
      <h2 style={{ fontWeight: "bold" }}>Panel de Administración</h2>
      <Container style={{ backgroundColor: "#ebebeb" }} className="p-0">
        <Row className="justify-content-md-center m-0 p-2">
          <Col className="py-2" xs lg={6} xl={3}>
            <Card text={"dark"} className="mb-2">
              <Card.Header style={{ backgroundColor: "white", borderBottom: "none", fontWeight: "bold" }}>Propiedades</Card.Header>
              <Card.Body className='pt-0'>
                <Card.Title className="m-0" style={{ fontSize: "4em", textAlign: "center", color: "#1885e4", fontWeight: "bold" }}>
                  {catalog.length}
                </Card.Title>
                <Card.Text style={{ textAlign: "center", fontSize: "0.8em", opacity:'50%', fontWeight: "bold" }}>
                  Cantidad de propiedades
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="py-2" xs lg={6} xl={3}>
            <Card text={"dark"} className="mb-2">
              <Card.Header style={{ backgroundColor: "white", borderBottom: "none", fontWeight: "bold" }}>Operación</Card.Header>
              <Card.Body className='pt-0'>
                <Card.Title className="m-0" style={{ fontSize: "4em", textAlign: "center", color: "#617175", fontWeight: "bold" }}>
                  {catalog.filter((item) => item.operationType === "Venta").length}
                </Card.Title>
                <Card.Text style={{ textAlign: "center", fontSize: "0.8em", opacity:'50%', fontWeight: "bold" }}>
                  Cantidad en venta
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="py-2" xs lg={6} xl={3}>
            <Card text={"dark"} className="mb-2">
              <Card.Header style={{ backgroundColor: "white", borderBottom: "none", fontWeight: "bold" }}>Operación</Card.Header>
              <Card.Body className='pt-0'>
                <Card.Title className="m-0" style={{ fontSize: "4em", textAlign: "center", color: "#7a237b", fontWeight: "bold" }}>
                  {catalog.filter((item) => item.operationType === "Alquiler").length}
                </Card.Title>
                <Card.Text style={{ textAlign: "center", fontSize: "0.8em", opacity:'50%', fontWeight: "bold" }}>
                  Cantidad en alquiler
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="py-2" xs lg={6} xl={3}>
            <Card text={"dark"} className="mb-2">
              <Card.Header style={{ backgroundColor: "white", borderBottom: "none", fontWeight: "bold" }}>Disponibles</Card.Header>
              <Card.Body className='pt-0'>
                <Card.Title className="m-0" style={{ fontSize: "4em", textAlign: "center", color: "#33c8db", fontWeight: "bold" }}>
                  {catalog.filter((item) => item.available).length}
                </Card.Title>
                <Card.Text style={{ textAlign: "center", fontSize: "0.8em", opacity:'50%', fontWeight: "bold" }}>
                  Cantidad de propiedades disponibles
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center m-0 p-2">
          <Col xs>
            <Card text="dark" className="py-2">
              <Card.Header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderBottom: "none",
                  fontWeight: "bold",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>Listado</h3>
                <Button
                  variant="primary"
                  onClick={() => {
                    resetForm();
                    setShow(!show);
                  }}
                >
                  Agregar Propiedad
                </Button>
              </Card.Header>
              <Card.Body className="pt-0">
                <TableComponent columns={columns} data={catalog} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>Agregar propiedad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdminForm formData={formData} handleChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDelete} onHide={() => setShowDelete(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>Eliminar propiedad</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estas seguro que deseas eliminar la propiedad?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showImageGrid}
        onHide={() => setShowImageGrid(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>Imágenes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropZone props={{ fileUploadHandler }} />
          <hr />
          {actualImages[0] && actualImages[0].length ? (
            <>
              <p>Imagenes actuales:</p>
              <aside className="thumbsContainer">
                {actualImages[0].map((image, index) => (
                  <div className="thumb" key={image.props.src}>
                    <div className="thumbInner">
                      <img
                        className="img"
                        key={index}
                        src={process.env.PUBLIC_URL + image.props.src}
                        alt={`Property ${index}`}
                      />
                      <TiDelete
                        onClick={() => {
                          removeImage(image.props.src);
                        }}
                        className="floatButton"
                      />
                    </div>
                  </div>
                ))}
              </aside>
            </>
          ) : (
            <Alert>No hay imágenes actualmente</Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowImageGrid(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
