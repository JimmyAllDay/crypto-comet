import React from "react";

function SearchBar(props) {
  //   console.log(props);
  return (
    <div className="m-2 border">
      <input
        className="w-100"
        onChange={(e) => props.handler(e.target.value, props.data)}
        placeholder="Search Cryptocurrencies"
      />
    </div>
  );
}

export default SearchBar;
