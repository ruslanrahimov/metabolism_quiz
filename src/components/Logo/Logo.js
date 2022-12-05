import React from "react";
import "./Logo.css";
import logoPng from "../../assets/skt-vertical-700x160_19ef_7.png";

function Logo() {
  return (
    <div className="logo-wrapper">
      <img src={logoPng} alt="logo" />
    </div>
  );
}

export default Logo;
