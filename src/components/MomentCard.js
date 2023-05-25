import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function MomentCard(props) {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="project-card">
                <Card className="project-card-view">
                    <Card.Header as="h4">{props.title}</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    {props.para1}
                                    <br />
                                    <br />
                                    {props.para2}
                                </Card.Text>
                            </Col>
                            <Col md={6} className="project-card-img">
                                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default MomentCard;