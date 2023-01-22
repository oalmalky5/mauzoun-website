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

const backgroundColor = "#f7f5f0";
const teamMembersData = {
  1: {
    src: "/team/Layan.gif",
    preview: "/team/Mauzoun _ Layan.png",
  },
  2: {
    src: "/team/Nada.gif",
    preview: "/team/Mauzoun _ Nada.png",
  },
  3: {
    src: "/team/Omar M.gif",
    preview: "/team/Mauzoun _ Omar AlMalky.png",
  },
  4 : {
    src: "/team/dalia.gif",
    preview: "/team/Mauzoun _ Dalia.png",
  },

  5: {
    src: "/team/Amal.gif",
    preview: "/team/Mauzoun _ Amal.png",
  },
  6: {
    src: "/team/Zahrah.gif",
    preview: "/team/Mauzoun _ Zahrah.png",
  },

  
  7: {
    src: "/team/Ahmed.gif",
    preview: "/team/Mauzoun _ Ahmed Hoza.png",
  },
  8: {
    src: "/team/Omnia.gif",
    preview: "/team/Mauzoun _ Omnia.png",
  },
  9: {
    src: "/team/Danah.gif",
    preview: "/team/Mauzoun _ Danah.png",
  },
  10: {
    src: "/team/FJ.gif",
    preview: "/team/Mauzoun _ Fatmah Jadani.png",
  },
  11: {
    src: "/team/FA.gif",
    preview: "/team/Mauzoun _ Fatimah Alawi.png",
  },
  12: {
    src: "/team/Abeer.gif",
    preview: "/team/Mauzoun _ Abeer.png",
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

const Team = function ({ textAnimationControls, handleBgColorChange, handleOpenNav, history, isNavOpen, ...rest }) {
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
              <span className="memberName">{f(`teamMember.${i}.name`)}</span>
              <span className="memberRole">{f(`teamMember.${i}.role`)}</span>
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
        title={locale !== "ar" ? "Mauzoun | Team" : "مَوْزوْن | فريقنا"}
        description={locale !== "ar" ? "Mauzoun | Team" : "مَوْزوْن | فريقنا"}
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
              {/*<div className="container-image">
                <div className={styles.storyCover}>
                  <motion.img src="/Story.png" height="341px" width="900px" layout="fixed" priority="true" transition={{ duration: 0.5 }}/>
                </div>
                </div>*/}

              <div className="container-content">
                {/*<span className="nameStory">{f("nameMeaning")}</span>*/}

               <div className="proudStory">{f("proud")}</div> 
                <div className="container-object">
                   <div className={styles.gridContainer}>{getTeamMembers()}</div>
                </div>

                
                

                <span className="storyTeamwork">{f("teamwork")}</span>
              </div>

              {/*<div className="container-content">{f("world")}</div>*/}

              <div className="container-object">
                <div class={styles.totalWhiteBox}>
                  <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                    <span className="whitebox-font">{f("whitebox.innerText1")}</span>
                
                    
                  </WhiteBox>
                </div>
              </div>
              <div className="container-content">
                {/*f("workAspects")*/}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Team;
