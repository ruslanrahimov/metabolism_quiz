import React from "react";
import "./FooterLogo.css";
import logo from "../../assets/skt-vertical-700x160_19ef_7.png";

function FooterLogo() {
  return (
    <div className="footer-logo-wrapper mx-auto py-2.5">
      <img className="footer-logo w-36 mx-auto" src={logo} alt="ketotest" />
    </div>
  );
}

export default FooterLogo;
