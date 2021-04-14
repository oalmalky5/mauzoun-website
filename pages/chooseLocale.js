import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import styles from "../styles/chooseLocale.module.scss";

export default function ChooseLocale() {
  const router = useRouter();

  const changeLocale = (locale) => {
    Cookies.set("NEXT_LOCALE", locale);
    router.replace(`/${locale}`);
  };

  return (
    <div className={styles.pageContainer}>
      <img src="https://i.imgur.com/HjDbXtR.png" alt="Mauzoun logo" />
      <h1>A warm welcome to you from the Mauzoun Team.</h1>
      <h2>Please choose a language</h2>
      <div className={styles.languagePickerContainer}>
        <button
          className={styles.languageButton}
          onClick={() => changeLocale("en-US")}
        >
          English
        </button>
        <button
          className={styles.languageButton}
          onClick={() => changeLocale("ar")}
        >
          عربــي
        </button>
      </div>
    </div>
  );
}
