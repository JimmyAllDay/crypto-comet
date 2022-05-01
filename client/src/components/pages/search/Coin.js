import React from "react";

import { Container, Col } from "react-bootstrap";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import LikeButton from "./LikeButton";

export default function Coin(props) {
  const { addFav, data, favs } = props;

  const {
    market_cap_rank,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
  } = data;

  //Updates styling of name depending on length
  // const checkNameLength = (name) => {
  //   const mediumName = { fontSize: "0.8em" };
  //   const largeName = { fontSize: "0.6em" };
  //   if (name.length > 17) {
  //     return largeName;
  //   } else if (name.length > 12 && name.length <= 17) {
  //     return mediumName;
  //   }
  // };

  //Checks length of price and truncate if too long to display
  const reduceInt = (int) => {
    if (int.toString().length > 8) {
      const array = Array.from(String(int), Number);
      array.splice(4);
      const firstChar = array.shift();
      return `${firstChar}.${array.slice(1).join("")}...`;
    } else {
      return int;
    }
  };

  return (
    <Container fluid className="p-1 d-flex rounded-1 border mb-2">
      <Col xs={1} sm={1} className="ps-1 d-flex">
        <p className="my-auto">{market_cap_rank}</p>
      </Col>
      <Col xs={2} sm={1}>
        <img
          className="mx-auto"
          src={image}
          alt={`${name} logo`}
          style={{ height: "30px" }}
        />
      </Col>
      <Col xs={5} sm={3} className="d-none d-sm-flex">
        <p className="m-auto">{name}</p>
      </Col>
      <Col xs={5} className="d-sm-none">
        <LikeButton data={data} addFav={addFav} favs={favs} label={name} />
      </Col>
      <Col sm={1} className="d-none d-md-inline text-center">
        {symbol}
      </Col>
      <Col
        xs={4}
        sm={2}
        className="text-end text-sm-center my-auto"
      >{`$ ${reduceInt(current_price)}`}</Col>
      <Col
        sm={2}
        className={`d-none d-sm-inline text-sm-center m-auto py-1"
            ${price_change_percentage_24h > 0 ? "text-success" : "text-danger"}
          `}
      >
        {price_change_percentage_24h}
        {price_change_percentage_24h > 0 ? (
          <IoMdArrowDropup />
        ) : (
          <IoMdArrowDropdown />
        )}
      </Col>
      <Col className="d-none d-sm-inline text-center">
        <LikeButton data={data} addFav={addFav} favs={favs} label={"Add"} />
      </Col>
    </Container>
  );
}
