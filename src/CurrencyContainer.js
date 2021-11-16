import React from "react";
import background from "./Assets/comet.svg";
import Coin from "./Coin";
import LoadingState from "./LoadingState";
import Error from "./Error";
import CoinsHeader from "./CoinsHeader";
import BgImage from "./BgImage";

function CurrencyList(props) {
  const { loading, data, error, errorMessage, pagData } = props;

  const currencies = pagData.map(function (coin, index) {
    return <Coin key={index} data={coin} />;
  });

  return (
    <div className="outer-coin-container">
      <div className="border mt-4 pb-2 rounded-1 border border-dark coin-container image-wrap">
        {!loading && !error && data.length > 5 && (
          <BgImage opacity={0.3} background={background} />
        )}
        {!loading && !error && <CoinsHeader />}
        {loading ? (
          <LoadingState />
        ) : errorMessage ? (
          <Error error={props.errorMessage} />
        ) : data.length === 0 ? (
          <div className="m-3 no-currencies">
            No currencies with that search term, try another one...
          </div>
        ) : (
          currencies
        )}
      </div>
    </div>
  );
}

export default CurrencyList;
