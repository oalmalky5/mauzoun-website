import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

import styles from "../styles/story.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import WhiteBox from "../components/WhiteBox";
import {MotionLogo} from "../components/MotionLogo"
import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";

const backgroundColor = "#d1e3f2";

const teamMembersData = {
  1: {
    src: "/team/layan.gif",
    preview: "/team/layan.png",
  },
  2: {
    src: "/team/amal.gif",
    preview: "/team/amal static.gif",
  },
  3: {
    src: "/team/fatima.gif",
    preview: "/team/fatima.png",
  },
  4: {
    src: "/team/nada.gif",
    preview: "/team/nada.png",
  },
  5: {
    src: "/team/omart.gif",
    preview: "/team/omart.png",
  },
  6: {
    src: "/team/aya.gif",
    preview: "/team/aya.png",
  },
  7: {
    src: "/team/omarm.gif",
    preview: "/team/omarm.png",
  },
};

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

const Story = function ({ textAnimationControls, handleBgColorChange, handleOpenNav, history, isNavOpen, ...rest }) {
  const locale = useRouter().locale;
  const { key, initial, animate, variants } = rest;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  let numberOfMembersImage = Object.keys(teamMembersData).length;
  let numberOfMembers = Object.keys(intl.messages).filter((e) => e.startsWith("teamMember.")).length / 2;

  const updateTeamMembersHoverState = (e, isHovered) => {
    const id = e.target?.id;
    if (id && teamMembersData[id].src)
      e.target.src = isHovered ? teamMembersData[id].src : teamMembersData[id].preview;
  };

  const getTeamMembers = () => {
    let i = 1;
    let teamMembers = [];

    while (i <= numberOfMembersImage) {
      teamMembers.push(
        <div className={styles.gridItem} key={`teamMember.${i}`}>
          <img
            id={i}
            src={teamMembersData[i].preview}
            className={styles.gridItemImage}
            onMouseEnter={(e) => updateTeamMembersHoverState(e, true)}
            onMouseLeave={(e) => updateTeamMembersHoverState(e, false)}
          />
          {i <= numberOfMembers && (
            <div className="mt-0 mb-0 heading">
              <b>{f(`teamMember.${i}.name`)}</b>
              {f(`teamMember.${i}.role`)}
            </div>
          )}
        </div>
      );
      i += 1;
    }
    return teamMembers;
  };

  React.useEffect(() => handleBgColorChange(backgroundColor), []);

  return (
    <>
      <NextSeo
        title={locale !== "ar" ? "Mauzoun | Story" : "مَوْزوْن | قصتنا"}
        description={locale !== "ar" ? "Mauzoun | Story" : "مَوْزوْن | قصتنا"}
      />
      <div className="background-animation" style={{ backgroundColor }} />
      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        variants={variants}
        // 
        // 
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
            className="bg-animation-story"
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

            <div
              className="container"
              // layout="position"
            >
              <div className="container-background" style={{ backgroundColor }}></div>
              <div className="container-image">
                <div className={styles.storyCover}>
                  <motion.img src="/Story.png" height="341px" width="900px" layout="fixed" priority="true" transition={{ duration: 0.5 }}/>
                </div>
              </div>

              <div className="container-content">
                <h1>{f("nameMeaning")}</h1>

                {f("aim")}

                <b>{f("teamwork")}</b>
              </div>

              <div className="container-object">
                <div className={styles.gridContainer}>{getTeamMembers()}</div>
              </div>

              <div className="container-content">{f("world")}</div>

              <div className="container-object">
                <div class={styles.totalWhiteBox}>
                  <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                    <b>{f("whitebox.innerText1")}</b>
                    <br />
                    {f("whitebox.innerText2")}
                  </WhiteBox>
                </div>
              </div>
              <div className="container-content">
                {f("workAspects")}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Story;
