import React from "react";

function CurrencyList(props) {
  const currencies = props.data.map(function (coin, index) {
    return (
      <div key={index} className="d-flex my-1 border rounded-1 px-1">
        <div className="col m-auto border-end text-center">
          {coin.market_cap_rank}
        </div>
        <div className="col m-auto icon-container">
          <img className="mx-auto" src={coin.image} alt={`${coin.name} logo`} />
        </div>
        <div className="col m-auto border-start m-1 text-center">
          {coin.name}
        </div>
        <div className="col m-auto border-start m-1 text-center">
          {coin.symbol}
        </div>
        <div className="col m-auto border-start m-1 text-center">
          {coin.current_price}
        </div>
        <div className="col m-auto border-start m-1 text-center">
          {coin.price_change_percentage_24h}
        </div>
        <div className="col m-auto border-start m-1 text-center">
          {coin.high_24h}
        </div>
        <div className="col m-auto border-start m-1 text-center">
          {coin.low_24h}
        </div>
        <div className="col m-auto border-start m-1 text-center">
          {coin.total_supply}
        </div>
        <div className="col m-auto border-start m-1 text-center">
          {coin.total_volume}
        </div>
        <div className="col m-auto border-start m-1 text-center">
          {coin.last_updated}
        </div>
      </div>
    );
  });

  return <div className="ps-2 pe-2 pt-1 border">{currencies}</div>;
}

export default CurrencyList;
