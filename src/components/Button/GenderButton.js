import React from "react";
import styles from "./genderButton.module.css";
import { maleIcon, femaleIcon } from "../../constants/constants";

function GenderButton({ gender, onStepUpdate }) {
  const icon = gender === "male" ? maleIcon : femaleIcon;

  return (
    <button
      onClick={() => onStepUpdate()}
      className={`gender-button ${styles[gender]}`}
    >
      <img
        className="gender-icon w-2/5 block mx-auto"
        src={icon}
        alt="gender"
      />
      <div className={styles.genderLabel}>
        {gender}
      </div>
    </button>
  );
}

export default GenderButton;
