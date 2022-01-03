import React from "react";
import { Container, Col } from "react-bootstrap";

import ReactTooltip from "react-tooltip";

import "../../Styles/trending.scss";
// import "../../Styles/trending.css";

function TrendingContainer(props) {
  console.log(props);
  const trendingCoins = props.trends.map((coin, i) => {
    const reduceInt = (int) => {
      const array = Array.from(String(int), Number);
      array.splice(4);
      const firstChar = array.shift();
      return `${firstChar}.${array.slice(1).join("")}...`;
    };

    return (
      <Container
        fluid
        key={i}
        className="p-0 px-1 d-flex justify-content-between mb-2 rounded-1 shadow-sm"
      >
        <Col xs={1} className="my-auto mx-2">{`${i + 1}.`}</Col>
        <Col xs={1} className="image-wrapper">
          <img
            src={coin.item.small}
            alt={`${coin.item.symbol} icon`}
            style={{ height: "30px" }}
          />
        </Col>
        <Col className="my-auto ms-3 me-2">{coin.item.name}</Col>
        <Col className="my-auto ms-3 me-2 d-none d-sm-inline-block">
          {coin.item.symbol}
        </Col>
        <Col
          xs={2}
          className="ms-auto me-1 text-info my-auto"
          title={`${coin.item.price_btc}`}
        >
          <p
            className="my-auto price-tool-tip"
            data-tip
            data-for={`trending-${i}`}
          >{`$${reduceInt(coin.item.price_btc)}`}</p>
        </Col>
        <ReactTooltip
          id={`trending-${i}`}
          place="left"
          type="dark"
          effect="solid"
        >
          {`$ ${coin.item.price_btc} / USD`}
        </ReactTooltip>
      </Container>
    );
  });

  return (
    <Container
      fluid
      className="border border-dark rounded-3 p-1 bg-light trends-container"
    >
      <div className="mb-2 p-1">
        <h6 className="my-auto rounded-1 w-auto px-2 py-1">Trending</h6>
      </div>
      {trendingCoins}
    </Container>
  );
}
export default TrendingContainer;
