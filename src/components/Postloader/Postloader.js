import React, { useEffect } from "react";
import "./Postloader.css";
import loaderGif from "../../assets/loader.gif";

function Postloader({ loading }) {

  const postloader = loading === true ? "postloader loading" : "postloader";

  return (
    <div className={postloader}>
      <img src={loaderGif} alt="loader" />
    </div>
  );
}

export default Postloader;
