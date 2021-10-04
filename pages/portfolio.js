import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NextSeo } from "next-seo";

import styles from "../styles/portfolio.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import WhiteBox from "../components/WhiteBox";
import { MotionLogo } from "../components/MotionLogo"
import ContactButton from "../components/ContactButton";
import mauj from './mauj'
import musaandpalmCopy from "./musaandpalm.js";
import Footer from "../components/Footer";

const backgroundColor = "#fbec9a";

const clientLogos = ["/clientLogos/1.png", "/clientLogos/2.png", "/clientLogos/3.png"];

const whiteBoxDecoratorsPositions = {
  fromTop: [
    { marginTop: "70px" },
    {
      preferredMargin: "450px",
    },
    {
      preferredMargin: "467px",
    },
    {
      preferredMargin: "484px",
    },
    {
      preferredMargin: "501px",
    },
    {
      marginTop: "45px",
      preferredMargin: "735px",
    },
    {
      marginTop: "62px",
      preferredMargin: "735px",
    },
  ],
};

export default function portfolio({ textAnimationControls, handleBgColorChange, handleOpenNav, history, isNavOpen, ...rest }) {
  const locale = useRouter().locale;
  const { key, initial, animate, variants } = rest;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  const getClients = (category) => {
    let i = 1;
    let numberOfClients = Object.keys(intl.messages).filter((e) =>
      e.startsWith(`${category}.clients.`)
    ).length;
    let clients = [];

    while (i < numberOfClients + 1) {
      clients.push(
        <span
          key={`${category}.clients.${i}`}
          className={styles.client + " heading"}
          style={{
            fontWeight: numberOfClients !== 1 && i % 2 !== 0 ? "bold" : "normal",
          }}
        >
          {f(`${category}.clients.${i}`)}
        </span>
      );
      i += 1;
    }
    return clients;
  };

  const preferredSide = locale === "ar" ? "right" : "left";
  const oppositeSide = locale === "ar" ? "left" : "right";

  React.useEffect(() => handleBgColorChange(backgroundColor), []);
  console.log("locale :: => ", locale)
  return (
    <>
      <NextSeo
        title={locale !== "ar" ? "Mauzoun | Portfolio" : "مَوْزوْن | أعمالنا"}
        description={locale !== "ar" ? "Mauzoun | Portfolio" : "مَوْزوْن | أعمالنا"}
      />

      <div className="background-animation" style={{ backgroundColor }} />

      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        variants={variants}
        

      >
        <ContactButton isNavOpen={isNavOpen} history={history} />
        <div
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            height: "100%",
            overflowX: "hidden",
            // overflowY: "scroll",
          }}
        >
          <div
            className="test-portfolio"
            style={{
              backgroundColor: backgroundColor,
              width: "72%",
              height: "150vh",
              position: "absolute",
              zIndex: -1,
            }}
          ></div>
          <div
            className="bg-animation-portfolio"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              zIndex: 8,
              overflow: isNavOpen ? "hidden" : null,
            }}
          >
            <MotionLogo />
            <Menu
              backgroundColor={backgroundColor}
              textAnimationControls={textAnimationControls}
              isNavOpen={isNavOpen}
              handleOpenNav={handleOpenNav}
            />

            <div className="container">
              <div className="container-background" style={{ backgroundColor }}></div>
              <div className="container-content">
                <h1>{f("title")}</h1>

                <h2>{f("subtitle")}</h2>
              </div>
              <div className="container-content">
                <span style={{ marginBottom: "50px" }}>{f("content")}</span>

                {/* Content Writing */}
                <h3 className={styles.clientCategory}>{f("contentWriting.title")}</h3>
                {getClients("contentWriting")}

                <hr className="big-margin" size={1} color="black" />

                {/* Creative Writing */}
                <h3 className={styles.clientCategory}>{f("creativeWriting.title")}</h3>
                {getClients("creativeWriting")}
              </div>

              <div className="container-object">
                <div className={styles.totalWhiteBox}>
                  <WhiteBox style={{ marginTop: "50px" }} decoratorsPositions={whiteBoxDecoratorsPositions}>
                    {f("clients")}

                    <div className={styles.carousel} style={{ direction: "initial" }}>
                      <Carousel
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        selectedItem={locale === "ar" ? (clientLogos).length - 1 : 0}
                        renderArrowPrev={(clickHandler, hasPrev) =>
                          hasPrev && (
                            <div
                              className={styles.arrowContainer}
                              style={{ [locale === "en-US" ? preferredSide : oppositeSide]: 0 }}
                              onClick={clickHandler}
                            >
                              <div
                                className={styles.arrow}
                                style={{ [locale === "en-US" ? preferredSide : oppositeSide]: 0 }}
                              >
                                <BsChevronLeft className={styles.chevron} />
                              </div>
                            </div>
                          )
                        }
                        renderArrowNext={(clickHandler, hasNext) =>
                          hasNext && (
                            <div
                              className={styles.arrowContainer}
                              style={{ [locale === "en-US" ? oppositeSide : preferredSide]: 0 }}
                              onClick={clickHandler}
                            >
                              <div
                                className={styles.arrow}
                                style={{ [locale === "en-US" ? oppositeSide : preferredSide]: 0 }}
                              >
                                <BsChevronRight className={styles.chevron} />
                              </div>
                            </div>
                          )
                        }
                      >
                        {(locale === "ar" ? JSON.parse(JSON.stringify(clientLogos)).reverse() : clientLogos).map((e) => (
                          <img src={e} priority="true" />
                        ))}
                      </Carousel>
                    </div>
                  </WhiteBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
