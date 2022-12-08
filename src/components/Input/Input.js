import React from "react";
import styles from "./input.module.css";

function Input({ placeholder, type, name }) {
  return (
    <input
      type={type}
      className={styles[name]}
      placeholder={placeholder}
      required
    ></input>
  );
}

export default Input;
