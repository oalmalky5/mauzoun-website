import React from "react";
import styles from "../styles/portfolio.module.scss";
import Menu from "../components/Menu";

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
            <div className={styles.project}>Mauj</div>
            <div className={styles.project}>Shafra</div>
            <div className={styles.project}>Musa & Palm</div>
            <div className={styles.project}>Saudi Tourism Authority</div>
            <div className={styles.project}>Ministry of Culture: AlBalad</div>
          </div>
          <hr size={1} color="black" />
        </div>

        <div className={styles.creative}>
          <div className={styles.title}>
            <u>Creative Writing</u>
          </div>

          <div className={styles.projects}>
            <div className={styles.project}>
              Ministry of Culture: <br />
              Madinah Culinary Arts
            </div>
          </div>
        </div>

        <div className={styles.brandLogos}>
          <div className={styles.logoGrid}>
            <div className={styles.clients}>
              Since 2018, we have worked with{" "}
              <b>
                <u>over 100 clients</u>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
