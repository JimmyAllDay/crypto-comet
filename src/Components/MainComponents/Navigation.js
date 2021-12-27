import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import cryptoicon from "../../Assets/cryptoicon.svg";

function Navigation() {
  return (
    <Navbar bg="light" expand="md" className="m-0 border-bottom border-dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/" className="d-flex">
            <h3 className="my-auto p-0 me-3">Crypto Comet </h3>
            <img
              src={cryptoicon}
              width="50"
              height="50"
              className="d-inline-block bg-light"
              alt="Crypto Comet logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link href="/">Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/search">
              <Nav.Link href="/search">Search</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news" className="d-lg-none">
              <Nav.Link href="/news">News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/trends" className="d-lg-none">
              <Nav.Link href="/trends">Trends</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
