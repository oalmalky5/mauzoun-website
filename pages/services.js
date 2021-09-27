import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import styles from "../styles/services.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import {MotionLogo} from "../components/MotionLogo"
import ContactButton from "../components/ContactButton";
import WhiteBox from "../components/WhiteBox";
import Footer from "../components/Footer";

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

export default function services({ textAnimationControls, handleBgColorChange,handleOpenNav, history, isNavOpen, ...rest }) {
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
        title={locale !== "ar" ? "Mauzoun | Services" : "مَوْزوْن | خدماتنا"}
        description={locale !== "ar" ? "Mauzoun | Services" : "مَوْزوْن | خدماتنا"}
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
                <h1 className="mb-0">{f("title")}</h1>
              </div>
              <div className="container-content">
                {/* Approach */}
                <div className="mt-0 unwrapped-content">
                  <div className="content-wrapper" onClick={() => setIsApproachVisible(!isApproachVisible)}>
                    <h2>{f("approach.title")}</h2>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isApproachVisible && (
                    <div>
                      <h3>{f("approach.header")}</h3>
                      {[
                        "approach.contact",
                        "approach.briefForm",
                        "approach.quotation",
                        "approach.timeline",
                        "approach.research",
                        "approach.writing",
                        "approach.delivery",
                        "approach.feedback",
                        "approach.adaptTimeline",
                        "approach.finished",
                      ].map((e) => (
                        <div className="content-block" key={e}>
                          <b>{f(`${e}.header`)}</b>
                          {intl.formatMessage({ id: `${e}.content` }) !== `${e}.content` && f(`${e}.content`)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Writing */}
                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsContentWritingVisible(!isContentWritingVisible)}
                    style={isContentWritingVisible ? { marginBottom: "30px" } : {}}
                  >
                    <h2>{f("contentWriting.title")}</h2>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isContentWritingVisible && (
                    <>
                      {f("contentWriting.content")}
                      <div className="container-object">
                        <div className={styles.totalWhiteBox}>
                          <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                            {f("contentWriting.services.header")}
                            <br />
                            {[
                              "contentWriting.services.naming",
                              "contentWriting.services.manifesto",
                              "contentWriting.services.slogans",
                              "contentWriting.services.profile",
                              "contentWriting.services.website",
                              "contentWriting.services.socialMedia",
                            ].map((e) => (
                              <div className={styles.service} key={e}>
                                {bullet}
                                {f(e)}
                              </div>
                            ))}
                          </WhiteBox>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Creative Writing */}
                <div className="mt-0 unwrapped-content">
                  <div
                    className="content-wrapper"
                    onClick={() => setIsCreativeWritingVisible(!isCreativeWritingVisible)}
                    style={isCreativeWritingVisible ? { marginBottom: "30px" } : {}}
                  >
                    <h2>{f("creativeWriting.title")}</h2>
                    <span className="reveal-icon">
                      <BsChevronDown className="reveal-icon" />
                    </span>
                  </div>

                  {isCreativeWritingVisible && (
                    <>
                      {f("creativeWriting.content")}
                      <div className="container-object">
                        <div className={styles.totalWhiteBox}>
                          <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                            {f("creativeWriting.services.header")}
                            <br />
                            {[
                              "creativeWriting.services.storyDoctoring",
                              "creativeWriting.services.scriptwriting",
                              "creativeWriting.services.bookEditing",
                              "creativeWriting.services.bookTranslation",
                            ].map((e) => (
                              <div className={styles.service} key={e}>
                                {bullet}
                                {f(e)}
                              </div>
                            ))}
                          </WhiteBox>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div style={{ height: "400px" }} />
              <div className="container-image">
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
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
