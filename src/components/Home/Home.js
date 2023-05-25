import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/circle_avatar_2.png";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Peace be upon you!
              </h1>
              <h1 className="heading-name">
                I am <strong className="main-name"> MD Shahin Mia Robin</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img src={myImg} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }} />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
