import React from "react";
import Container from "react-bootstrap/Container";

function TrendingContainer(props) {
  const trendingCoins = props.trends.map((coin, i) => {
    return (
      <div
        key={i}
        className="d-flex border mb-2 rounded-1 shadow-sm justify-content-lg-between"
      >
        <div className="my-auto mx-2">{`${i + 1}.`}</div>
        <div style={{ height: "30px" }}>
          <img
            src={coin.item.small}
            alt={`${coin.item.symbol} icon`}
            style={{ height: "30px" }}
          />
        </div>
        <div className="my-auto ms-3 me-2">{coin.item.name}</div>
        <div className="ms-auto me-1">{coin.item.price_btc}</div>
      </div>
    );
  });

  return (
    <Container
      fluid
      className="border border-dark rounded-3 p-1 pe-3 bg-light"
      style={{ height: "250px", overflowY: "auto" }}
    >
      <div className="mb-2 p-1 d-flex">
        <h6 className="my-auto rounded-1 w-auto px-2 py-1">Trending</h6>
      </div>

      <div>{trendingCoins}</div>
    </Container>
  );
}
export default TrendingContainer;
