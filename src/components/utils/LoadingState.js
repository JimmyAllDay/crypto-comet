import React from "react";

import Loader from "react-loader-spinner";
import { Container } from "react-bootstrap";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoadingState() {
  return (
    <Container fluid className="min-vh-100 d-flex justify-content-center">
      <Loader
        className="my-auto"
        type="TailSpin"
        color="cornflowerblue"
        height={75}
        width={75}
        timeout={3000}
      />
    </Container>
  );
}

export default LoadingState;
