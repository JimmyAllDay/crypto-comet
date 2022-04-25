import React from "react";
// import background from "../../Assets/comet.svg";
import Coin from "./Coin";
// import LoadingState from "../MainComponents/LoadingState";
// import Error from "./Error";
import CoinsHeader from "./CoinsHeader";
// import BgImage from "./BgImage";

import { Container } from "react-bootstrap";

export default function CurrencyContainer(props) {
  const { addFav, pagData, favs, data } = props;
  const currencies = pagData.map(function (coin, index) {
    return <Coin key={index} data={coin} addFav={addFav} favs={favs} />;
  });

  const noResults =
    "There are no results with that search term in the top 250 currencies. Try another.";

  return (
    <Container fluid className="border border-dark rounded-1 bg-light p-1">
      {data.length !== 0 ? (
        <>
          <CoinsHeader />
          {currencies}
        </>
      ) : (
        "There are no currencies in state that contain that search query"
      )}
    </Container>
  );
}
