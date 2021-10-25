import React from "react";
import ReactPaginate from "react-paginate";

function PaginationComp(props) {
  return (
    <ReactPaginate
      pageCount={props.pageCount}
      onPageChange={(e) => {
        props.clickHandler(e);
      }}
      marginPagesDisplayed={1}
      pageRangeDisplayed={10}
      previousLabel={"prev"}
      nextLabel={"next"}
      breakLabel={"..."}
      containerClassName={"pagination mx-5 mt-2"}
      previousClassName={"pagination-prev"}
      nextClassName={"pagination-next"}
      previousLinkClassName={"pagination-l-n-links"}
      nextLinkClassName={"pagination-l-n-links"}
      pageLinkClassName={"pagination-links"}
      breakClassName={"pag-break"}
      breakLinkClassName={"pag-break-link"}
      pageClassName={"pag-page"}
      activeClassName={"active-pag"}
    />
  );
}

export default PaginationComp;
