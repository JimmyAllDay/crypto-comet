import React from "react";

import { Link } from "react-router-dom";

import cryptoicon from "./Assets/cryptoicon.svg";

function Header() {
  return (
    <nav className="nav d-flex">
      <a className="navbar-brand ms-5" href="#">
        Crypto Comet
      </a>
      <div className="image-container">
        <img
          src={cryptoicon}
          className="cryptologo"
          alt="crypto comet logo"
        ></img>
      </div>
      <div className="ms-5 my-auto">
        <Link to="/search">Search</Link>
      </div>
      <div className="ms-5 my-auto">
        <Link to="/trending">Trending</Link>
      </div>
    </nav>
  );
}

export default Header;
