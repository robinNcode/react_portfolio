import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";
import Particle from "../components/Particle";
import ptms from "../assets/Projects/ptms.png";
import rentals from "../assets/Projects/rentals.png";
import pcms from "../assets/Projects/pcms.png";

function Achievements() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Sharing my thoughts, ideas, experience, and imagination
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={12} className="project-card">
                        <ProjectCard
                            imgPath={ptms}
                            isBlog={false}
                            title="PTMS"
                            description='The Project Thesis Management System is a cloud-based solution that helps manage academic projects and theses. It provides a central platform for students and faculty to collaborate, communicate, and track the progress of their projects and theses. Awarded "2nd Runner Up" in SU CSE DAY-2023.'
                            ghLink="https://github.com/robinNcode/ptms"
                            demoLink="http://ptms.robin.adovasoft.com"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Achievements;