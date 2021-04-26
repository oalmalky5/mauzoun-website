import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import styles from "../styles/landingPage.module.scss";

export default function LandingPage({
  updatePageTransition,
  textAnimationControls,
}) {
  const router = useRouter();

  React.useEffect(() => {
    router.prefetch("/en-US/home");
    router.prefetch("/ar/home");
  }, []);

  const changeLocale = (locale) => {
    updatePageTransition({
      initial: "hidden",
      animate: "visible",
    });
    Cookies.set("NEXT_LOCALE", locale);
    router.push(`/${locale}/home`);
    textAnimationControls.set("instantlyHidden");
  };

  const preferredSide = router.locale === "ar" ? "right" : "left";
  const oppositeSide = router.locale === "ar" ? "left" : "right";

  const buildKashida = (position) => {
    position[preferredSide] = position.preferredSide;
    delete position.preferredSide;
    position[oppositeSide] = position.oppositeSide;
    delete position.oppositeSide;

    return (
      <img
        className={styles.kashida}
        style={position}
        src="/Tilted Square.svg"
        height="30"
        width="30"
        priority="true"
      />
    );
  };

  return (
    <>
      {/* Kashidas organized from top left to bottom right */}
      {buildKashida({ top: "150px", preferredSide: "180px" })}
      {buildKashida({ top: "130px", oppositeSide: "180px" })}
      {buildKashida({ top: "200px", preferredSide: "580px" })}
      {buildKashida({ top: "240px", oppositeSide: "450px" })}
      {buildKashida({ top: "530px", preferredSide: "290px" })}
      {buildKashida({ top: "540px", oppositeSide: "300px" })}
      {buildKashida({ top: "650px", preferredSide: "100px" })}
      {buildKashida({ top: "700px", oppositeSide: "550px" })}

      <div className={styles.pageContainer}>
        <div />

        <div className={styles.mainPanel}>
          <motion.img
            src="https://i.imgur.com/HjDbXtR.png"
            alt="Mauzoun logo"
            transition={{ duration: 2 }}
            layoutId="logo"
          />

          <button
            className={styles.languageButton}
            onClick={() => changeLocale("en-US")}
            style={{ left: "25%", fontFamily: "Alegreya" }}
          >
            <BsChevronLeft className={styles.chevron} />
            English
          </button>

          <button
            className={styles.languageButton}
            style={{}}
            onClick={() => changeLocale("ar")}
            style={{ right: "25%", fontFamily: "GE Dinar Two" }}
          >
            عربــي
            <BsChevronRight className={styles.chevron} />
          </button>
        </div>

        <div />
      </div>
    </>
  );
}
