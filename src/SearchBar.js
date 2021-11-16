import React from "react";

function SearchBar(props) {
  //   console.log(props);
  return (
    <div className="mt-4 search-bar-container">
      <input
        className="w-100 search-bar"
        onChange={(e) => props.handler(e.target.value, props.data)}
        placeholder="Search currencies"
      />
    </div>
  );
}

export default SearchBar;
