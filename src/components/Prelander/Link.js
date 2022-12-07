import React from "react";
import styles from "./link.module.css";

const Link = ({ href, text }) => {
  return (
    <div className="linkWrapper">
      <div className={styles.linkInner}>
        <a href={href} className={styles.link}>
          {text}
        </a>
      </div>
    </div>
  );
};

export default Link;
