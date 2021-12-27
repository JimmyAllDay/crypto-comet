import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import LoadingState from "./LoadingState";
// import Footer from "./Footer";
import Dashboard from "../DashboardComponents/Dashboard";
import SearchPage from "../SearchComponents/SearchPage";

import TrendingContainer from "../DashboardComponents/TrendingContainer";
import NewsContainer from "../DashboardComponents/NewsContainer";

import { Routes, Route } from "react-router";

import { Container } from "react-bootstrap";

import axios from "axios";

import "../../Styles/App.scss";

function App() {
  // Dashboard state
  const [dashLoading, setDashLoading] = useState(true);
  const [favs, setFavs] = useState(null);
  const [currentFav, setCurrentFav] = useState(null);
  const [trends, setTrends] = useState(null);
  const [news, setNews] = useState(null);

  // Search page state
  const [state, setState] = useState([]);
  const [data, setData] = useState([]);

  // Initiating API calls
  useEffect(() => {
    initFrontEndAPIs();
    callBackendAPI();
  }, []);

  const initFrontEndAPIs = () => {
    setDashLoading(true);
    // First URL
    const urlOne =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=250&page=1&sp";
    // Second URL
    const urlTwo = "https://api.coingecko.com/api/v3/search/trending";

    // Third URL variables
    const today = new Date();
    const yearAgoSecs = Math.round(
      today.setFullYear(today.getFullYear() - 1) / 1000
    );
    const todaySecs = Math.round(Date.now() / 1000);
    const urlThreeBase = "https://api.coingecko.com/api/v3/coins/";

    // First two URL calls stored in variables
    const requestOne = axios.get(urlOne);
    const requestTwo = axios.get(urlTwo);

    // Axios implementation
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];

          const urlThree = `${urlThreeBase}${responseOne.data[0].id}/market_chart/range?vs_currency=usd&from=${yearAgoSecs}&to=${todaySecs}`;

          // Nested third API call
          axios
            .get(urlThree)
            .then((response) => {
              setFavs([
                {
                  name: responseOne.data[0].name,
                  image: responseOne.data[0].image,
                  data: response.data,
                },
              ]);
              setCurrentFav({
                name: responseOne.data[0].name,
                image: responseOne.data[0].image,
                data: response.data,
              });
              setTrends(responseTwo.data.coins);
            })
            .catch((errors) => {
              //TODO: handle errors
              console.log(errors);
            });

          // Update search page state
          setState(responseOne.data);
          setData(responseOne.data);

          // Set boolean value to end loading state
          setDashLoading(false);
        })
      )
      .catch((errors) => {
        //TODO: handle errors
        console.log(errors);
      });
  };

  const callBackendAPI = async () => {
    axios
      .get("http://localhost:5000/news_api")
      .then((response) => {
        setNews(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  // Get data for selected favourite currency
  const addFav = (searchData) => {
    // http request variables
    // get date range
    const today = new Date();
    const yearAgoSecs = Math.round(
      today.setFullYear(today.getFullYear() - 1) / 1000
    );
    const todaySecs = Math.round(Date.now() / 1000);

    //  Base URL
    const baseURL = "https://api.coingecko.com/api/v3/coins/";
    // Request URL
    const requestURL = `${baseURL}${searchData.id}/market_chart/range?vs_currency=usd&from=${yearAgoSecs}&to=${todaySecs}`;

    // HTTP call
    axios({ url: requestURL })
      .then((response) => {
        if (favs.length === 0) {
          setFavs([
            ...favs,
            {
              name: searchData.name,
              image: searchData.image,
              data: response.data,
            },
          ]),
            setCurrentFav({
              name: searchData.name,
              image: searchData.image,
              data: response.data,
            });
        } else {
          setFavs([
            ...favs,
            {
              name: searchData.name,
              image: searchData.image,
              data: response.data,
            },
          ]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Switch currency displayed in chart
  const favsHandler = (index) => {
    setCurrentFav(favs[index]);
  };

  // Remove favourited currency
  const removeFav = (index) => {
    if (favs[index] === currentFav) {
      if (index === 0) {
        setCurrentFav(favs[index + 1]);
      }
      if (index !== 0) {
        setCurrentFav(favs[index - 1]);
      }

      setFavs(
        favs.filter((fav) => {
          return fav !== favs[index];
        })
      );
    } else {
      setFavs(
        favs.filter((fav) => {
          return fav !== favs[index];
        })
      );
    }
  };

  return (
    <Container fluid className="p-0 d-flex flex-column h-100 bg-primary">
      <Navigation />
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
      {/* <Footer /> */}
    </Container>
  );
}

export default App;

// TODO: refactor API calls - pass a single request to node and access all endpoints from backend.
// TODO: address error caused by empty favourties array
// TODO: Links in navbar on search page - these propogate additional links at small screen widths. Is this a problem?
