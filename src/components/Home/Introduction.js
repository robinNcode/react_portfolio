import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";

function Introduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <ul itemType="square" className="home-about-body">
              <li>I’m currently working as Professional Software Engineer <a href="http://adovasoft.com">Adova Soft</a></li>
              <li>B.Sc in Computer Science and Engineering from <a href="https://su.edu.bd">Sonargaon University</a></li>
              <li>Excited to create open-source projects.</li>
              <li>At present, learning <strong>Advanced Accounting</strong>.</li>
              <li>Currently, a contributor of <strong>adovasoft-rnd/ci-recharge</strong>.</li>
              <li>You can reach me at <a href="mailto:msmrobin518@gmail.com">msmrobin518@gmail.com</a></li>
            </ul>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;
