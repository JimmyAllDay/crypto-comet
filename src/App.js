import React, { useEffect, useState } from "react";
import Header from "./Header";
import ReactPaginate from "react-paginate";
import CurrencyList from "./CurrencyList";

import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  // Mock API call
  useEffect(() => {
    setTimeout(function () {
      setData([...Array(200).keys()]);
    }, 3000);
  }, []);

  // Pagination logic from https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e
  const perPage = 25;
  const offset = currentPage * perPage;
  const currentPageData = data
    .slice(offset, offset + perPage)
    .map((slice) => slice);
  const pageCount = Math.ceil(data.length / perPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div>
      <Header />
      <Container className="border">
        <div className="commentBox">
          {data.length === 0 ? (
            "Loading..."
          ) : (
            <CurrencyList data={currentPageData} />
          )}
        </div>
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
      </Container>
    </div>
  );
}

export default App;
