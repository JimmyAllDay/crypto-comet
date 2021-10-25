import React from "react";
import background from "./Assets/comet.svg";
import Coin from "./Coin";
import LoadingState from "./LoadingState";
import Error from "./Error";

function CurrencyList(props) {
  const { loading, data, errorMessage, pagData } = props;
  console.log(props);

  const currencies = pagData.map(function (coin, index) {
    return <Coin key={index} data={coin} />;
  });

  return (
    <div className="outer-coin-container pt-">
      <div className="mx-5 border mt-5 rounded-1 coin-container border border-dark image-wrap pb-2">
        <img className="image-wrap-bg" src={background} alt="comet logo" />
        <div className="d-flex mx-2 my-4 border-bottom border-dark coin">
          <div className="col-1 m-auto text-center">No</div>
          <div className="col-1 m-auto icon-container-header">Logo</div>
          <div className="col-3 m-auto m-1 text-center">Currency</div>
          <div className="col-1 m-auto  m-1 text-center">Symbol</div>
          <div className="col-2 m-auto  m-1 text-center">Price</div>
          <div className="col m-auto m-1 text-center">24h price dif</div>
          <div className="col m-auto m-1 text-center">24h high</div>
          <div className="col m-auto m-1 text-center">24h low</div>
        </div>
        {loading ? (
          <LoadingState />
        ) : errorMessage ? (
          <Error error={props.errorMessage} />
        ) : data.length === 0 ? (
          "Woops, no currencies with that search term, try another one..."
        ) : (
          currencies
        )}
      </div>
    </div>
  );
}

export default CurrencyList;
