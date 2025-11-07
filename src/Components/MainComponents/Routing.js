import React from "react";

import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import Dashboard from "../DashboardComponents/Dashboard";
import SearchPage from "../SearchComponents/SearchPage";
import NewsContainer from "../DashboardComponents/NewsContainer";
import TrendingContainer from "../DashboardComponents/TrendingContainer";

import { Container } from "react-bootstrap";

import { Routes, Route } from "react-router-dom";

export default function Routing(props) {
  const {
    dashLoading,
    error,
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
          error ? (
            <ErrorState message={error} />
          ) : dashLoading || favs === null || trends === null || news === null ? (
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
          error ? (
            <ErrorState message={error} />
          ) : dashLoading ? (
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
