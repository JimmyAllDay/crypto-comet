import React from "react";
// import background from "../../Assets/comet.svg";
import Coin from "./Coin";
// import LoadingState from "../MainComponents/LoadingState";
// import Error from "./Error";
import CoinsHeader from "./CoinsHeader";
// import BgImage from "./BgImage";

import { Container } from "react-bootstrap";

function CurrencyList(props) {
  // const { loading, data, error, errorMessage, pagData } = props;

  const currencies = props.pagData.map(function (coin, index) {
    return <Coin key={index} data={coin} addFav={props.addFav} />;
  });

  return (
    <Container fluid className="border border-dark rounded-1 bg-light p-0">
      <CoinsHeader />
      {currencies}
    </Container>
  );
}

export default CurrencyList;
