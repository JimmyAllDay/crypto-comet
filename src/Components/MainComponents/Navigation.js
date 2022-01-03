import React from "react";

import {
  Navbar,
  Container,
  Nav,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import cryptoicon from "../../Assets/cryptoicon.svg";
import { BsQuestionCircle } from "react-icons/bs";

function Navigation() {
  return (
    <Navbar bg="light" expand="md" className="m-0 border-bottom border-dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/" className="d-flex">
            <div className="d-flex">
              <h3 className="my-auto p-0 me-sm-3">Crypto Comet</h3>
            </div>
            <div>
              <img
                src={cryptoicon}
                width="50"
                height="50"
                className="d-inline-block bg-light"
                alt="Crypto Comet logo"
              />
            </div>
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
            <OverlayTrigger
              delay={{ hide: 450, show: 300 }}
              overlay={(props) => (
                <Tooltip {...props}>
                  Crypto Comet is a simple dashboard interface optimised for
                  desktop devices.
                </Tooltip>
              )}
              placement="left"
            >
              <Nav.Item className="my-auto ms-auto">
                <h3>
                  <BsQuestionCircle />
                </h3>
              </Nav.Item>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
