import React from "react";
import FavsContainer from "./FavsContainer";
import TrendingContainer from "./TrendingContainer";
import NewsContainer from "./NewsContainer";
import LineChart from "./LineChart";

import { Container, Col, Row } from "react-bootstrap";

function Dashboard(props) {
  const emptyData = [
    [0, 0],
    [0, 0],
  ];

  return (
    <Container fluid className="p-0">
      <Row className="gx-0 bg-primary h-auto">
        <Col
          xs={{ span: 12, order: 2 }}
          lg={{ span: 3, order: 1 }}
          className="fav-col bg-dark h-auto"
        >
          <FavsContainer
            currentFav={props.currentFav}
            favsHandler={props.favsHandler}
            favs={props.favs}
            removeFav={props.removeFav}
          />
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          lg={{ span: 9, order: 2 }}
          className="h-100 p-0"
        >
          <Container fluid className="h-100 p-0">
            <Row className="my-1 px-3 h-75">
              <LineChart
                coinName={
                  props.currentFav
                    ? props.currentFav.name
                    : "Select a Coin from the Search Page"
                }
                favData={
                  props.currentFav ? props.currentFav.data.prices : emptyData
                }
              />
            </Row>
            <Row className="d-none d-lg-flex gx-2 p-0 h-25 mb-1">
              <Col className="h-25 p-0 ps-2">
                <NewsContainer news={props.news} />
              </Col>
              <Col className="pe-2 h-25">
                <TrendingContainer trends={props.trends} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
