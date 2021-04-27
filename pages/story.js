import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "../styles/story.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import WhiteBox from "../components/WhiteBox";
import ContactButton from "../components/ContactButton";

const backgroundColor = "#d1e3f2";

const teamMembersData = {
  1: {
    src: "/team/Layan.gif",
    preview: "/team/Layan.png",
  },
  2: {
    src: "/team/Amal.gif",
    preview: "/team/Amal.jpg",
  },
  3: {
    src: "/team/Fatmah.gif",
    preview: "/team/Fatmah.jpg",
  },
  4: {
    src: "/team/Nada Nasir.gif",
    preview: "/team/Nada Nasir.jpg",
  },
  5: {
    src: "/team/Omar Thawabeh.gif",
    preview: "/team/Omar Thawabeh.jpg",
  },
  6: {
    src: "/team/Aya.gif",
    preview: "/team/Aya.jpeg",
  },
  7: {
    src: "/team/OmarM.gif",
    preview: "/team/OmarM.png",
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

const Story = function ({ textAnimationControls }) {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  let numberOfMembersImage = Object.keys(teamMembersData).length;
  let numberOfMembers =
    Object.keys(intl.messages).filter((e) => e.startsWith("teamMember."))
      .length / 2;

  const updateTeamMembersHoverState = (e, isHovered) => {
    const id = e.target?.id;
    if (id && teamMembersData[id].src)
      e.target.src = isHovered
        ? teamMembersData[id].src
        : teamMembersData[id].preview;
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

  return (
    <div>
      <Menu
        backgroundColor={backgroundColor}
        textAnimationControls={textAnimationControls}
      />

      <motion.div
        className="container"
        style={{ backgroundColor }}
        layout="position"
      >
        <div className={styles.storyCover}>
          <img
            src="/Story.png"
            height="341px"
            width="900px"
            layout="fixed"
            priority="true"
          />
        </div>
        <h1>{f("nameMeaning")}</h1>

        {f("aim")}

        <b>{f("teamwork")}</b>

        <div className={styles.gridContainer}>{getTeamMembers()}</div>

        {f("world")}

        <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
          <b>{f("whitebox.innerText1")}</b>
          <br />
          {f("whitebox.innerText2")}
        </WhiteBox>

        {f("workAspects")}
      </motion.div>

      <ContactButton />
    </div>
  );
};

export default Story;
