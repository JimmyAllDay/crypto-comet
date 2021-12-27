import React from "react";

import { Button } from "react-bootstrap";

function Coin(props) {
  const {
    market_cap_rank,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
  } = props.data;

  return (
    <div className="d-flex m-2 border rounded-1 coin">
      <div className="col-1 m-auto text-center">{market_cap_rank}</div>
      <div className="col-1 m-auto icon-container">
        <img
          className="mx-auto"
          src={image}
          alt={`${name} logo`}
          style={{ height: "30px" }}
        />
      </div>
      <div className="col-3 m-auto m-1 text-center">{name}</div>
      <div className="col-1 m-auto border-start m-1 text-center d-none d-md-inline">
        {symbol}
      </div>
      <div className="col-2 m-auto border-start m-1 text-center">
        <div>{current_price}</div>
      </div>
      <div className="col m-auto border-start m-1 text-center d-none d-md-inline">
        {price_change_percentage_24h}
      </div>
      <div className="col-2 m-auto border-start m-1 text-center">
        <Button
          variant="outline-dark"
          size="sm"
          className="w-50"
          onClick={() => {
            props.addFav(props.data);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default Coin;
