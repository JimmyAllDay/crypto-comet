import React from "react";

import { Container, Col } from "react-bootstrap";

function CoinsHeader() {
  return (
    <Container fluid className="p-0 d-flex border-bottom border-dark mb-2">
      <Col xs={1} sm={1} className="ps-1">
        Rank
      </Col>
      <Col xs={2} sm={1}>
        <div className="d-none d-sm-inline ps-sm-1">Logo</div>
      </Col>
      <Col xs={5} sm={3} className="text-center">
        Currency
      </Col>
      <Col sm={1} className="d-none d-md-inline ps-md-4">
        Symbol
      </Col>
      <Col xs={4} sm={2} className="text-end text-sm-center pe-1">
        Price
      </Col>
      <Col sm={2} className="d-none d-sm-inline text-sm-center">
        24h dif
      </Col>
      <Col sm={2} className="d-none d-sm-inline text-sm-end text-md-center">
        Favourite
      </Col>
    </Container>
  );
}

export default CoinsHeader;
