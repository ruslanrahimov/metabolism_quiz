import React from "react";

const LogoBad = () => {

  const styles = {
    backgroundColor: "white",
    borderRadius: "100%",
    padding: "4px",
    border: "6px solid #a91f23",
    display: 'inline-block',
    verticalAlign: 'midle'
  };

  return (
    <svg
      style={styles}
      viewBox="0 0 8 8"
      height="70"
      width="70"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-1.5 1.78l1.5 1.5 1.5-1.5.72.72-1.5 1.5 1.5 1.5-.72.72-1.5-1.5-1.5 1.5-.72-.72 1.5-1.5-1.5-1.5.72-.72z"></path>
    </svg>
  );
};

export default LogoBad;
