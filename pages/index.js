import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { NextSeo } from 'next-seo'; 
import styles from "../styles/landingPage.module.scss";
import Kashida from "../components/kashida";

export default function LandingPage({
  updatePageTransition,
  textAnimationControls,
}) {
  const router = useRouter();
  const [pageOut, setPageOut] = useState(true)
  const [arSelected, setArSelected] = useState('en')

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
    setPageOut(!pageOut)
    setTimeout(() => {
      router.push(`/${locale}/home`);
    }, 600)
    textAnimationControls.set("instantlyHidden");
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
      setArSelected('ar')
      setTimeout(() => {
        changeLocale("ar");
      }, 100)
    } else if (click === 2) {
      setArSelected('en')
      setTimeout(() => {
        changeLocale("en-US");
      }, 100)
    }
  }, []);

  return (
    <>
      <NextSeo
        title="Welcome to Mauzoun | أهلًا بكم في مَوْزوْن"
        description="Mauzoun is a creative writing studio based in Jeddah, Saudi Arabia, specializing in copywriting, translation, scriptwriting, and book editing in both the Arabic and English."
      />
      {/* {!pageOut && <button
        style={{
          position: 'fixed'
        }}
        onClick={() => {
          setPageOut(!pageOut)
        }}>Back</button>
      } */}

      <AnimatePresence>
        {pageOut && <motion.div
          className={styles.fixedStyle}
          layoutId='backgroundLayout'
          initial={{ left: 0, transform: 'translate(-50%, 0)', }}
          animate={{ left: '50%', transform: 'translate(-50%, 0) !important' }}
          transition={{ duration: 0.6 }}
          exit={{ left: arSelected === 'ar' ? '100%' : 0, width: '1000px' }} //eng transition
          style={{
            position: "fixed",
            left: '50%',
            height: '100%',
            width: '50%',
            transform: 'translate(-50%, 0)',
            // transformOrigin: 'none',
            backgroundColor: '#f8d952'

            // 
          }} />
        }
      </AnimatePresence>
      {!pageOut && <motion.div
        layoutId="transitionLayout"
        className={styles.fixedStyle}
        animate={{ opacity: [0, 0, 0, 0.5, 1] }}
        transition={{ duration: 0.3 }}
        // exit={{ left: 0, width: '1000px' }}
        style={{
          position: "fixed",
          left: arSelected === 'ar'? '100%' : 0,
          height: '100%',
          width: '70%',
          backgroundColor: '#f8d952'
        }} />}
      <div
        className={styles.pageContainer}>
        <div
          className={styles.mainPanel}
        >
          <div>
            <AnimatePresence>
              {pageOut && <motion.img
                layoutId="imageLogo"
                initial={{ left: 0 }}
                animate={{ left: '50%', transform: 'translate(-50%, 0)' }}
                transition={{ duration: 0.6 }}
                exit={{ left: arSelected === 'ar' ? '94%' : '10%' }}
                className={styles.logo + ' ' + styles.fixedStyle}
                style={{
                  position: "absolute"
                }}
                src='https://i.imgur.com/HjDbXtR.png'
                alt='Mauzoun logo'
              />}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {pageOut && <motion.div
              initial={{ right: '-240%' }}
              animate={{ right: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ right: arSelected === 'ar' ? '230%' : '-240%' }}

              style={{
                // width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                overflow: 'hidden',
                // height: "calc(100vh - 150px)",
                // bottom: 0,
                zIndex: 5,
                textAlign: 'center',
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

            </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
            {pageOut &&
              <motion.img

                initial={{ right: '-1449px' }}
                animate={{ right: 0 }}
                transition={{ duration: 0.6 }}
                exit={{ right: arSelected === 'ar' ? '230%' : '-1449px' }}
                style={{
                  position: 'relative'
                }}
                className={styles.bottomKashida}
                src={`/landingPage/Kashida bottom.png`}
                width='270px'
              />
            }
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {pageOut && <motion.div
            initial={{ right: '-1449px' }}
            animate={{ right: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'fixed',
              width: '100%',
              height: '100%'
            }}
            exit={{ right: arSelected === 'ar' ? '230%' : '-1449px' }}
          >
            <Kashida />
          </motion.div>}
        </AnimatePresence>
        <div />
      </div>
    </>
  );
}
