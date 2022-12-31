import React from "react";
import { Col, Row, Container } from "react-bootstrap";

export default function Projects() {
    return (
        <div className="projects-page-content">
            <div className="jumbotron">
                <h1 className="jumbotron-h1">
                    My Projects
                </h1>
                <h2 className="jumbotron-h2">
                    Some things I've made
                </h2>
            </div>
            <Container fluid className="column-container">
                <Row>
                    <Col className="d-flex">One of three columns</Col>
                    <Col xs={6} className="d-flex">One of three columns</Col>
                    <Col className="d-flex">One of three columns</Col>
                </Row>
            </Container>
        </div>
    )
}