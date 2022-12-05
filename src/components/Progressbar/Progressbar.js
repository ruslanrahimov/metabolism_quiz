import React from "react";
import { useState } from "react";
import "./Progressbar.css";

function Progressbar({ active, circle }) {
  const arrOfCircles = [];
  for (let i = 0; i <= circle; i++) {
    arrOfCircles.push(
      <div className={i === active ? "circle active" : "circle"}></div> //TODO:: Добавить key
    );
  }

  return <div className="progressbar">{arrOfCircles}</div>;
}

export default Progressbar;
