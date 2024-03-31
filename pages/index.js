// import React from "react";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { NextSeo } from "next-seo";
// import useWindowSize from '../utils/useWidth'
// import styles from "../styles/landingPage.module.scss";

// const kashidas = [
//   { top: "15%", left: "11%" },
//   { top: "14%", right: "11%" },
//   { top: "25%", left: "35%" },
//   { top: "30%", right: "24%" },
//   { top: "65%", left: "18%" },
//   { top: "65%", right: "20%" },
//   { top: "80%", left: "6%" },
//   { top: "85%", right: "32%" },
// ];

// export default function LandingPage({ updatePageTransition, textAnimationControls }) {
//   const router = useRouter();

//   const {width} = useWindowSize()

//   React.useEffect(() => {
//     router.prefetch("/en-US/story");
//     router.prefetch("/ar/story");
//   }, []);

//   const changeLocale = (locale) => {
//     Cookies.set("NEXT_LOCALE", locale);
//     router.push(`/${locale}/story`);
//     textAnimationControls.set("instantlyHidden");
//   };

//   const [kashidaRefs, setKashidaRefs] = React.useState([]);

//   React.useEffect(() => {
//     // add or remove refs
//     setKashidaRefs((kashidaRefs) =>
//       Array(kashidas.length)
//         .fill()
//         .map((_, i) => kashidaRefs[i] || React.createRef())
//     );
//   }, [kashidas.length]);

//   const updateKashidaHoverState = (e, isHovered) => {
//     const id = e.target?.id;
//     if (!id) return;

//     if (isHovered) {
//       e.target.src = `/landingPage/${id}.png`;
//       e.target.style.marginTop = ((e.target.clientHeight / 2) * -0.25).toString() + "px";

//       if (e.target.style.left) {
//         e.target.style.marginLeft = ((e.target.clientWidth / 2) * -0.25).toString() + "px";
//       } else {
//         e.target.style.marginRight = ((e.target.clientWidth / 2) * -0.25).toString() + "px";
//       }
//     } else {
//       e.target.src = `/landingPage/Kashida ${id}.png`;
//       e.target.style.marginTop = 0;
//       e.target.style.marginLeft = 0;
//       e.target.style.marginRight = 0;
//     }
//   };

//   const buildKashida = (id, position) => {
//     return (
//       <div key={id}>
//         <img src={`/landingPage/${id}.png`} style={{ display: "none", position: "absolute" }} />
//         <img
//           id={id}
//           ref={kashidaRefs[id - 1]}
//           className={styles.kashida}
//           style={{
//             transformOrigin: position.left ? "left top" : "right top",
//             ...position,
//           }}
//           src={`/landingPage/Kashida ${id}.png`}
//           onMouseEnter={(e) => updateKashidaHoverState(e, true)}
//           onMouseLeave={(e) => updateKashidaHoverState(e, false)}
//         />
//       </div>
//     );
//   };

//   const handleMovePage = (click) => {
//     gsap.to(".background", {
//       duration: 0.75,
//       width: "100%",
//       justifyContent: "flex-start",
//       textAlign: "left",
//     });

//     gsap.to(click === 2 ? ".background-left" : ".background-right", {
//       duration: 0,
//       width: "0%",
//     });

//     gsap.to(".main", {
//       duration: 0.75,
//       left: click === 2 ? "100%" : "-100%",
//       opacity: 0,
//     });

//     gsap.fromTo(
//       ".transition_dot",
//       { opacity: 1 },
//       { opacity: 0, x: click === 2 ? 1200 : -1200, duration: 0.75 }
//     );

//     if (width < 768) {

//       gsap.to(".logo", {
//         [click === 1 ? "right" : "left"]: "0%",
//         opacity: 1,
//         duration: 0.75,
//         y: -28,
//         width: 143,
//         height: 110,
//         onComplete: () => {
//           if (click === 1) {
//             changeLocale("ar");
//           } else if (click === 2) {
//             changeLocale("en-US");
//           }
//         },
//       });
//     } else{

