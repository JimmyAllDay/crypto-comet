import React, { useEffect, useState } from "react";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import CurrencyList from "./CurrencyList";
import SearchBar from "./SearchBar";

import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Mock API call
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sp"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setState(data);
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
        <div className="">
          {data.length === 0 ? (
            "Loading..."
          ) : (
            <CurrencyList data={currentPageData} />
          )}

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
        </div>
      </div>
    </div>
  );
}

export default App;
