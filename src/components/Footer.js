import React from "react";
import "./Footer.css";
import FooterLogo from "./FooterLogo";

function Footer() {
  return (
    <div className="section_footer pb-6 bg-white">
      <div className="footer-container mx-auto">
        <FooterLogo />
        <div className="footer-copyright-wrapper mx-auto py-2.5 ff-lato text-xs">
          <div className="footer-copyright text-center">
            Copyright &#169; 2018 - 2022
            <br />
            <a href="#" class="footer-link hover:underline">
              Terms &amp; Condition
            </a>
            &nbsp;|&nbsp;
            <a href="#" class="footer-link hover:underline">
              Privacy Policy
            </a>
            &nbsp;|&nbsp;
            <a href="#" class="footer-link hover:underline">
              Shipping and Returns
            </a>
          </div>
        </div>
        <div className="footer-copyright-wrapper mx-auto py-2.5 ff-lato text-xs">
          <div className="footer-copyright text-center">
            Disclaimer: Weight loss and fitness results vary depending on the
            person. No guarantee is provided or implied. You should assume that
            any weight loss shown in testimonials, advertisements, stories, blog
            posts, or anywhere else on our website are not typical. Typical
            weight loss is 2 to 3 lbs per week when an individual consistently
            follows a sound nutrition and exercise program designed around best
            practice guidelines. SimpleKetoTest.com does not provide medical
            advice. All information contained within this site is for
            informational purposes only. It is not intended to diagnose, treat,
            cure, or prevent any health problem, nor is it intended to replace
            the advice of a qualified medical doctor, nutritionist, dietician,
            or qualified physiotherapist. Always consult your doctor, qualified
            health professional, or physiotherapist on any matters regarding
            your health or on any opinions expressed within this website before
            starting any weight loss program.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