//       gsap.to(".logo", {
//         [click === 1 ? "right" : "left"]: "0%",
//         opacity: 1,
//         duration: 0.75,
//         width: 175,
//         height: 150,
//         y: 0,
//         x: click === 1 ? (width <= 1240 ? -5 : -35) : (width <= 1240 ? 5 : 35),
//         onComplete: () => {
//           if (click === 1) {
//             changeLocale("ar");
//           } else if (click === 2) {
//             changeLocale("en-US");
//           }
//         },
//       });
//     }
//   };
//   // this is the index page
//   return (
//     <>
//       <NextSeo
//         title="Mauzoun | مَوْزوْن"
//         description="We are Mauzoun, a writing studio and publishing house based in Saudi Arabia, and offering our services worldwide. Get to know us!"
//       />

//       <div className={styles.pageContainer}>
//         {/* Kashidas organized from top left to bottom right */}
//         <div
//           className={"transition_dot"}
//           style={{
//             position: "relative",
//             display: "flex",
//             alignItems: "stretch",
//             width: "100%",
//             height: "100%",
//             zIndex: 2,
//           }}
//         >
//           {kashidas.map((e, i) => buildKashida(i + 1, e))}
//         </div>

//         <div />

//         <div className={styles.bgAnimation + " background-left"} style={{ left: 0 }}></div>
//         <div className={styles.bgAnimation + " background-right"} style={{ right: 0 }}></div>

//         <div className={styles.mainPanel + " background"}>
//           <img
//             className={styles.logo + " logo"}
//             src="https://i.ibb.co/28W6QH5/mainLogo.png"
//             alt="Mauzoun logo"
//           />
//           <div
//             className="main"
//             style={{
//               width: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               position: "absolute",
//               height: "calc(100vh - 150px)",
//               bottom: 0,
//               padding: "0 10px",
//               justifyContent: "center",
//             }}
//           >
//             <div dir="rtl" style={{ zIndex: 3 }}>
//               <p style={{ fontFamily: "MizanAR-Regular", fontSize: "32px" }}>
//                 عشق للكلمات وفريق شغوف:
//                 <br />
//                 <b style={{fontFamily: "MizanAR-Bold", fontSize: "32px"}}>أهلاً بكم في مَوْزوْن.</b>
//               </p>
//               <button
//                 className={styles.languageButton}
//                 style={{ fontFamily: "GE Dinar One", marginBottom: "20px",  }}
//                 onClick={() => {
//                   handleMovePage(1);
//                 }}
//               >
//                 <span style={{fontFamily: "MizanAR-Regular", fontSize: "32px"}}><b style={{fontFamily: "MizanAR-Bold", fontSize: "32px"}}>اضغطوا هنا</b> لبدء قصتكم بالعربية.</span>
//               </button>
//             </div>

//             <div dir="ltr" style={{ zIndex: 3 }}>
//               <p style = {{fontFamily: "Sharik-Regular", fontSize: "27px"}}>
//               A love for words and a team with fervor:
//               <br />
//               <b style = {{fontFamily: "Sharik-Bold", fontSize: "27px"}}>welcome to Mauzoun.</b>
//               </p>
//               <button
//                 className = {styles.languageButton}
//                 style = {{fontFamily: 'Alegreya Sans'}}
//                 onClick = {() => {
//                   handleMovePage(2);
//                 }}
//               >
//                 <span style = {{fontFamily: "Sharik-Regular", fontSize: "27px"}}><b style = {{fontFamily: "Sharik-Bold", fontSize: "27px"}}>Click here</b> to begin your story in English.</span>
//               </button>
//             </div>

//             <img
//               className={styles.bottomKashida}
//               src={`/landingPage/Kashida bottom.png`}
//               width="270px"
//             />
//           </div>
//         </div>
//         <div />
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Menu from '../components/Menu';
import formatJsxMessage from '../utils/formatJsxMessage';
import { MotionLogo } from '../components/MotionLogo';
import Footer from '../components/Footer';
import Bar from '../components/Bar';
import styles from '../styles/home.module.scss';
import BarTextContent from '../components/BarTextContent';
import gsap from 'gsap';

const backgroundColor = '#f7f5f0';

