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
import styles from "../styles/mauj.module.scss";
import WhiteBox from "../components/WhiteBox";

const backgroundColor = "#fbec9a";

export default function mauj({ textAnimationControls, handleBgColorChange, handleOpenNav,history, isNavOpen, ...rest }) {
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
        title={locale !== "ar" ? "Mauzoun | Portfolio | Mauj" : "مَوْزوْن | أعمالنا | موج"}
        description={locale !== "ar" ? "Mauzoun | Portfolio | Mauj" : "مَوْزوْن | أعمالنا| موج "}
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
              <div className="intro">
                <span className={styles.title1}>{f("intro.title")}</span>
                <p className={styles.para1}>{f("intro.para")}</p>
              </div>

              <div className="meeting">
                <span className={styles.title1}>{f("meeting.title")}</span>
                <span className={styles.para1}>{f("meeting.para1")}</span>
                <span className={styles.para1}>{f("meeting.para2")}</span>
              </div>

              <div className={styles.tone}>
                <span className={styles.title1}>{f("tone.title")}</span>
                <ul className={styles.list}>
                  <li>{f("tone.listElement1")}</li>
                  <li>{f("tone.listElement2")}</li>
                  <li>{f("tone.listElement3")}</li>
                  <li>{f("tone.listElement4")}</li>
                  <li className={styles.toneFinal}>{f("tone.final")}</li>
                </ul>
                <span className={styles.para1}>{f("tone.para1")}</span>
                <span className={styles.para1}>{f("tone.para2")}</span>

                <div class={styles.instaGrid}>
                  <div className={styles.cell1}>
                    <iframe
                      className={styles.frame}
                      width="250"
                      height="300"
                      src="https://www.instagram.com/p/CKqoCo5FZHM/embed"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <div className={styles.cell2}>
                    <iframe
                      className={styles.frame}
                      width="250"
                      height="300"
                      src="https://www.instagram.com/p/CEyWFKnJtrl/embed"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <div className={styles.cell3}>
                    <iframe
                      className={styles.frame}
                      width="250"
                      height="300"
                      src="https://www.instagram.com/p/CEyT727pKDG/embed"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <div className={styles.cell4}>
                    <iframe
                      className={styles.frame}
                      width="250"
                      height="300"
                      src="https://www.instagram.com/p/CNsRmqQlVFI/embed"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <div className={styles.cell5}>
                    <iframe
                      className={styles.frame}
                      width="250"
                      height="300"
                      src="https://www.instagram.com/p/COUt156lh35/embed"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <div className={styles.cell6}>
                    <iframe
                      className={styles.frame}
                      width="250"
                      height="300"
                      src="https://www.instagram.com/p/CNaVfcWFIJm/embed"
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className={styles.brand}>
                <span className={styles.title1}>{f("brand.title")}</span>
                <span className={styles.para1}>{f("brand.para1")}</span>
                <span className={styles.para1}>{f("brand.para2")}</span>
              </div>

              <div className={styles.testimony}>
                <span className={styles.title1} className={styles.centerTitle}>
                  {f("testimony.title")}
                </span>
                <div className={styles.totalWhiteBox}>
                  <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                    <br />
                    <span className={styles.para1} className={styles.center}>
                      {f("testimony.para1")}
                    </span>
                    <br />
                    <span className={styles.para2} className={styles.center}>
                      {f("testimony.para2")}
                    </span>
                    <br />
                    <span className={styles.para3} className={styles.center}>
                      {f("testimony.para3")}
                    </span>
                  </WhiteBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
