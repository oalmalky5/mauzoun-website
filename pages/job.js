import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";

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

      <motion.div className="container" style={{ backgroundColor }} layout>
        <h1>Mauzoun & You</h1>

        {/* Join the team */}
        <div className="mt-0 unwrapped-content">
          <div
            className="content-wrapper"
            onClick={() => setIsJoinTeamVisible(!isJoinTeamVisible)}
            style={isJoinTeamVisible ? { marginBottom: "30px" } : {}}
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
            onClick={() =>
              setIsJoinCompetitionVisible(!isJoinCompetitionVisible)
            }
            style={isJoinCompetitionVisible ? { marginBottom: "40px" } : {}}
          >
            <h2>{f("joinCompetition.intro")}</h2>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>

          {isJoinCompetitionVisible && (
            <>
              <hr size="5" color="black" />
              <div className={styles.compStatus}>
                <object
                  data="/Tilted Square.svg"
                  className={styles.tiltedSquare}
                />
                <div className={styles.statusBox}>{f("comingSoon")}</div>
                <object
                  data="/Tilted Square.svg"
                  className={styles.tiltedSquare}
                />
              </div>

              <div className={styles.content}>
                {f("joinCompetition.content")}
              </div>
            </>
          )}
        </div>

        <img src="/Mauzoun & You.png" className={styles.jobCover} />
        <div style={{ height: "350px" }} />
      </motion.div>
    </div>
  );
}
