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
