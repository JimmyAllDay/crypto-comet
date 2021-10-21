import React from "react";

function CurrencyList(props) {
  const currencies = props.data.map(function (currency, index) {
    return <div key={index}>{currency}</div>;
  });

  return (
    <div>
      <ul>{currencies}</ul>
    </div>
  );
}

export default CurrencyList;
