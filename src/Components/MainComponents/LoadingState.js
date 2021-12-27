import React from "react";

import Loader from "react-loader-spinner";
import { Container, Row } from "react-bootstrap";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoadingState() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Loader
          className="m-auto border border-dark text-centre"
          type="TailSpin"
          color="cornflowerblue"
          height={75}
          width={75}
          timeout={3000}
        />
      </Row>
    </Container>
  );
}

export default LoadingState;
