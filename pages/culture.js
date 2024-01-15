import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import styles from "../styles/contentwriting.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import {MotionLogo} from "../components/MotionLogo"
import ContactButton from "../components/ContactButton";
import WhiteBox from "../components/WhiteBox";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

const backgroundColor = "#f7f5f0";

const whiteBoxDecoratorsPositions = {
  fromTop: [
    {},
    {
      preferredMargin: "650px",
    },
    {
      preferredMargin: "667px",
    },
  ],
  fromBottom: [
    {
      preferredMargin: "550px",
    },
    {
      preferredMargin: "567px",
    },
    {
      preferredMargin: "584px",
    },
  ],
};

export default function Culture({ textAnimationControls, handleBgColorChange,handleOpenNav, history, isNavOpen, ...rest }) {
  const router = useRouter();
  const locale = useRouter().locale;
  const { key, initial, animate, variants } = rest;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, router.locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [isContentWritingVisible, setIsContentWritingVisible] = useState(false);
  const [isCreativeWritingVisible, setIsCreativeWritingVisible] = useState(false);
  const [isBoutiquePublishingVisible, setIsBoutiquePublishingVisible] = useState(false);
  const [isTeamVisibile, setIsTeamVisibile] = useState(false);
  const [isClientVisibile, setIsClientVisibile] = useState(false);


  const bullet = (
    <div className={styles.bullet}>
      <object data="/Tilted Square.svg" className={styles.tiltedSquare} />
      <svg width="40" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10 L40 10" stroke="black" stroke-width="2" />
      </svg>
    </div>
  );

  React.useEffect(() => handleBgColorChange(backgroundColor), []);

  return (
    <>
      <NextSeo
        title={locale !== "ar" ? "Mauzoun | Content Writing" : "مَوْزوْن | كتابة المحتوى"}
        description={locale !== "ar" ? "Mauzoun | Content Writing" : "مَوْزوْن | كتابة المحتوى"}
      />
      <div className="background-animation" style={{ backgroundColor }} />

      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        variants={variants}
      >
      {/* <ContactButton isNavOpen = {isNavOpen} history = {history}/> */}
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
            className="bg-animation-services"
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
              handleOpenNav = {handleOpenNav}
            />

            <div className="container">
              <div className="container-background" style={{ backgroundColor }}></div>
              <div className="container-content">
                <span className="title">{f("culturePageTitle")}</span>
              </div>
              <div className="container-content">
                <div className="">{f("mainSection.quality")}</div>
                <div className="">{f("mainSection.culture")}</div>
              </div>
              

              <div className="container-content">
                {/* Approach */}
                <div className="mt-0 unwrapped-content">
                  <div className="content-wrapper" onClick={() => setIsApproachVisible(!isApproachVisible)}>
                    
                    <span className="title approachTitle">{f("subheader.titleMain")}</span>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isApproachVisible && (
                    <div>
                    <br/>
                    <div className="servicesAnswer">{f("subheader.para1")}</div>
                    <div className="servicesAnswer">{f("subheader.para2")}</div>
                    <div className="servicesAnswer">{f("subheader.para3")}</div>
                    </div>
                  )}
                </div>

                {/* Content Writing */}
                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsTeamVisibile(!isTeamVisibile)}
                    style={isTeamVisibile ? { marginBottom: "30px" } : {}}
                  >
                    <span className="title">{f("subsection.title")}</span>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isTeamVisibile && (
                    <>
                      <div className="container-object">
                        <div className="totalWhiteBox">
                          <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                            {[
                              "subsection.box.first",
                              "subsection.box.second",
                              "subsection.box.third",
                              "subsection.box.fourth",
                              "subsection.box.fifth",
                            ].map((e) => (
                              <div className={styles.service} key={e}>
                                {bullet}
                                {f(e)}
                              </div>
                            ))}
                          </WhiteBox>
                        </div>
                        <div>{f("subsection.champion")}</div>
                        <div>{f("subsection.fullWorld")}</div>
                        <div>{f("subsection.smart")}</div>
                        <div>{f("subsection.diversity")}</div>
                        <div>{f("subsection.important")}</div>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsClientVisibile(!isClientVisibile)}
                    style={isClientVisibile ? { marginBottom: "30px" } : {}}
                  >
                    <span className="title">{f("subheader.title")}</span>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isClientVisibile && (
                    <>
                      <div className="container-object">
                        <div className="totalWhiteBox">
                          <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                            {[
                              "subsection.box1.first",
                              "subsection.box1.second",
                              "subsection.box1.third",
                              "subsection.box1.fourth",
                              "subsection.box1.fifth",
                            ].map((e) => (
                              <div className={styles.service} key={e}>
                                {bullet}
                                {f(e)}
                              </div>
                            ))}
                          </WhiteBox>
                        </div>
                        <div>{f("subsection.ourWork")}</div>
                        <div>{f("subsection.strive")}</div>
                        <div>{f("subsection.understand")}</div>
                        <div>{f("subsection.plan")}</div>
                        <div>{f("subsection.every")}</div>
                      </div>
                    </>
                  )}
                </div>

                
                  
              </div>

              <div style={{ height: "400px" }} />
              {/*<div className="container-image">
                <div className={styles.servicesCover}>
                  <motion.img
                    src="/Services.png"
                    height="437px"
                    width="400px"
                    layout="fixed"
                    priority="true"
                    style={router.locale === "ar" ? { transform: "scaleX(-1)" } : {}}
                    transition={{ duration: 0.5 }}
                  />
                </div>
               </div>*/}
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
