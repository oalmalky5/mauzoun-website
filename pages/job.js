import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";

import styles from "../styles/job.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";

const backgroundColor = "#b3d0ea";

export default function job() {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const [isJoinTeamVisible, setIsJoinTeamVisible] = useState(false);
  const [isJoinCompetitionVisible, setIsJoinCompetitionVisible] = useState(
    false
  );

  return (
    <div>
      <Menu backgroundColor={backgroundColor} />

      <div className="container" style={{ backgroundColor }}>
        <h1>Mauzoun & You</h1>

        {/* Join the team */}
        {!isJoinTeamVisible ? (
          <div
            className="content-wrapper"
            onClick={() => setIsJoinTeamVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <h2>{f("joinTeam.intro")}</h2>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>
        ) : (
          <div className="unwrapped-content">
            <h2>{f("joinTeam.intro")}</h2>
            {f("joinTeam.content")}
            <hr />
          </div>
        )}

        {/* Join the competition */}
        {!isJoinCompetitionVisible ? (
          <div
            className="content-wrapper"
            onClick={() => setIsJoinCompetitionVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <h2>{f("joinCompetition.intro")}</h2>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            <h2>{f("joinCompetition.intro")}</h2>
            <div className={styles.compStatus}>
              ________
              <div className={styles.statusBox}>
                <div className={styles.innerText}>{f("comingSoon")}</div>
              </div>
              ________
            </div>
            <div className={styles.content}>{f("joinCompetition.content")}</div>
          </div>
        )}
      </div>
    </div>
  );
}
