import React from "react";
import { Container } from "react-bootstrap";

function ErrorState({ message }) {
  return (
    <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h3 className="text-danger mb-3">⚠️ Error</h3>
        <p className="text-muted">{message}</p>
        <button 
          className="btn btn-primary mt-3" 
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </Container>
  );
}

export default ErrorState;

