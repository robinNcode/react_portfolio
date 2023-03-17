import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ptms from "../../Assets/Projects/ptms.png";
import rentals from "../../Assets/Projects/rentals.png";
import pcms from "../../Assets/Projects/pcms.png";
import saleSoftware from "../../Assets/Projects/sales_software.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ptms}
              isBlog={false}
              title="PTMS"
              description='The Project Thesis Management System is a cloud-based solution that helps manage academic projects and theses. It provides a central platform for students and faculty to collaborate, communicate, and track the progress of their projects and theses. Awarded "2nd Runner Up" in SU CSE DAY-2023.'
              ghLink="https://github.com/robinNcode/ptms"
              demoLink="http://ptms.robin.adovasoft.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentals}
              isBlog={false}
              title="Rentals"
              description="Rentals is a software application that allows property owners to manage and rent out their properties. It provides features such as property listings, tenant management, rent collection, maintenance requests, and financial reporting. Additionally, it offers automated communication."
              ghLink="https://github.com/robinNcode/rent_me"
              demoLink="http://ohr.robin.adovasoft.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pcms}
              isBlog={false}
              title="PCMS"
              description="PCMS is a software solution designed to streamline and automate application process. It provides features such as application tracking, appointment scheduling, document management, fee collection, and reporting. It aims to reduce processing time for passport-related services."
              ghLink="https://github.com/robinNcode/pcms"
              demoLink="http://pcms.robin.adovasoft.com"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
