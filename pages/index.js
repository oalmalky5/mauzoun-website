import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Modal from "react-modal";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/home.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";

export default function Home() {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const [areServicesVisible, setAreServicesVisible] = useState(false);
  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [areProjectsVisible, setAreProjectsVisible] = useState(false);
  const [isWorkVisible, setIsWorkVisible] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Menu backgroundColor="#F8D952" />

      <button
        className={styles.contactForm}
        onClick={() => setModalIsOpen(true)}
      >
        <div className={styles.innerContent}> {f("interestedInWork")}</div>

        <Modal
          className={styles.modal}
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h4>Modal title</h4>
          <p>Modal body</p>
          <div>
            <button
              className={styles.closeButton}
              onClick={() => setModalIsOpen(false)}
            >
              close
            </button>
          </div>
        </Modal>
      </button>

      <div className={styles.main}>
        <h6>{f("title")}</h6>

        <span className={styles.topPara}>{f("summary")}</span>

        <img
          src="http://writingandwellness.com/wp-content/uploads/2015/02/Home-Office-2.jpg"
          alt="an image of an office"
        ></img>

        <div className={styles.storyPara}>
          {f("story")}
          <hr size={1} color="black" />
        </div>

        {/* Services */}
        {!areServicesVisible ? (
          <div
            className={styles.wrappedContent}
            onClick={() => setAreServicesVisible(true)}
            style={{ cursor: "pointer" }}
          >
            {f("services.intro")}
            <span className={styles.revealIcon}>
              <BsChevronDown className={styles.revealIcon} />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            <Link href="/services">
              <b style={{ cursor: "pointer" }}>{f("services.intro")}</b>
            </Link>
            {f("services.content")}
            <hr size={1} color="black" />
          </div>
        )}

        {/* Approach */}
        {!isApproachVisible ? (
          <div
            className={styles.wrappedContent}
            onClick={() => setIsApproachVisible(true)}
            style={{ cursor: "pointer" }}
          >
            {f("approach.intro")}
            <span className={styles.revealIcon}>
              <BsChevronDown className={styles.revealIcon} />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            {!areServicesVisible && <hr size={1} color="black" />}
            <b>{f("approach.intro")}</b>
            {f("approach.content")}
            <hr size={1} color="black" />
          </div>
        )}

        {/* Projects */}
        {!areProjectsVisible ? (
          <div
            className={styles.wrappedContent}
            onClick={() => setAreProjectsVisible(true)}
            style={{ cursor: "pointer" }}
          >
            {f("projects.intro")}
            <span className={styles.revealIcon}>
              <BsChevronDown className={styles.revealIcon} />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            {!isApproachVisible && <hr size={1} color="black" />}
            <b>{f("projects.intro")}</b>
            {f("projects.content")}
            <hr size={1} color="black" />
          </div>
        )}

        {/* Work */}
        {!isWorkVisible ? (
          <div
            className={styles.wrappedContent}
            onClick={() => setIsWorkVisible(true)}
            style={{ cursor: "pointer" }}
          >
            {f("work.intro")}
            <span className={styles.revealIcon}>
              <BsChevronDown className={styles.revealIcon} />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            {!areProjectsVisible && <hr size={1} color="black" />}
            <Link href="/job">
              <b style={{ cursor: "pointer" }}>{f("work.intro")}</b>
            </Link>
            {f("work.content")}
          </div>
        )}
      </div>
    </>

    // layout the structure of the pages and
  );
}
