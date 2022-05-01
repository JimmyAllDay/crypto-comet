import React from "react";
import Coin from "./Coin";
import CoinsHeader from "./CoinsHeader";

import { Container } from "react-bootstrap";

export default function CurrencyContainer(props) {
  const { addFav, pagData, favs, data } = props;
  const currencies = pagData.map(function (coin, index) {
    return <Coin key={index} data={coin} addFav={addFav} favs={favs} />;
  });

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
