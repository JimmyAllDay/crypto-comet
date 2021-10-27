import React from "react";

function Error(props) {
  return (
    <div className="error m-5">
      <h3 className="error m-auto">
        Uh oh, we&apos;ve had a {props.error} error. Please refresh the page or
        check back later.
      </h3>
    </div>
  );
}

export default Error;
