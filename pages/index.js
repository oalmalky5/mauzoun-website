import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "../styles/chooseLocale.module.scss";

export default function ChooseLocale({ setPageTransition }) {
  const router = useRouter();

  React.useEffect(() => {
    router.prefetch("/en-US/home");
    router.prefetch("/ar/home");
  }, []);

  const changeLocale = (locale) => {
    setPageTransition({
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
    });
    Cookies.set("NEXT_LOCALE", locale);
    router.push(`/${locale}/home`);
  };

  return (
    <div className={styles.pageContainer}>
      <div />

      <div className={styles.mainPanel}>
        <motion.img
          src="https://i.imgur.com/HjDbXtR.png"
          alt="Mauzoun logo"
          transition={{ duration: 2 }}
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

      <div />
    </div>
  );
}
