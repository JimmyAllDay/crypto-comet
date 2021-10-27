import React, { useEffect, useState } from "react";
import Header from "./Header";
import PaginationComp from "./PaginationComp";
import CurrencyContainer from "./CurrencyContainer";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // API call
  useEffect(() => {
    axios({
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=250&page=1&sp",
    })
      .then((response) => {
        setData(response.data);
        setState(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        setErrorMessage(error.toJSON().status);
      });
  }, []);

  // Pagination logic derived from https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e
  const perPage = 25;
  const offset = currentPage * perPage;
  const currentPageData = data.slice(offset, offset + perPage);
  const pageCount = Math.ceil(data.length / perPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  function filterRes(input, data) {
    const userInput = input.toLowerCase();
    const result = data.filter((coin) => {
      return coin.name.toLowerCase().includes(userInput);
    });
    return setData(result);
  }

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <SearchBar data={state} handler={filterRes} />
      <CurrencyContainer
        loading={loading}
        error={error}
        errorMessage={errorMessage}
        data={data}
        pagData={currentPageData}
      />
      {!loading && data.length > 25 && !error && (
        <PaginationComp pageCount={pageCount} clickHandler={handlePageClick} />
      )}
      <div className="spacer flex-grow"></div>
      <Footer />
    </div>
  );
}

export default App;

// TODOS:
// Build out tests, focussing on logic and use these in TDD for future updates
// User is currently able to click on a link (for eg, page 6) in the pagination component, then enter a search criteria, and see no results,
// despite that results are available in the data array - logic needs to be updated to take user back to last populated page on user filter of data array
// Loading state does not make use of request size info from http request to show user data loading status through for eg a loading bar. Axios intalled to expose property on http response to allow this functionality, though server not returning value data. Correct headers may need to be sent manually.
// Loader is under-developed. You may wish to update this with an npm package for React, or futher customise the styling on the existing component
// The div with className 'spacer' should move into a component - this is unecessarily cluttering the App.js file though is behaving erratically when encolsed within a component. Style prop to be removed from App.js.
// Repsonsive design needs to be updated for the coin and header components - d-none classes applied to relevant divs are not registering in the DOM
// Address additional items in the spec - include new tab for most popular currencies - axios can be used to make simulatenous api calls
// Build out additional component for each coin - one that navigates to a detailed display for the coin, and shows a ticker for the price of the selected coin
// Include 'favourites' component that allows users to push coins into a new array, where components display additional info, such as fluctutations over longer time-periods
// Footer can be further developed
// bakground image behaviour can be refined
