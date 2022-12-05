import React from "react";
import styles from "./button.module.css";

function MainButton({ type, label }) {
  return <button className={styles[type]}>{label}</button>;
}

export default MainButton;
