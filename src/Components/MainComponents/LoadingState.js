import React, { useState, useEffect } from "react";

import Loader from "react-loader-spinner";
import { Container } from "react-bootstrap";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoadingState() {
  const [showSlowMessage, setShowSlowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlowMessage(true);
    }, 10000); // Show message after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center flex-column">
      <Loader
        type="TailSpin"
        color="cornflowerblue"
        height={75}
        width={75}
      />
      {showSlowMessage && (
        <p className="mt-3 text-muted text-center">
          Server is waking up, this may take up to 60 seconds...
        </p>
      )}
    </Container>
  );
}

export default LoadingState;
