import React from "react";

import LoadingState from "./LoadingState";
import Dashboard from "../pages/dashboard/Dashboard";
import SearchPage from "../pages/search/SearchPage";
import NewsContainer from "../pages/dashboard/NewsContainer";
import TrendingContainer from "../pages/dashboard/TrendingContainer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

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

  return dashLoading ? (
    <LoadingState />
  ) : (
    <ErrorBoundary FallbackComponent={() => <ErrorFallback />}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Dashboard
              favs={favs}
              currentFav={currentFav}
              trends={trends}
              favsHandler={favsHandler}
              removeFav={removeFav}
              news={news}
            />
          }
        />
        <Route
          exact
          path="/search"
          element={
            <SearchPage
              state={state}
              data={data}
              setData={setData}
              favs={favs}
              addFav={addFav}
            />
          }
        />
        <Route exact path="/news" element={<NewsContainer news={news} />} />
        <Route
          exact
          path="/trends"
          element={<TrendingContainer trends={trends} />}
        />
      </Routes>
    </ErrorBoundary>
  );
}
