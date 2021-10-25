import React from "react";

function Error(props) {
  return (
    <div cassName="error m-5 border border-primary">
      Uh oh, we&apos;ve had a {props.error} error. Please refresh the page or
      check back later.
    </div>
  );
}

export default Error;
