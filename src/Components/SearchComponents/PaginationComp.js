import React from "react";
import ReactPaginate from "react-paginate";

import { Container } from "react-bootstrap";

import "../../Styles/paginationComp.scss";

function PaginationComp(props) {
  return (
    <Container fluid className="p-0 pagination-container">
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
        containerClassName={"pagination mt-1"}
        previousClassName={"pagination-prev border border-dark"}
        nextClassName={"pagination-next border border-dark ms-1"}
        previousLinkClassName={"pagination-l-n-links"}
        nextLinkClassName={"pagination-l-n-links"}
        pageLinkClassName={"pagination-links"}
        breakClassName={"pag-break"}
        breakLinkClassName={"pag-break-link"}
        pageClassName={"pag-page border border-dark ms-1 rounded-1"}
        activeClassName={"active-pag"}
      />
    </Container>
  );
}

export default PaginationComp;
