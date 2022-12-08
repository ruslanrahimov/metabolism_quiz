import React from "react";
import "../../assets/fonts.css";
import styles from "./prelander.module.css";
import LogoBad from "./LogoBad";
import LogoGood from "./LogoGood";
import Link from "./Link";
import Footer from "../Footer/Footer";

const Prelander = ({ active }) => {
  const isActive = active === true ? styles.active : styles.prelander;
  //TODO:: Разбить на компоненты
  return (
    <div className={isActive}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerInner}>
          <h2 className={styles.header}>Thanks for your responses!</h2>
        </div>
      </div>
      <div className="secton-info ff-lato">
        <div className="info-wrapper">
          <div className={styles.infoInner}>
            <div className={styles.infoCondition}>
              <div
                className={`info-condition-block ${styles.infoConditionBlockRed}`}
              >
                <div className={styles.conditionBlockHeaderRed}></div>
                <div className={styles.blockLogoWrapper}>
                  <div className={styles.blockLogoInnerRed}>
                    <LogoBad />
                  </div>
                </div>
                <p className={styles.infoBlockText}>
                  You can leave this amazing opportunity here and return with
                  the same weight-gain rants and nothing useful.
                </p>
              </div>
              <div
                className={`info-condition-block ${styles.infoConditionBlockGreen}`}
              >
                <div className={styles.conditionBlockHeaderGreen}></div>
                <div className={styles.blockLogoWrapper}>
                  <div className={styles.blockLogoInnerGreen}>
                    <LogoGood />
                  </div>
                </div>
                <p className={styles.infoBlockText}>
                  You can end this long tiring struggle for fat loss by trying
                  out the 30 Day keto meal plan and seeing how this catalyst
                  works in your weight loss journey.
                </p>
              </div>
            </div>
            <div className={styles.infoContentWrapper}>
              <div className={styles.infoContentInner}>
                <p className="pb-8">
                  So, if you’re ready to say goodbye to your belly fat, click
                  the button below now to get INSTANT ACCESS to your 30-Day
                  ultra-fast keto challenge.
                </p>
                <p className="pb-8">
                  The only thing that can stop you from making a change is you.
                  That being said, be intelligent enough to know which
                  investment will be better for you in the long run, so you
                  don’t regret it later.
                </p>
                <p className="pb-8">
                  Today is the day to invest in yourself! Let’s put an end to
                  your life-struggle and take your body and health to the next
                  level so that you cannot stop yourself from looking at your
                  curves in the bathroom mirror!
                </p>
              </div>
            </div>
            <div className="info-link">
              <Link href="#" text="Yes I want to take the challenge" />
            </div>
          </div>
        </div>
      </div>
      <div className={`ff-lato ${styles.sectionOffer}`}>
        <div className={styles.sectionOfferWrapper}>
          <div className={styles.sectionOfferInner}>
            <div className="sectionOfferContent">
              <h2 className={styles.sectionOfferContentHeader}>
                Start The 30-Day Ultra Fast Keto Challenge Today!
              </h2>
              <p className={styles.sectionOfferContentText}>
                Just think, in a few weeks, all the excess fat will disappear
                from your hips, stomach, arms, and thighs. And you’ll have a
                smile on your face that won’t fade away. You will finally have
                the body you have always desired, and your life will change for
                the better!
              </p>
              <p className={styles.sectionOfferContentText}>
                Click the button below now and let’s say goodbye to feeling
                under-confident and welcome a new, better-looking version of you
                with all the confidence and self-love in the world!
              </p>
            </div>
            <div className="sectionOfferLink pt-7">
              <Link href="#" text="Yes I want to take the challenge" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
};

export default Prelander;
