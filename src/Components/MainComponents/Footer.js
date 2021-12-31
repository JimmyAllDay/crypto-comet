import React from "react";

import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      fluid
      className="bg-light mt-auto border border-top border-dark"
      style={{ height: "200px" }}
    >
      <Container className="h-100 d-flex flex-column">
        <Row className="mt-auto">
          <Col className="text-dark p-2">
            <a href="https://www.coingecko.com/en/api">Powered by CoinGecko</a>
            <p className="m-0">Made by James Marshall</p>
          </Col>
          <Col className="text-dark p-2 text-center">
            <p className="m-0">email: jameswhmarshall@gmail.com</p>
            <p className="m-0">github: https://github.com/JimmyAllDay</p>
          </Col>
          <Col className="text-light p-2"></Col>
        </Row>
      </Container>
    </Container>
  );
}
