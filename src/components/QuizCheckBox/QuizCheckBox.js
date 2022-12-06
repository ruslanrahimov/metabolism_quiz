import React from "react";
import "./QuizCheckBox.css";
import checkIcon from "../../assets/check-icon-1check-ic_2d8a_16.jpg";

function QuizCheckBox({ checkList, item, icon, onCheckBoxUpdate }) {
  const checked = checkList[item] === "checked" ? "icon__checked" : "hidden";
  return (
    <div className="checkbox" onClick={() => onCheckBoxUpdate(item)}>
      <div className="checkbox-icon-wrapper px-2.5 w-1/6">
        <img src={icon} alt={item} className="checkbox-icon" />
      </div>
      <div className="checkbox-title-wrapper px-2.5 w-8/12">
        <div className="checkbox-title">{item}</div>
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