export default function Story({
  updatePageTransition,
  textAnimationControls,
  handleBgColorChange,
  isNavOpen,
  handleOpenNav,
  ...rest
}) {
  const [expandedBar, setExpandedBar] = useState(null);
  const [areBarsVisible, setAreBarsVisible] = useState(false); // New state to manage visibility

  const barsExtended = expandedBar !== null;

  const locale = useRouter().locale;
  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  useEffect(() => {
    handleBgColorChange(backgroundColor);

    // Determine the direction of movement based on the current language
    // For example, if the language is Arabic (RTL), we start from the right side; otherwise, we start from the left.
    const startX = locale === 'ar' ? 100 : -100; // Adjust values as needed

    // Apply an animation to the bars. Here, we're moving the bars along the x-axis.
    gsap.fromTo(
      `.${styles.bar}`,
      { x: startX, opacity: 1 }, // Starting from off-screen on the x-axis
      { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' } // Ending at their normal position, fully visible
    );
  }, [locale, handleBgColorChange, backgroundColor]);

  return (
    <>
      <NextSeo
        title={locale !== 'ar' ? 'Mauzoun | Story' : 'مَوْزوْن | قصتنا'}
        description={f('pageTitle')}
      />
      <div className="background-animation" style={{ backgroundColor }} />

      <motion.div>
        <div
          style={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'stretch',
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
          }}
        >
          <div
            className="bg-animation-home"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              zIndex: 8,
              overflow: isNavOpen ? 'hidden' : null,
            }}
          >
            <MotionLogo />
            <Menu
              backgroundColor={backgroundColor}
              textAnimationControls={textAnimationControls}
              isNavOpen={isNavOpen}
              handleOpenNav={handleOpenNav}
            />

            <div className={styles.container} style={{ backgroundColor }}>
              <img
                src={
                  locale === 'ar'
                    ? `/homepage-text-ar.png`
                    : `/homepage-text-en.png`
                }
                alt={locale === 'ar' ? 'الصفحة الرئيسية' : 'Homepage text'}
                className={styles.homepageImage}
                style={{
                  opacity: barsExtended ? 0.2 : 1,
                  transition: 'opacity 0.5s ease-in-out',
                }} // Dim the image if any bar is expanded
              />
              <div className={styles.verticalBars}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Bar
                    title={locale === 'ar' ? 'الجوائز' : 'Awards'}
                    imageSrc="/bars_photos/1.png"
                    isExpanded={expandedBar === 'awards'}
                    onClick={() =>
                      setExpandedBar(expandedBar === 'awards' ? null : 'awards')
                    }
                    type="awards"
                    isFirstBar={true}
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedBar(null);
                      }}
                    >
                      <BarTextContent locale={locale} type="awards" />
                    </div>
                  </Bar>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Bar
                    title={
                      locale === 'ar' ? (
                        <>
                          <span>العملاء</span>
                          <br />
                          <span>ومشاريع التعاون</span>
                        </>
                      ) : (
                        <>
                          <span>Clients &</span>
                          <br />
                          <span>Collaborations</span>
                        </>
                      )
                    }
                    imageSrc="/bars_photos/2.png"
                    isExpanded={expandedBar === 'clientsCollaborations'}
                    onClick={() =>
                      setExpandedBar(
                        expandedBar === 'clientsCollaborations'
                          ? null
                          : 'clientsCollaborations'
                      )
                    }
                    type="clientsCollaborations"
                    style={{
                      flexDirection: locale === 'ar' ? 'row-reverse' : 'row',
                    }}
                  >
                    {/* Additional content for Clients & Collaborations */}
                  </Bar>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Bar
                    title={locale === 'ar' ? 'الخدمات' : 'Services'}
                    imageSrc="/bars_photos/3.png"
                    isExpanded={expandedBar === 'services'}
                    onClick={() =>
                      setExpandedBar(
                        expandedBar === 'services' ? null : 'services'
                      )
                    }
                    type="servicesBar"
                    style={{
                      flexDirection: locale === 'ar' ? 'row-reverse' : 'row',
                    }}
                  >
                    {/* Additional content for Services */}
                  </Bar>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Bar
                    title={locale === 'ar' ? 'عن مَوْزوْن' : 'About'}
                    imageSrc="/bars_photos/4.png"
                    isExpanded={expandedBar === 'about'}
                    onClick={() =>
                      setExpandedBar(expandedBar === 'about' ? null : 'about')
                    }
                    type="aboutBar"
                    style={{
                      flexDirection: locale === 'ar' ? 'row-reverse' : 'row',
                    }}
                  >
                    {/* Additional content for About */}
                  </Bar>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
