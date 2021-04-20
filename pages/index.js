import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "../styles/chooseLocale.module.scss";

export default function ChooseLocale() {
  const router = useRouter();

  const changeLocale = (locale) => {
    Cookies.set("NEXT_LOCALE", locale);
    router.replace(`/${locale}/home`);
  };

  return (
    <div className={styles.pageContainer}>
      <motion.img
        src="https://i.imgur.com/HjDbXtR.png"
        alt="Mauzoun logo"
        layoutId="logo"
      />
      <div className={styles.languagePicker}>
        <button
          className={styles.languageButton}
          onClick={() => changeLocale("en-US")}
          style={{ fontFamily: "Alegreya" }}
        >
          English
        </button>
        <button
          className={styles.languageButton}
          onClick={() => changeLocale("ar")}
          style={{ fontFamily: "GE Dinar Two" }}
        >
          عربــي
        </button>
      </div>
    </div>
  );
}
