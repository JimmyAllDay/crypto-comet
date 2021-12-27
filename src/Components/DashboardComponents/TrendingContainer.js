import React from "react";
import Container from "react-bootstrap/Container";

function TrendingContainer(props) {
  const trendingCoins = props.trends.map((coin, i) => {
    return (
      <div key={i} className="d-flex border mb-1 rounded-1">
        <div className="my-auto mx-2">{`${i + 1}.`}</div>
        <div style={{ height: "30px" }}>
          <img
            src={coin.item.small}
            alt={`${coin.item.symbol} icon`}
            style={{ height: "30px" }}
          />
        </div>
        <div className="my-auto mx-2">{coin.item.name}</div>
        <div>{coin.item.price_btc}</div>
      </div>
    );
  });

  return (
    <Container
      fluid
      className="border border-dark rounded-3 bg-light"
      style={{ height: "250px", overflowY: "auto" }}
    >
      <div>
        <h5 className="mt-1">Trending</h5>
      </div>
      <div>{trendingCoins}</div>
    </Container>
  );
}
export default TrendingContainer;
