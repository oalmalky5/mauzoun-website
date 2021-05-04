import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "../styles/landingPage.module.scss";

const kashidas = [
  { top: "15%", left: "11%" },
  { top: "14%", right: "11%" },
  { top: "25%", left: "35%" },
  { top: "30%", right: "24%" },
  { top: "65%", left: "18%" },
  { top: "65%", right: "20%" },
  { top: "80%", left: "6%" },
  { top: "85%", right: "32%" },
];

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
    // updatePageTransition({
    //   initial: "hidden",
    //   animate: "visible",
    // });
    Cookies.set("NEXT_LOCALE", locale);
    router.push(`/${locale}/home`);
    textAnimationControls.set("instantlyHidden");
  };

  const [kashidaRefs, setKashidaRefs] = React.useState([]);
  React.useEffect(() => {
    // add or remove refs
    setKashidaRefs((kashidaRefs) =>
      Array(kashidas.length)
        .fill()
        .map((_, i) => kashidaRefs[i] || React.createRef())
    );
  }, [kashidas.length]);

  const updateKashidaHoverState = (e, isHovered) => {
    const id = e.target?.id;
    if (!id) return;

    if (isHovered) {
      e.target.src = `/landingPage/${id}.png`;
      e.target.style.marginTop =
        ((e.target.clientHeight / 2) * -0.1).toString() + "px";

      if (e.target.style.left) {
        e.target.style.marginLeft =
          ((e.target.clientWidth / 2) * -0.1).toString() + "px";
      } else {
        e.target.style.marginRight =
          ((e.target.clientWidth / 2) * -0.1).toString() + "px";
      }
    } else {
      e.target.src = `/landingPage/Kashida ${id}.png`;
      e.target.style.marginTop = 0;
      e.target.style.marginLeft = 0;
      e.target.style.marginRight = 0;
    }
  };

  const buildKashida = (id, position) => {
    return (
      <div key={id}>
        <img
          src={`/landingPage/${id}.png`}
          style={{ display: "none", position: "absolute" }}
        />
        <img
          id={id}
          ref={kashidaRefs[id - 1]}
          className={styles.kashida}
          style={{
            transformOrigin: position.left ? "left top" : "right top",
            ...position,
          }}
          src={`/landingPage/Kashida ${id}.png`}
          onMouseEnter={(e) => updateKashidaHoverState(e, true)}
          onMouseLeave={(e) => updateKashidaHoverState(e, false)}
        />
      </div>
    );
  };

  return (
    <>
      <div className={styles.pageContainer}>
        {/* Kashidas organized from top left to bottom right */}
        {kashidas.map((e, i) => buildKashida(i + 1, e))}

        <div />

        <div className={styles.mainPanel}>
          <motion.img
            className={styles.logo}
            src="https://i.imgur.com/HjDbXtR.png"
            alt="Mauzoun logo"
            transition={{ duration: 2 }}
            layoutId="logo"
          />

          <div dir="rtl">
            <p style={{ fontFamily: "GE Dinar Two" }}>
              حب للكلمات وفريق شغوف:
              <br />
              <b>أهلاً بكم في موزون.</b>
            </p>
            <button
              className={styles.languageButton}
              style={{ fontFamily: "GE Dinar One", marginBottom: "30px" }}
              onClick={() => changeLocale("ar")}
            >
              <b>اضغطوا هنا</b> لبدء قصتكم بالعربية.
            </button>
          </div>

          <p style={{ fontFamily: "Alegreya" }}>
            ‫‪A‬‬ ‫‪love‬‬ ‫‪for‬‬ ‫‪words‬‬ ‫‪and‬‬ ‫‪a‬‬ ‫‪team‬‬ ‫‪with‬‬
            ‫‪fervor:‬‬
            <br />
            <b>‫‪welcome‬‬ ‫‪to‬‬ ‫‪Mauzoun.‬‬</b>
          </p>
          <button
            className={styles.languageButton}
            style={{ fontFamily: "Alegreya Sans" }}
            onClick={() => changeLocale("en-US")}
          >
            <b>‫‪Click‬‬ ‫‪here</b>‬‬ ‫‪to‬‬ ‫‪begin‬‬ ‫‪your‬‬ ‫‪story‬‬ ‫‪in‬‬
            ‫‪English.‬‬
          </button>

          <img
            className={styles.bottomKashida}
            src={`/landingPage/Kashida bottom.png`}
            width="270px"
          />
        </div>

        <div />
      </div>
    </>
  );
}
