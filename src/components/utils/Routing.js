import React from "react";

import LoadingState from "./LoadingState";
import Dashboard from "../pages/dashboard/Dashboard";
import SearchPage from "../pages/search/SearchPage";
import NewsContainer from "../pages/dashboard/NewsContainer";
import TrendingContainer from "../pages/dashboard/TrendingContainer";

import { Container } from "react-bootstrap";

import { Routes, Route } from "react-router-dom";

export default function Routing(props) {
  const {
    dashLoading,
    favs,
    trends,
    news,
    currentFav,
    favsHandler,
    removeFav,
    state,
    data,
    setData,
    addFav,
  } = props;

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          dashLoading || favs === null || trends === null || news === null ? (
            <LoadingState />
          ) : (
            <Dashboard
              favs={favs}
              currentFav={currentFav}
              trends={trends}
              favsHandler={favsHandler}
              removeFav={removeFav}
              news={news}
            />
          )
        }
      />
      <Route
        exact
        path="/search"
        element={
          dashLoading ? (
            <LoadingState />
          ) : (
            <SearchPage
              state={state}
              data={data}
              setData={setData}
              favs={favs}
              addFav={addFav}
            />
          )
        }
      />
      <Route
        exact
        path="/news"
        element={
          news ? (
            <Container fluid className="p-1">
              <NewsContainer news={news} />
            </Container>
          ) : (
            <LoadingState />
          )
        }
      />
      <Route
        exact
        path="/trends"
        element={
          trends ? (
            <Container fluid className="p-1">
              <TrendingContainer trends={trends} />{" "}
            </Container>
          ) : (
            <LoadingState />
          )
        }
      />
    </Routes>
  );
}
