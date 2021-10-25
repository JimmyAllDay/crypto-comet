import React from "react";
import Navbar from "react-bootstrap/Navbar";

import cryptoicon from "./Assets/cryptoicon.svg";

function Header() {
  return (
    <div className="nav-container h-75 nav-bar">
      <Navbar.Brand className="nav-container-div d-flex h-75 ms-5" href="#home">
        <h5 className="brand-logo my-auto">Crypto Comet</h5>
        <div className="image-container h-100">
          <img
            src={cryptoicon}
            className="cryptologo my-auto ms-3"
            alt="Crypto Comet Logo"
          />
        </div>
      </Navbar.Brand>
    </div>
  );
}

export default Header;
