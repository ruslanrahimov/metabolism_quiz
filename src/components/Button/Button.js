import React from "react";
import styles from "./button.module.css";

function MainButton({ type, label, onStepUpdate, currentStep, steps }) {
  return (
    <button
      onClick={() => onStepUpdate(currentStep, steps)}
      className={styles[type]}
    >
      {label}
    </button>
  );
}

export default MainButton;
