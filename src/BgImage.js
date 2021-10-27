import React from "react";

function BgImage(props) {
  const { background, opacity } = props;

  return (
    <div>
      <img
        className={"image-wrap-bg"}
        style={{ opacity: `${opacity}` }}
        src={background}
        alt="comet logo"
      />
    </div>
  );
}

export default BgImage;
