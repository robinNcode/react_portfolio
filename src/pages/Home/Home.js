import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import myImg from "../../assets/circle_avatar_2.png";
import Particle from "../../components/Particle";

import myImg from "../../assets/formal_village.jpg";
import Type from "./Type";
import Tilt from "react-parallax-tilt";


import Aboutcard from "../About/AboutCard";
import laptopImg from "../../assets/about.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <Card className="project-card-view">
                <Card.Body >
                  <Tilt>
                    <img src={myImg} alt="home pic" className="img-fluid" style={{ maxHeight: "420px", width: "100%" }} />
                  </Tilt>
                </Card.Body>
              </Card>
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading-name">
                Peace be upon you!
              </h1>
              <h1 className="heading-name">
                I am <strong className="main-name"> MD Shahin Mia Robin</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={12}
              style={{
                justifyContent: "center",
                paddingBottom: "50px",
                textAlign: "center",
              }}
            >

              <Aboutcard />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
