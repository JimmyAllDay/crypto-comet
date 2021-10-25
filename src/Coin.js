import React from "react";

function Coin(props) {
  console.log(props);
  const {
    market_cap_rank,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    high_24h,
    low_24h,
  } = props.data;

  return (
    <div className="d-flex m-2 border px-1 rounded-1 coin">
      <div className="col-1 m-auto text-center">{market_cap_rank}</div>
      <div className="col-1 m-auto icon-container">
        <img className="mx-auto icon" src={image} alt={`${name} logo`} />
      </div>
      <div className="col-3 m-auto m-1 text-center">{name}</div>
      <div className="col-1 m-auto border-start m-1 text-center">{symbol}</div>
      <div className="col-2 m-auto border-start m-1 text-center">
        {current_price}
      </div>
      <div className="col m-auto border-start m-1 text-center">
        {price_change_percentage_24h}
      </div>
      <div className="col m-auto border-start m-1 text-center">{high_24h}</div>
      <div className="col m-auto border-start m-1 text-center">{low_24h}</div>
    </div>
  );
}

export default Coin;
