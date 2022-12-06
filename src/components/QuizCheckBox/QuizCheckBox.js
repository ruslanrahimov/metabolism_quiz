import React from "react";
import "./QuizCheckBox.css";
import checkIcon from "../../assets/check-icon-1check-ic_2d8a_16.jpg";

function QuizCheckBox({ status, title, icon, onCheckBoxUpdate }) {
  const checked = status === true ? "icon__checked" : "hidden";

  return (
    <div className="checkbox" onClick={() => onCheckBoxUpdate(status)}>
      <div className="checkbox-icon-wrapper px-2.5 w-1/6">
        <img src={icon} alt={title} className="checkbox-icon" />
      </div>
      <div className="checkbox-title-wrapper px-2.5 w-8/12">
        <div className="checkbox-title">{title}</div>
      </div>
      <div className="checkbox-box-wrapper px-2.5 w-1/6">
        <div className="checkbox-box">
          <img src={checkIcon} alt="checked" className={checked} />
        </div>
      </div>
    </div>
  );
}

export default QuizCheckBox;
