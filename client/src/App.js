import React from "react";
import Navigation from "./components/utils/Navigation";
import HandleData from "./components/utils/HandleData";
import Routing from "./components/utils/Routing";

import { Container } from "react-bootstrap";

import "./styles/App.scss";

function App() {
  return (
    <Container fluid className="p-0 d-flex flex-column h-100 bg-primary">
      <Navigation />
      <HandleData routes={<Routing />} />
    </Container>
  );
}

export default App;

//TODO: error handling
//TODO: install styled components and refactor styling, including:
//TODO:         Fix Chart.js flicker - https://github.com/chartjs/Chart.js/issues/4179
//TODO:         Searchbar and placeholder text should shrink on screenwidth change
//TODO:         Add background image to search page
//TODO:         Font color for add button
//TODO:         Update favourite button on smaller screen size, possibly just use a variant of the current favourite button
//TODO: store api keys in environment variables
//TODO: Set up Node to render client
//TODO: Deploy

//TODO: Write tests - unable to resolve dependency tree to install react testing library
