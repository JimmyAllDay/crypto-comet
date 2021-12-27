import React, { useState } from "react";
import CurrencyContainer from "./CurrencyContainer";
import PaginationComp from "./PaginationComp";

import { Container, Row } from "react-bootstrap";

function SearchPage(props) {
  const [currentPage, setCurrentPage] = useState(0);

  // Pagination logic derived from https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e
  const perPage = 25;
  const offset = currentPage * perPage;
  const currentPageData = props.data.slice(offset, offset + perPage);
  const pageCount = Math.ceil(props.data.length / perPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  function filterRes(input, data) {
    input === "" && props.setData(props.state);
    currentPage !== 0 && setCurrentPage(0);
    const userInput = input.toLowerCase();
    const result = data.filter((coin) => {
      return coin.name.toLowerCase().includes(userInput);
    });
    return props.setData(result);
  }

  return (
    <Container fluid className="p-0">
      <Row className="h-auto">
        <div className="mt-1 px-3">
          <input
            className="w-100 search-bar"
            onChange={(e) => filterRes(e.target.value, props.state)}
            placeholder="Search currencies"
          />
        </div>
        <div className="mt-1 px-3">
          <CurrencyContainer
            addFav={props.addFav}
            loading={props.loading}
            error={props.error}
            errorMessage={props.errorMessage}
            data={props.data}
            pagData={currentPageData}
          />
        </div>
        <PaginationComp pageCount={pageCount} clickHandler={handlePageClick} />
      </Row>
    </Container>
  );
}

export default SearchPage;
