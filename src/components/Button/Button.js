import React from "react";
import styles from "./button.module.css";

function MainButton({ type, label, onStepUpdate }) {
  return (
    <button
      onClick={() => onStepUpdate()}
      className={styles[type]}
    >
      {label}
    </button>
  );
}

export default MainButton;
