import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";

import styles from "../styles/job.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";

export default function job() {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const [isJoinTeamVisible, setIsJoinTeamVisible] = useState(false);
  const [isJoinCompetitionVisible, setIsJoinCompetitionVisible] = useState(
    false
  );

  return (
    <div>
      <Menu backgroundColor="#d5e3ef" />

      <div className={styles.main}>
        <div className={styles.title}>Mauzoun & You</div>

        {/* Join the team */}
        {!isJoinTeamVisible ? (
          <div
            className={styles.wrappedContent}
            onClick={() => setIsJoinTeamVisible(true)}
            style={{ cursor: "pointer" }}
          >
            {f("joinTeam.intro")}
            <span className={styles.revealIcon}>
              <BsChevronDown className={styles.revealIcon} />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            <span className={styles.contentTitle}>{f("joinTeam.intro")}</span>
            <div className={styles.content}>{f("joinTeam.content")}</div>
            <hr size={1} color="black" />
          </div>
        )}

        {/* Join the competition */}
        {!isJoinCompetitionVisible ? (
          <div
            className={styles.wrappedContent}
            onClick={() => setIsJoinCompetitionVisible(true)}
            style={{ cursor: "pointer" }}
          >
            {f("joinCompetition.intro")}
            <span className={styles.revealIcon}>
              <BsChevronDown className={styles.revealIcon} />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            <span className={styles.contentTitle}>
              {f("joinCompetition.intro")}
            </span>
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
