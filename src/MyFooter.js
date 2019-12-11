import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";

export default function MyFooter() {
    return (
        <Container fluid className="bg-dark text-light mt-4 p-4 text-center text-md-left">
            <Row>
                <Col md="6">
                    <h2 className="title">Some important information</h2>
                    <p>Here is some final information about the organization.</p>
                </Col>
                <Col md="3">
                    <h5>Some Links</h5>
                    <Nav className="flex-column">
                        <Nav.Link href="#" className="pl-0">Link 1</Nav.Link>
                        <Nav.Link href="#" className="pl-0">Link 2</Nav.Link>
                        <Nav.Link href="#" className="pl-0">Link 3</Nav.Link>
                        <Nav.Link href="#" className="pl-0">Link 4</Nav.Link>
                    </Nav>
                </Col>
                <Col md="3">
                    <h5>More Links</h5>
                    <Nav className="flex-column">
                        <Nav.Link href="#" className="pl-0">Link 1</Nav.Link>
                        <Nav.Link href="#" className="pl-0">Link 2</Nav.Link>
                        <Nav.Link href="#" className="pl-0">Link 3</Nav.Link>
                        <Nav.Link href="#" className="pl-0">Link 4</Nav.Link>
                    </Nav>
                </Col>
            </Row>
            <Container fluid>
                &copy; {new Date().getFullYear()} Copyright: myWebSite.com
            </Container>
        </Container>

    )

}