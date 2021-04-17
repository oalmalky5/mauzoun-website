import React from "react";
import { useIntl } from "react-intl";

import styles from "../styles/story.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";

const backgroundColor = "#d1e3f2";

const teamMembersProfilePic = {
  1: "https://i.imgur.com/Ph2nM8j.gif",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
};

const Story = function () {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const getTeamMembers = () => {
    let i = 1;
    let numberOfMembersImage = Object.keys(teamMembersProfilePic).length;
    let numberOfMembers =
      Object.keys(intl.messages).filter((e) => e.startsWith("teamMember."))
        .length / 2;
    let teamMembers = [];

    while (i <= numberOfMembersImage) {
      teamMembers.push(
        <div className={styles.gridItem} key={`teamMember.${i}`}>
          <div
            className={styles.gridItemImage}
            style={{
              backgroundImage: `url(${teamMembersProfilePic[i]})`,
              backgroundSize: "200px 200px",
            }}
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

      <div className="container" style={{ backgroundColor }}>
        <h1>{f("nameMeaning")}</h1>

        {f("aim")}

        <b>{f("teamwork")}</b>

        <div className={styles.gridContainer}>{getTeamMembers()}</div>

        {f("world")}

        <div className="whitebox">
          <b>{f("whitebox.innerText1")}</b>
          <br />
          {f("whitebox.innerText2")}
        </div>

        {f("workAspects")}
      </div>
    </div>
  );
};

export default Story;
