import React from "react";
import "./MainButton.css";

function MainButton({ href, text }) {
  return (
    <a href={href} className="main-button">
      {text}
    </a>
  );
}

export default MainButton;
