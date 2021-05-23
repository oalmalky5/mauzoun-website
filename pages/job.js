import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NextSeo } from 'next-seo';

import styles from "../styles/job.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";
import ComingSoon from "../components/ComingSoon";

const backgroundColor = "#b3d0ea";

export default function job({ textAnimationControls }) {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  const [isBecomeClientVisible, setIsBecomeClientVisible] = useState(false);
  const [isJoinTeamVisible, setIsJoinTeamVisible] = useState(false);
  const [isJoinCompetitionVisible, setIsJoinCompetitionVisible] =
    useState(false);

  return (
    <>
      <NextSeo
        title={locale !== "ar" ? "Mauzoun | Mauzoun & You" : "مَوْزوْن | مَوْزوْن وأنت"}
        description={locale !== "ar" ? "Mauzoun | Mauzoun & You" : "مَوْزوْن | مَوْزوْن وأنت"}
      />
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
      {/* <div
        className='test-job'
        style={{
          backgroundColor: backgroundColor,
          width: "72%",
          height: "150vh",
          position: "absolute",
          zIndex: -1,
        }}
      ></div> */}
      <div
        className='bg-animation-job'
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 10,
        }}
      >
        <Menu
          backgroundColor={backgroundColor}
          textAnimationControls={textAnimationControls}
        />

        <div
          className='container'
          style={{ backgroundColor }}
          // layout="position"
        >
          <h1 className='mb-0'>{f("title")}</h1>

          {/* Become our client */}
          <div className='mt-0 unwrapped-content'>
            <div
              className='content-wrapper'
              onClick={() => setIsBecomeClientVisible(!isBecomeClientVisible)}
              style={isBecomeClientVisible ? { marginBottom: "20px" } : {}}
            >
              <h2>{f("becomeClient.intro")}</h2>
              <span className='reveal-icon'>
                <BsChevronDown className='reveal-icon' />
              </span>
            </div>

            {isBecomeClientVisible && (
              <>
                {f("becomeClient.content")}
                <hr />
              </>
            )}
          </div>

          {/* Join the team */}
          <div className='mt-0 unwrapped-content'>
            <div
              className='content-wrapper'
              onClick={() => setIsJoinTeamVisible(!isJoinTeamVisible)}
              style={isJoinTeamVisible ? { marginBottom: "20px" } : {}}
            >
              <h2>{f("joinTeam.intro")}</h2>
              <span className='reveal-icon'>
                <BsChevronDown className='reveal-icon' />
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
          <div className='mt-0 unwrapped-content'>
            <div
              className='content-wrapper'
              onClick={() =>
                setIsJoinCompetitionVisible(!isJoinCompetitionVisible)
              }
              style={isJoinCompetitionVisible ? { marginBottom: "40px" } : {}}
            >
              <h2>{f("joinCompetition.intro")}</h2>
              <span className='reveal-icon'>
                <BsChevronDown className='reveal-icon' />
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
              src='/Mauzoun & You.png'
              height='376px'
              width='750px'
              layout='fixed'
              priority='true'
            />
          </div>
          <div style={{ height: "350px" }} />
        </div>

        <ContactButton />
      </div>
    </div>
    </>
  );
}
