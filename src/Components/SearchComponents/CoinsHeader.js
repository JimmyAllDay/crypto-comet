import React from "react";

function CoinsHeader() {
  return (
    <div className="d-flex mx-2 my-4 border-bottom border-dark coin">
      <div className="col-1 m-auto text-center">No</div>
      <div className="col-1 m-auto icon-container-header">Logo</div>
      <div className="col-3 m-auto m-1 text-center">Currency</div>
      <div className="col-1 m-auto  m-1 text-center d-none d-md-inline">
        Symbol
      </div>
      <div className="col-2 m-auto  m-1 text-center">Price</div>
      <div className="col m-auto m-1 text-center d-none d-md-inline">
        24h price dif
      </div>
      <div className="col-2 m-auto m-1 text-center">Favourite</div>
    </div>
  );
}

export default CoinsHeader;
