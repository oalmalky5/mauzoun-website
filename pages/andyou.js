import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

import styles from "../styles/andyou.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import {MotionLogo} from "../components/MotionLogo"
import ContactButton from "../components/ContactButton";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";
import WhiteBox from "../components/WhiteBox";


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

export default function andyou({ textAnimationControls, handleBgColorChange, handleOpenNav, history, isNavOpen, ...rest }) {
  const locale = useRouter().locale;
  const { key, initial, animate, variants } = rest;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  const [isBecomeClientVisible, setIsBecomeClientVisible] = useState(false);
  const [isJoinTeamVisible, setIsJoinTeamVisible] = useState(false);
  const [isJoinCompetitionVisible, setIsJoinCompetitionVisible] = useState(false);
  const [isWritingClientVisible, setIsWritingClientVisible] = useState(false)
  const [isCommissionVisible, setIsCommissionVisible] =  useState(false)
  const [isMauzounAuthorVisible, setIsMauzounAuthorVisible] = useState(false)

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
        title={locale !== "ar" ? "Mauzoun | And You" : "مَوْزوْن | وأنت"}
        description={locale !== "ar" ? "Mauzoun | And You" : "مَوْزوْن | وأنت"}
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
            className="bg-animation-andyou"
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
                <span className="teamTitle">{f("title")}</span>
              </div>
              <div className="container-content">
                {/* Become our client */}
                {/*<div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsBecomeClientVisible(!isBecomeClientVisible)}
                    style={isBecomeClientVisible ? { marginBottom: "20px" } : {}}
                  >
                    <h2>{f("becomeClient.intro")}</h2>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isBecomeClientVisible && (
                    <>
                      {f("becomeClient.content")}
                      <hr />
                    </>
                  )}
                  </div>*/}

                {/* Join the team */}
                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsJoinTeamVisible(!isJoinTeamVisible)}
                    style={isJoinTeamVisible ? { marginBottom: "20px" } : {}}
                  >
                    <span className="teamTitle">{f("joinTeam.intro")}</span>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isJoinTeamVisible && (
                    <>
                      {f("joinTeam.content")}

                      <div className="container-object">
                      <div className={styles.totalWhiteBox}>
                          <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                              <span className="publishingHeader">{f("hiring.header")}</span>
                              <br />
                              {[
                                "hiring.contentWriting",
                                "hiring.creativeWriting",
                                "hiring.publishing",
                                "hiring.management",
                                "hiring.media",
                                "hiring.art",
                              ].map((e) => (
                                  <div className={styles.service} key={e}>
                                      {bullet}
                                      {f(e)}
                                  </div>
                              ))}
                          </WhiteBox>
                      </div>
                  </div>
                  {f("hiring.content")}
                      <hr />
                    </>
                  )}
                </div>

                {/* Join the competition */}
                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsWritingClientVisible(!isWritingClientVisible)}
                    style={isWritingClientVisible ? { marginBottom: "40px" } : {}}
                  >
                    <span className="teamTitle">{f("writingClient.title")}</span>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isWritingClientVisible && (
                    <>
                      
                      <div className={styles.content}>{f("writingClient.content")}</div>
                    </>
                  )}
                </div>
                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsCommissionVisible(!isCommissionVisible)}
                    style={isCommissionVisible ? { marginBottom: "40px" } : {}}
                  >
                    <span className="teamTitle">{f("commission.title")}</span>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isCommissionVisible && (
                    <>
                      
                      <div className={styles.content}>{f("commission.content")}</div>
                    </>
                  )}
                </div>
                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsMauzounAuthorVisible(!isMauzounAuthorVisible)}
                    style={isMauzounAuthorVisible ? { marginBottom: "40px" } : {}}
                  >
                    <span className="teamTitle">{f("mauzounAuthor.title")}</span>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isMauzounAuthorVisible && (
                    <>
                      
                      <div className={styles.content}>{f("mauzounAuthor.content")}</div>
                    </>
                  )}
                </div>
              </div>
              <div className={styles.image + " container-image"}>
                <div className={styles.andyouCover}>
                  <motion.img src="/Mauzoun & You.png" height="376px" width="750px" layout="fixed" priority="true" transition={{ duration: 0.5 }}/>
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
