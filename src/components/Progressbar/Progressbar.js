import React from "react";
import "./Progressbar.css";

function Progressbar({ currentStep, steps }) {
  const arrOfCircles = [];
  for (let i = 0; i <= steps; i++) {
    arrOfCircles.push(
      <div className={i === currentStep ? "circle active" : "circle"}></div> //TODO:: Добавить key
    );
  }

  return <div className="progressbar">{arrOfCircles}</div>;
}

export default Progressbar;
