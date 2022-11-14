import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

function NavResp() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Spirits Network</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/audience">Audience</Nav.Link>
                        <Nav.Link href="/sales">Sales</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavResp;