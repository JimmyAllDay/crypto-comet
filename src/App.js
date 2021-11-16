import React, { useEffect, useState } from "react";
import Header from "./Header";
import Dashboard from "./DashboardComponents/Dashboard";
import SearchPage from "./SearchPage";
import Trending from "./Trending";
import Footer from "./Footer";

import { Routes, Route } from "react-router";

import { Container, Row } from "react-bootstrap";

import axios from "axios";
import "./App.css";

function App() {
  // Dashboard data
  const [trends, setTrends] = useState([]);

  // Search page data
  const [state, setState] = useState([]);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // API call
  useEffect(() => {
    const urlOne =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=250&page=1&sp";
    const urlTwo = "https://api.coingecko.com/api/v3/search/trending";

    const requestOne = axios.get(urlOne);
    const requestTwo = axios.get(urlTwo);

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          console.log("Response two:", responseTwo);
          setData(responseOne.data);
          setState(responseOne.data);
          setLoading(false);

          setTrends(responseTwo.data.coins);
        })
      )
      .catch((errors) => {
        // react on errors.
        console.log(errors);

        setError(true);
        setLoading(false);
        setErrorMessage(error.toJSON().status);
      });

    // axios({
    //   url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=250&page=1&sp",
    // })
    //   .then((response) => {
    //     setData(response.data);
    //     setState(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(true);
    //     setLoading(false);
    //     setErrorMessage(error.toJSON().status);
    //   });
  }, []);

  return (
    <div>
      <Header />
      <Container fluid className="min-vh-100 d-flex flex-column">
        <Row>
          <Routes>
            <Route path="/" element={<Dashboard trends={trends} />} />
            <Route
              path="/search"
              element={
                <SearchPage
                  setData={setData}
                  state={state}
                  loading={loading}
                  error={error}
                  errorMessage={errorMessage}
                  data={data}
                />
              }
            />
            <Route path="/trending" element={<Trending />} />
          </Routes>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

// TODOS:
// Build out tests, focussing on logic and use these in TDD for future updates
// Loading state does not make use of request size info from http request to show user data loading status through for eg a loading bar. Axios intalled to expose property on http response to allow this functionality, though server not returning value data. Correct headers may need to be sent manually.
// Loader is under-developed. You may wish to update this with an npm package for React, or futher customise the styling on the existing component
// The div with className 'spacer' should move into a component - this is unecessarily cluttering the App.js file though is behaving erratically when encolsed within a component. Style prop to be removed from App.js.
// Repsonsive design needs to be updated for the coin and header components - d-none classes applied to relevant divs are not registering in the DOM
// Address additional items in the spec - include new tab for most popular currencies - axios can be used to make simulatenous api calls
// Build out additional component for each coin - one that navigates to a detailed display for the coin, and shows a ticker for the price of the selected coin
// Include 'favourites' component that allows users to push coins into a new array, where components display additional info, such as fluctutations over longer time-periods
// Footer can be further developed
// bakground image behaviour can be refined
