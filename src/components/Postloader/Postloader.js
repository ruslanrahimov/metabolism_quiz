import React from "react";
import "./Postloader.css";
import loaderGif from "../../assets/loader.gif";

function Postloader() {
  return (
    <div className="postloader">
      <img src={loaderGif} alt="loader" />
    </div>
  );
}

export default Postloader;
