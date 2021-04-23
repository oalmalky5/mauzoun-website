import React from "react";
import { useRouter } from "next/router";

import styles from "../styles/comingSoon.module.scss";
import { useIntl } from "react-intl";

export default function ComingSoon() {
  const intl = useIntl();
  const f = (id) => intl.formatMessage({ id });

  return (
    <>
      <hr size="5" color="black" />
      <div className={styles.comingSoon}>
        <div className={styles.tiltedSquare}>
          <img
            src="/Tilted Square.svg"
            height="20"
            width="20"
            priority="true"
          />
        </div>

        <div className={styles.statusBox}>
          <span className="mt-0 mb-0">{f("comingSoon")}</span>
        </div>

        <div className={styles.tiltedSquare}>
          <img
            src="/Tilted Square.svg"
            height="20"
            width="20"
            priority="true"
          />
        </div>
      </div>
    </>
  );
}
