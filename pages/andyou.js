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

const backgroundColor = "#b3d0ea";

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

  React.useEffect(() => handleBgColorChange(backgroundColor), []);

  return (
    <>
      <NextSeo
        title={locale !== "ar" ? "Mauzoun | And You" : "مَوْزوْن | مَوْزوْن وأنت"}
        description={locale !== "ar" ? "Mauzoun | And You" : "مَوْزوْن | مَوْزوْن وأنت"}
      />
      <div className="background-animation" style={{ backgroundColor }} />

      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        variants={variants}
        
        
      >
         <ContactButton isNavOpen = {isNavOpen} history = {history}/>
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
                <h1 className="mb-0">{f("title")}</h1>
              </div>
              <div className="container-content">
                {/* Become our client */}
                <div className="mt-0 unwrapped-content">
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
                </div>

                {/* Join the team */}
                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsJoinTeamVisible(!isJoinTeamVisible)}
                    style={isJoinTeamVisible ? { marginBottom: "20px" } : {}}
                  >
                    <h2>{f("joinTeam.intro")}</h2>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isJoinTeamVisible && (
                    <>
                      {f("joinTeam.content")}
                      <hr />
                    </>
                  )}
                </div>

                {/* Join the competition */}
                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsJoinCompetitionVisible(!isJoinCompetitionVisible)}
                    style={isJoinCompetitionVisible ? { marginBottom: "40px" } : {}}
                  >
                    <h2>{f("joinCompetition.intro")}</h2>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isJoinCompetitionVisible && (
                    <>
                      <ComingSoon />
                      <div className={styles.content}>{f("joinCompetition.content")}</div>
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
