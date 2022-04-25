import React from "react";
import Navigation from "./Navigation";
import HandleData from "./HandleData";
import Routing from "./Routing";

import { Container } from "react-bootstrap";

import "../../Styles/App.scss";

function App() {
  return (
    <Container fluid className="p-0 d-flex flex-column h-100 bg-primary">
      <Navigation />
      <HandleData routes={<Routing />} />
    </Container>
  );
}

export default App;

//TODO: Learn Jest and write tests
//TODO: Cross-browser functionality
//TODO: error handling
//TODO: install styled components and refactor styling, including:
//TODO:         Searchbar and placeholder text should shrink on screenwidth change
//TODO:         Add background image to search page
//TODO:         Font color for add button
//TODO:         Update favourite button on smaller screen size, possibly just use a variant of the current favourite button
//TODO: store api keys in environment variables
//TODO: Set up Node to render client
//TODO: Deploy
