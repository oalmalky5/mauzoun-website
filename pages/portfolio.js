import Head from "next/head";
import story from "./story";
// import services from './services'
// import job from './job'
import styles from "../styles/portfolio.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import Menu from "../components/menu";

export default function portfolio() {
  return (
    <div>
      <Menu backgroundColor="#fbec9a" />

      <div className={styles.main}>
        <div className={styles.mainTitle}>Portfolio</div>
        <div className={styles.firstPara}>
          A personal look into our tales of success.
        </div>
        <div className={styles.secondPara}>
          Read our team’s project-focused journal entries, which document our
          creative thought process and show our beloved final outcome.
        </div>

        <div className={styles.content}>
          <div className={styles.title}>
            <u>Content Writing</u>
          </div>

          <div className={styles.projects}>
            <div className={styles.mauj}>Mauj</div>
            <div className={styles.shafra}>Shafra</div>
            <div className={styles.musa}>Musa & Palm</div>
            <div className={styles.tourism}>Saudi Tourism Authority</div>
            <div className={styles.albalad}>Ministry of Culture: AlBalad</div>
          </div>
          <hr />
        </div>

        <div className={styles.creative}>
          <div className={styles.title}>
            <u>Creative Writing</u>
          </div>

          <div className={styles.projects}>
            <div className={styles.culture}>
              Ministry of Culture: <br />
              Madinah Culinary Arts
            </div>
          </div>
        </div>

        <div className={styles.brandLogos}>
          <div className={styles.logoGrid}>
            <div className={styles.clients}>
              Since 2018, we have worked with{" "}
              <span className={styles.hundrid}>
                <u>over 100 clients</u>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
