import React, { useRef, useState } from "react";
import BarrioDetail from "../BarrioDetail";
import { barrios } from "../../utils";
import { Tab, Row, Col, Nav, Container } from "react-bootstrap";
import useFilterStore from "../../store";
import './barrio.css'

const Barrios = () => {
  const { barrio } = useFilterStore();

  const [selectedTab, setSelectedTab] = useState(
    barrio || barrios[0].location_id
  );

  return (
    <Container className="mt-5 py-5">
      <Tab.Container
        defaultActiveKey={selectedTab}
        onSelect={(k) => setSelectedTab(k)}
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column tab-barrios">
              <Nav.Item style={{ fontSize: "1.5em" }}>
                <Nav.Link style={{ paddingLeft: "0" }} className="exception">
                  Barrios
                </Nav.Link>{" "}
              </Nav.Item>
              {barrios.map((barrio) => (
                <Nav.Item key={barrio.location_id}>
                  <Nav.Link eventKey={barrio.location_id}>
                    {barrio.nombre}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {barrios.map((barrio) => (
                <Tab.Pane
                  key={barrio.location_id}
                  eventKey={barrio.location_id}
                >
                  <BarrioDetail barrio={barrio} selectedTab={selectedTab} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Barrios;
