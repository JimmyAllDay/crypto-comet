import React, { useState } from "react";
import CurrencyContainer from "./CurrencyContainer";
import PaginationComp from "./PaginationComp";

import { Container, Row, InputGroup, FormControl } from "react-bootstrap";

function SearchPage(props) {
  const { data, setData, state, favs, addFav, loading } = props;

  const [currentPage, setCurrentPage] = useState(0);

  // Pagination logic derived from https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e
  const perPage = 25;
  const offset = currentPage * perPage;
  const currentPageData = data.slice(offset, offset + perPage);
  const pageCount = Math.ceil(data.length / perPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  function filterRes(input, data) {
    input === "" && setData(state);
    currentPage !== 0 && setCurrentPage(0);
    const userInput = input.toLowerCase();
    const result = data.filter((coin) => {
      return coin.name.toLowerCase().includes(userInput);
    });
    return setData(result);
  }

  return (
    <Container fluid className="p-0 min-vh-100">
      <Row className="mt-1 mx-1 d-flex">
        <InputGroup className="mb-1 w-100 p-0 border border-dark rounded-2">
          <FormControl
            type="search"
            className="search-bar"
            placeholder="Search and add currencies"
            onChange={(e) => filterRes(e.target.value, state)}
          />
        </InputGroup>
      </Row>
      <Row className="mt-1 mx-1 d-flex">
        <CurrencyContainer
          favs={favs}
          addFav={addFav}
          loading={loading}
          data={data}
          pagData={currentPageData}
        />
        {data.length > 25 && (
          <PaginationComp
            pageCount={pageCount}
            clickHandler={handlePageClick}
          />
        )}
      </Row>
    </Container>
  );
}

export default SearchPage;
