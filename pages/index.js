import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Modal from "react-modal";
import { useIntl } from "react-intl";

import styles from "../styles/home.module.css";
import Menu from "../components/menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const intl = useIntl();
  const f = (id, styles) => formatJsxMessage(intl, router.locale, id, styles);

  // create a hook foreach instancee of a button
  const [button1Show, setButton1Show] = useState(true);
  const [button2Show, setButton2Show] = useState(true);
  const [button3Show, setButton3Show] = useState(true);
  const [button4Show, setButton4Show] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
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
        <span className={styles.storyPara}>
          {f("story")}
          <hr />
        </span>

        <div className={styles.services}>
          <div>
            <span className={styles.text1}>Our Services</span>
            {button1Show ? (
              <span onClick={() => setButton1Show(false)}>
                <BsChevronDown className={styles.icon1} />
              </span>
            ) : (
              <span>
                {" "}
                include developing strategic content for brands and campaigns,
                as well as unleashing our creativities in book editing, creative
                writing, story doctoring, and boutique publishing.
              </span>
            )}
          </div>
        </div>

        <div className={styles.approach}>
          <div>
            <span className={styles.text2}>
              Our approach to writing is thoughtful and imaginative
            </span>
            {button2Show ? (
              <span onClick={() => setButton2Show(false)}>
                <BsChevronDown className={styles.icon1} />
              </span>
            ) : (
              <span>
                , balancing between Arabic and English while remaining loyal to
                each language and the kind of service we provide. We believe in
                work that is backed by a strong understanding of brand
                strategies, audience needs, and empathetic storytelling.
              </span>
            )}
          </div>
        </div>

        <div className={styles.projects}>
          <div>
            <span className={styles.text3}>
              We seek projects that need us as much as we need them
            </span>
            {button3Show ? (
              <span onClick={() => setButton3Show(false)}>
                <BsChevronDown className={styles.icon1} />
              </span>
            ) : (
              <span>
                , from innovative brands to independent authors with passion
                projects. You can read our tales of success in our portfolio.
              </span>
            )}
          </div>
        </div>

        <div className={styles.work}>
          <div>
            <span className={styles.text4}>
              Our work is dedicated and ethical
            </span>
            {button4Show ? (
              <span onClick={() => setButton4Show(false)}>
                <BsChevronDown className={styles.icon1} />
              </span>
            ) : (
              <span>
                , prioritizing our community as much as our clients. This is why
                we host an annual competition for up-and-coming writers who are
                developing their first-ever manuscripts. Winners are provided
                with free editing, marketing, and publishing services to unleash
                their works to the world.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>

    // layout the structure of the pages and
  );
}
