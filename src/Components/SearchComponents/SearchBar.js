import React from "react";

function SearchBar(props) {
  return (
    <div>
      <input
        className="w-100 search-bar"
        onChange={(e) => props.handler(e.target.value, props.data)}
        placeholder="Search currencies"
      />
    </div>
  );
}

export default SearchBar;
