import React from "react";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";

import styles from "../styles/story.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import WhiteBox from "../components/WhiteBox";

const backgroundColor = "#d1e3f2";

const teamMembersData = {
  1: {
    src: "https://i.imgur.com/Ph2nM8j.gif",
    preview: "/First profile preview.png",
  },
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
};

const Story = function () {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

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
            <div className="mt-0 mb-0">
              {f(`teamMember.${i}.name`)}
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
      <Menu backgroundColor={backgroundColor} />

      <motion.div className="container" style={{ backgroundColor }} layout>
        <img src="/Story.png" className={styles.storyCover} />
        <h1>{f("nameMeaning")}</h1>

        {f("aim")}

        <b>{f("teamwork")}</b>

        <div className={styles.gridContainer}>{getTeamMembers()}</div>

        {f("world")}

        <WhiteBox>
          <b>{f("whitebox.innerText1")}</b>
          <br />
          {f("whitebox.innerText2")}
        </WhiteBox>

        {f("workAspects")}
      </motion.div>
    </div>
  );
};

export default Story;
