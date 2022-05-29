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
                <span class="celebrateTitle">{f("celebrate.title")}</span>
                <span className={styles.para1}>{f("code.para1")}</span>
                <span className={styles.para2}>{f("code.para2")}</span>
              </div>

              <div className="mm">
                <span class="mmTitle">{f("mm.title")}</span>
                <span className={styles.para1}>{f("mm.para1")}</span>
                <span className={styles.para2}>{f("mm.para2")}</span>
              </div>

              <div className="lang">
                <span class="langTitle">{f("lang.title")}</span>
                <span className={styles.para1}>{f("lang.para1")}</span>

                <table>
                  <tr>
                    <th></th>
                    <th class="arabic">{f("table.ara1")}</th>
                  </tr>
                  <tr>
                    <td class="english">{f("table.eng")}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="arabic">{f("table.ara2")}</td>
                  </tr>
                </table>

                <div className="story">
                  <span class="storyTitle">{f("story.title")}</span>
                  <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                    <span className={styles.para1}>{f("story.para")}</span>
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
