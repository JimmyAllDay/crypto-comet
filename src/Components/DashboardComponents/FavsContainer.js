import React from "react";

import Container from "react-bootstrap/Container";

import { ImCancelCircle } from "react-icons/im";

import "../../Styles/favourites.scss";

function FavsContainer(props) {
  console.log(props);
  const favCoins = props.favs.map((fav, i) => {
    return (
      <div
        key={i}
        className={`d-flex align-items-center mb-1 p-1 ${
          fav.name === props.currentFav.name ? "selFavWrapper" : null
        }`}
      >
        <div
          className={`fav d-flex border border-light rounded-1 my-auto w-100 ${
            fav.name === props.currentFav.name ? "selFavElem" : null
          }`}
          onClick={() => props.favsHandler(i)}
        >
          <div className="ms-1 my-auto d-flex">
            <img
              src={fav.image}
              style={{ height: "20px" }}
              className="my-auto"
            ></img>
          </div>
          <div className="my-auto ms-2 text-light" style={{ fontSize: "1em" }}>
            {fav.name}
          </div>
          <div
            className="ms-auto mb-auto me-1 text-light d-flex"
            onClick={(e) => {
              e.stopPropagation();
              props.removeFav(i);
            }}
          >
            <ImCancelCircle className="mt-1" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <Container fluid className="">
      <h5 className="bg-dark text-light m-0 mb-2 ms-1 mt-1">Favourites</h5>
      {props.favs.length != 0 && favCoins}
      {props.favs.length <= 1 && (
        <p className="bg-dark text-primary ms-1" style={{ fontSize: "0.8em" }}>
          Add favourites from search page
        </p>
      )}
    </Container>
  );
}
export default FavsContainer;
