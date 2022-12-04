import React from "react";
import "./Box.css";

function Box({ image }) {
  return (
    <div className="main-box">
      <img src={image} alt="box" className="main-box-image" />
    </div>
  );
}

export default Box;
