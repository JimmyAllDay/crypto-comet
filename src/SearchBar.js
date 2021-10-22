import React from "react";

function SearchBar(props) {
  //   console.log(props);
  return (
    <div className="m-2 border">
      <input
        className="w-100"
        onChange={(e) => props.handler(e.target.value, props.data)}
      />
    </div>
  );
}

export default SearchBar;
