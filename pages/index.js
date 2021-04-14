import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "../styles/home.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";

const backgroundColor = "#f8d952";

export default function Home() {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const [areServicesVisible, setAreServicesVisible] = useState(false);
  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [areProjectsVisible, setAreProjectsVisible] = useState(false);
  const [isWorkVisible, setIsWorkVisible] = useState(false);

  return (
    <>
      <Menu backgroundColor={backgroundColor} />

      <div className="container" style={{ backgroundColor }}>
        <h1>{f("title")}</h1>

        {f("summary")}

        <img
          className={styles.homeImg}
          src="http://writingandwellness.com/wp-content/uploads/2015/02/Home-Office-2.jpg"
          alt="an image of an office"
        />

        {f("story")}
        <hr />

        {/* Services */}
        {!areServicesVisible ? (
          <div
            className="wrapped-content"
            onClick={() => setAreServicesVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <b>{f("services.intro")}</b>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>
        ) : (
          <div className="inline unwrapped-content">
            <Link href="/services">
              <b style={{ cursor: "pointer" }}>{f("services.intro")}</b>
            </Link>
            {f("services.content")}
            <hr />
          </div>
        )}

        {/* Approach */}
        {!isApproachVisible ? (
          <div
            className="wrapped-content"
            onClick={() => setIsApproachVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <b>{f("approach.intro")}</b>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>
        ) : (
          <div className="inline unwrapped-content">
            {!areServicesVisible && <hr />}
            <b>{f("approach.intro")}</b>
            {f("approach.content")}
            <hr />
          </div>
        )}

        {/* Projects */}
        {!areProjectsVisible ? (
          <div
            className="wrapped-content"
            onClick={() => setAreProjectsVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <b>{f("projects.intro")}</b>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>
        ) : (
          <div className="inline unwrapped-content">
            {!isApproachVisible && <hr />}
            <b>{f("projects.intro")}</b>
            {f("projects.content")}
            <hr />
          </div>
        )}

        {/* Work */}
        {!isWorkVisible ? (
          <div
            className="wrapped-content"
            onClick={() => setIsWorkVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <b>{f("work.intro")}</b>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>
        ) : (
          <div className="inline unwrapped-content">
            {!areProjectsVisible && <hr />}
            <b>{f("work.intro")}</b>
            {f("work.content")}
          </div>
        )}
      </div>

      <ContactButton messageId="contactPrompt" />
    </>
  );
}
