import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NextSeo } from "next-seo";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import {MotionLogo} from "../components/MotionLogo"
import ContactButton from "../components/ContactButton";
import styles from "../styles/sta.module.scss";
import WhiteBox from "../components/WhiteBox";

const backgroundColor = "#f7f5f0";

export default function sta({ textAnimationControls, handleBgColorChange, handleOpenNav,history, isNavOpen, ...rest }) {
  const locale = useRouter().locale;
  const { key, initial, animate, variants } = rest;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  const whiteBoxDecoratorsPositions = {
    fromTop: [
      {
        preferredMargin: "520px",
      },
      {
        preferredMargin: "537px",
      },
      {
        marginTop: "10px",
        preferredMargin: "550px",
      },
      {
        marginTop: "15px",
      },
      {
        marginTop: "32px",
      },
      {
        marginTop: "49px",
      },
    ],
    fromBottom: [
      {
        preferredMargin: "300px",
      },
      {
        marginTop: "-50px",
        preferredMargin: "735px",
      },
      {
        marginTop: "-67px",
        preferredMargin: "735px",
      },
    ],
  };

  React.useEffect(() => handleBgColorChange(backgroundColor), []);

  return (
    <>
      <NextSeo
        title={locale !== "ar" ? "Mauzoun | Portfolio | Shafra" : "مَوْزوْن | أعمالنا | شفرة"}
        description={locale !== "ar" ? "Mauzoun | Portfolio | Shafra" : "مَوْزوْن | أعمالنا| شفرة "}
      />
      <div className="background-animation" style={{ backgroundColor }} />

      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        variants={variants}
        
        
      >
         <ContactButton isNavOpen = {isNavOpen} history = {history}/>
        <div>
        <MotionLogo />
          <Menu
            backgroundColor={backgroundColor}
            textAnimationControls={textAnimationControls}
            isNavOpen={isNavOpen}
            handleOpenNav = {handleOpenNav}
          />

          <div className="container">
            <div className="container-background" style={{ backgroundColor }}></div>
            <div className="container-content">

              <div className="celebrate">
                <span class="title">{f("celebrate.title")}</span>
                <span class="para1">{f("celebrate.para1")}</span>
                <span class="para2">{f("celebrate.para2")}</span>
              </div>

              <div className="fourtyEight">
                <span class="title">{f("48.title")}</span>
                <span class="para1">{f("48.para1")}</span>
                <span class="para2">{f("48.para2")}</span>
                <span class="para3">{f("48.para2")}</span>
              </div>

              <div className="visit">
                <span class="title">{f("visit.title")}</span>
                <span class="para1">{f("visit.para1")}</span>
                <iframe
                      className={styles.frame}
                      width="600"
                      height="400"
                      src="https://www.instagram.com/p/CDELOpYHRYT/embed/"
                      frameborder="0"
                    ></iframe>
                <span class="para2">{f("visit.para2")}</span>

                <section class="devCenter">
                  <span class="package1">{f("visit.package1")}</span>
                  <span class="package2">{f("visit.package2")}</span>
                  <span class="package3">{f("visit.package3")}</span>
                  <span class="package4">{f("visit.package4")}</span>
                  <span class="package5">{f("visit.package5")}</span>
                  <span class="package6">{f("visit.package6")}</span>
                </section>
                <iframe
                      className={styles.frame}
                      width="600"
                      height="700"
                      src="https://www.instagram.com/p/CElrHgAlwbB/embed/"
                      frameborder="0"
                    ></iframe>
              </div>

              <div className="effort">
                <span class="title">{f("effort.title")}</span>
                <span class="para1">{f("effort.para1")}</span>

                <section class="instaFrames">
                    <iframe
                        className={styles.frame}
                        width="250"
                        height="300"
                        src="https://www.instagram.com/p/CB3cCMdFsTq/embed"
                        frameborder="0"
                  ></iframe>
                  <iframe
                        className={styles.frame}
                        width="250"
                        height="300"
                        src="https://www.instagram.com/p/CDjra1EHkDC/embed"
                        frameborder="0"
                  ></iframe>
                  <iframe
                        className={styles.frame}
                        width="250"
                        height="300"
                        src="https://www.instagram.com/p/CB3FuB7F_MB/embed"
                        frameborder="0"
                  ></iframe>
                </section>
              </div>

              <div className="day">
                <span class="title">{f("day.title")}</span>
                <span class="para1">{f("day.para1")}</span>
                <iframe
                        className={styles.frame}
                        width="600"
                        height="700"
                        src="https://www.instagram.com/tv/CFVQlSJHGmA/embed"
                        frameborder="0"
                  ></iframe>
              </div>  

              <div className="peopleContainer">
                <span class="title">{f("people.title")}</span>
                <span class="para1">{f("people.para1")}</span>

                <section class="devCenter">
                  <span class="people">{f("people.message1")}</span>
                  <span class="people">{f("people.message2")}</span>
                  <span class="people">{f("people.message3")}</span>
                  <span class="people">{f("people.message4")}</span>
                  <span class="people">{f("people.message5")}</span>
                  <span class="peopleDiff">{f("people.message6")}</span>
                </section>

                <span class="para2">{f("people.para2")}</span>
              </div>

              <div className="pride">
                <span class="title">{f("pride.title")}</span>
                <span class="para1">{f("pride.para1")}</span>
              </div>

              <div className="words">
                <span class="title">{f("words.title")}</span>
                <span class="para1">{f("words.para1")}</span>
                <iframe
                        className={styles.frame}
                        width="600"
                        height="700"
                        src="https://www.instagram.com/p/CF7W9ufl2aD/embed"
                        frameborder="0"
                  ></iframe>
                <span class="para2">{f("words.para2")}</span>
              </div>


               

              </div>


                            
            </div>
          </div>
        
      </motion.div>
    </>
  );
}
