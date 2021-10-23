import React, { useEffect, useState } from "react";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import CurrencyList from "./CurrencyList";
import SearchBar from "./SearchBar";
import LoadingState from "./LoadingState";
import Footer from "./Footer";
import Error from "./Error";

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
        console.log(response);
        setData(response.data);
        setState(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error.toJSON());
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
    <div>
      <Header />
      <div className="border p-2">
        <SearchBar data={state} handler={filterRes} />
        <div className="border">
          {loading ? (
            <LoadingState />
          ) : error ? (
            <Error error={errorMessage} />
          ) : data.length === 0 ? (
            "Woops, no currencies with that search term, try another one..."
          ) : (
            <CurrencyList data={currentPageData} />
          )}
          {data.length > 25 && !error && (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
