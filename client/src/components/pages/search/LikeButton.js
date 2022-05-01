import React, { useState, useEffect } from "react";

import { AiOutlineCheckCircle } from "react-icons/ai";

import { Container, Button, Spinner } from "react-bootstrap";

export default function LikeButton(props) {
  const { addFav, favs, data, label } = props;
  const [loading, setLoading] = useState(false);

  //Check for presence of the rendered currency in favs array, within 'HandleData.js' component
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
      return <p className="mx-auto">{label}</p>;
    }
  }

  return (
    <Container fluid className="p-0 d-flex">
      <Button
        variant="outline-info"
        size="sm"
        className="d-flex mx-auto button-style"
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
