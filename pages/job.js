import Head from "next/head";
import story from "./story";
import services from "./services";
import styles from "../styles/job.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import Menu from "../components/menu";

export default function job() {
  const [button1Show, setButton1Show] = useState(true);
  const [button2Show, setButton2Show] = useState(true);
  const [button3Show, setButton3Show] = useState(true);
  const [button4Show, setButton4Show] = useState(true);

  return (
    <div>
      <Menu backgroundColor="#d5e3ef" />

      <div className={styles.main}>
        <div className={styles.mainTitle}>Mauzoun & You</div>
        <div>
          <span className={styles.join}>Join the Team</span>
          {button1Show ? (
            <span onClick={() => setButton1Show(false)}>
              <BsChevronDown className={styles.icon1} />
            </span>
          ) : (
            <div>
              <div className={styles.jobStatus}>
                {" "}
                There are currently no job opportunities available. Keep
                checking.
              </div>
              <div className={styles.explainJobStatus1}>
                If you are interested in joining Mauzoun, keep checking this
                page or our Instagram account for the latest job announcements.
              </div>
              <div className={styles.explainJobStatus2}>
                At Mauzoun, we look for writers with bulletproof Arabic and
                English who are creative and passionate about writing. To win us
                over, make sure that your application is free of mistakes, and
                complement it with a captivating cover letter that conveys why
                you love the work you do.
              </div>
              <hr />
            </div>
          )}
        </div>

        <div>
          <span className={styles.join}>Join the Competition</span>
          {button2Show ? (
            <span onClick={() => setButton2Show(false)}>
              <BsChevronDown className={styles.icon1} />
            </span>
          ) : (
            <div>
              <div className={styles.compStatus}>
                <div className={styles.leftLine}>
                  <div className={styles.innerLine}>________</div>
                </div>
                <div className={styles.statusBox}>
                  <div className={styles.innerText}>COMING SOON.</div>
                </div>
                <div className={styles.rightLine}>
                  <div className={styles.innerLine}>________</div>
                </div>
              </div>
              <div className={styles.explainJobStatus1}>
                Our latest endeavor in creative writing will be investing in
                emerging and first-time writers from the Arab World, who are
                trying to publish their first book, novel, short stories,
                collection of essays, or visual script. Mauzoun will be
                collaborating with a judging panel that will process
                applications and decide on one writer, who will receive our
                consultation and services for a period of one year, and have
                their work published or paired with a producer by the end of the
                year.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
