import React from "react";
import styles from "./genderButton.module.css";
import maleIcon from "../../assets/male_9090_13.png";
import femaleIcon from "../../assets/female_c847_14.png";

function GenderButton({ gender }) {
  const icon = gender === "male" ? maleIcon : femaleIcon;

  return (
    <div className={`gender-button ${styles[gender]}`}>
      <img
        className="gender-icon w-2/5 block mx-auto"
        src={icon}
        alt="gender"
      />
      <div className="gender-label mt-5 font-semibold text-white text-2xl uppercase">
        {gender}
      </div>
    </div>
  );
}

export default GenderButton;
