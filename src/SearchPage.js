import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CurrencyContainer from "./CurrencyContainer";
import PaginationComp from "./PaginationComp";

function SearchPage(props) {
  const [currentPage, setCurrentPage] = useState(0);
  //   const [state, loading, error, errorMessage] = props;

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
    <div>
      <SearchBar data={props.state} handler={filterRes} />
      <CurrencyContainer
        loading={props.loading}
        error={props.error}
        errorMessage={props.errorMessage}
        data={props.data}
        pagData={currentPageData}
      />
      {!props.loading && props.data.length > 25 && !props.error && (
        <PaginationComp pageCount={pageCount} clickHandler={handlePageClick} />
      )}
    </div>
  );
}

export default SearchPage;
