import React, { useState, useEffect } from "react";

import { AiOutlineCheckCircle } from "react-icons/ai";

import { Container, Button, Spinner } from "react-bootstrap";

export default function LikeButton(props) {
  const { addFav, favs, data } = props;
  const [loading, setLoading] = useState(false);

  //Checks for presence of the rendered component currency in favs array within HandleData.js
  const checkUpdate = (favs, coin) =>
    favs.find((fav) => fav.name === coin.name) ? true : false;

  useEffect(() => {
    if (checkUpdate(favs, data)) {
      setLoading(false);
    }
  }, [favs]);

  function renderButtonLabel() {
    if (!loading && checkUpdate(favs, data)) {
      return (
        <h5 className="p-0 m-0 d-flex mx-auto">
          <AiOutlineCheckCircle className="my-auto mx-auto text-success" />
        </h5>
      );
    } else if (loading) {
      return (
        <Spinner
          animation="border"
          size="sm"
          className="mx-auto my-auto"
          variant={"light"}
        />
      );
    } else {
      return "Add";
    }
  }

  const buttonStyle = {
    width: "50px",
    height: "30px",
  };

  return (
    <Container fluid className="p-0 d-flex">
      <Button
        variant="outline-info"
        size="sm"
        style={buttonStyle}
        className="d-flex mx-auto"
        onClick={() => {
          setLoading(true);
          addFav(data);
        }}
        disabled={checkUpdate(favs, data)}
      >
        {renderButtonLabel()}
      </Button>
    </Container>
  );
}
