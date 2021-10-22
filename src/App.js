import React, { useEffect, useState } from "react";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import CurrencyList from "./CurrencyList";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  // Mock API call
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sp"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  // Pagination logic from https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e
  const perPage = 25;
  const offset = currentPage * perPage;
  const currentPageData = data.slice(offset, offset + perPage);
  const pageCount = Math.ceil(data.length / perPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div>
      <Header />
      <div className="border p-2">
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
