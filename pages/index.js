import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { NextSeo } from 'next-seo';
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
  const [kashidaOut, setKashidaOut] = useState(true)

  React.useEffect(() => {
    // router.events.on('')
    router.prefetch("/en-US/home");
    router.prefetch("/ar/home");
  }, []);

  const changeLocale = (locale) => {
    // updatePageTransition({
    //   initial: "hidden",
    //   animate: "visible",
    // });
    setKashidaOut(!kashidaOut)
    Cookies.set("NEXT_LOCALE", locale);
    setTimeout(() => {
      router.push(`/${locale}/home`);
    }, 200)
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

  const handleMovePage = React.useCallback((click) => {
    //TODO : uncomment this part of code to enable animation
    // gsap.fromTo(
    //   ".background",
    //   { opacity: 1 },
    //   { opacity: 1, x: click === 2 ? -165 : 155, duration: 0.8 }
    // );
    // gsap.to(".background", {
    //   duration: 0.8,
    //   left: click === 2 ? "-25%" : "25%",
    //   width: "100%",
    //   justifyContent: "flex-start",
    //   paddingLeft: "33%",
    //   textAlign: "left",
    // });

    // gsap.to(".main", {
    //   duration: 0.8,
    //   left: click === 2 ? "100%" : "-100%",
    //   opacity: 0,
    // });
    // gsap.fromTo(
    //   ".transition_dot",
    //   { opacity: 1 },
    //   { opacity: 0, x: click === 2 ? 1200 : -1200, duration: 0.8 }
    // );
    // gsap.to(".logo", {
    //   xPercent: click === 2 ? -208 : -78,
    //   yPercent: -5,
    //   duration: 0.8,
    // });
    // setTimeout(() => {
    //   if (click === 1) {
    //     changeLocale("ar");
    //   } else if (click === 2) {
    //     changeLocale("en-US");
    //   }
    // }, 700);
    //TODO : comment this part of code when animation enabled
    if (click === 1) {
      changeLocale("ar");
    } else if (click === 2) {
      changeLocale("en-US");
    }
  }, []);

  return (
    <>
      <NextSeo
        title="Welcome to Mauzoun | أهلًا بكم في مَوْزوْن"
        description="Mauzoun is a creative writing studio based in Jeddah, Saudi Arabia, specializing in copywriting, translation, scriptwriting, and book editing in both the Arabic and English."
      />


      <div className={styles.pageContainer}>
        {/* Kashidas organized from top left to bottom right */}
        <AnimatePresence exitBeforeEnter>
          {kashidaOut &&
            <motion.div
              layoutId='kashidasLayout'
              initial={{ right: '-1000px' }}
              animate={{ right: '0px' }}
              exit={{ right: '-1000px' }}
              transition={{ duration: 0.3 }}
              className={"transition_dot"}
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "stretch",
                width: "100%",
                height: "100%",
              }}
            >
              {kashidas.map((e, i) => buildKashida(i + 1, e))}
            </motion.div>
          }
        </AnimatePresence>

        <div />

        <motion.div
          layoutId='backgroundLayout'
          transition={{ duration: 0.5 }}
          className={styles.mainPanel + " background"}>
          <img
            className={styles.logo + " logo"}
            src='https://i.imgur.com/HjDbXtR.png'
            alt='Mauzoun logo'
          />
          <div
            className='main'
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              height: "calc(100vh - 150px)",
              bottom: 0,
              justifyContent: "center",
            }}
            >
            <div dir='rtl'>
              <p style={{ fontFamily: "GE Dinar Two" }}>
                عشق للكلمات وفريق شغوف:
                <br />
                <b>أهلاً بكم في موزون.</b>
              </p>
              <button
                className={styles.languageButton}
                style={{ fontFamily: "GE Dinar One", marginBottom: "30px" }}
                onClick={() => {
                  handleMovePage(1);
                }}
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
              onClick={() => {
                handleMovePage(2);
              }}
            >
              <b>‫‪Click‬‬ ‫‪here</b>‬‬ ‫‪to‬‬ ‫‪begin‬‬ ‫‪your‬‬ ‫‪story‬‬
              ‫‪in‬‬ ‫‪English.‬‬
            </button>

            <img
              className={styles.bottomKashida}
              src={`/landingPage/Kashida bottom.png`}
              width='270px'
            />
          </div>
        </motion.div>
        <div />
      </div>
    </>
  );
}
