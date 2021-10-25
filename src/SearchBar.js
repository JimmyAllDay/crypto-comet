import React from "react";

function SearchBar(props) {
  //   console.log(props);
  return (
    <div className="mt-2 search-bar-container mx-5">
      <input
        className="w-100 search-bar"
        onChange={(e) => props.handler(e.target.value, props.data)}
        placeholder="Search currencies"
      />
    </div>
  );
}

export default SearchBar;
