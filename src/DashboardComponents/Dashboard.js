import React from "react";

function Dashboard(props) {
  console.log(props);
  const trendingCoins = props.trends.map((coin, i) => {
    return (
      <div key={i} className="d-flex border">
        <div>{`${i + 1}.`}</div>
        <div>
          <img src={coin.item.small} alt={`${coin.item.symbol} icon`} />
        </div>
        <div>{coin.item.name}</div>
        <div>{coin.item.price_btc}</div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-4 vh-100">
        <div className="border border-dark h-100">Favourites</div>
      </div>
      <div className="col">
        <div className="row border border-dark h-50">Ticker</div>
        <div className="row border border-dark h-50">
          <div className="col border border-dark">
            Crypto news API info goes here
          </div>
          <div className="col border border-dark">
            <div>Trending Currencies</div>
            {trendingCoins}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
