import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "../styles/job.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";
import ComingSoon from "../components/ComingSoon";

const backgroundColor = "#b3d0ea";

export default function job() {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, locale, id, options);

  const [isJoinTeamVisible, setIsJoinTeamVisible] = useState(false);
  const [isJoinCompetitionVisible, setIsJoinCompetitionVisible] = useState(
    false
  );

  return (
    <div>
      <Menu backgroundColor={backgroundColor} />

      <motion.div
        className="container"
        style={{ backgroundColor }}
        layout="position"
      >
        <h1 className="mb-0">{f("title")}</h1>

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
              <ComingSoon />
              <div className={styles.content}>
                {f("joinCompetition.content")}
              </div>
            </>
          )}
        </div>

        <div className={styles.jobCover}>
          <img
            src="/Mauzoun & You.png"
            height="376px"
            width="750px"
            layout="fixed"
            priority="true"
          />
        </div>
        <div style={{ height: "350px" }} />
      </motion.div>

      <ContactButton />
    </div>
  );
}
