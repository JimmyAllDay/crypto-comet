import React from "react";
import { Container, Button } from "react-bootstrap";

export default function ErrorFallback() {
  return (
    <Container fluid className="p-0">
      <h5>
        Oh no! We&apos;ve had an error. Click the button to reset the component
      </h5>
      <Button variant="primary" size="lg">
        Try again
      </Button>
    </Container>
  );
}
