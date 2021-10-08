import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../styles/footer.module.scss";
import Contact from "./Contact";

import gsap from "gsap";
import Cookies from "js-cookie";

export default function Footer({ children, style, decoratorsPositions }) {
  const router = useRouter();
  const { locale, pathname } = router;
  const otherLocale = locale === "en-US" ? "ar" : "en-US";

  const handleAnimationFadeIn = React.useCallback((locale, callback) => {
    const isFromLeftToRight = !locale || locale.includes("en-US");

    // removeAndReturnBgColor()
    // removeAndReturnContent()
    // hideContactBtnContent()

    gsap.to(`.header-mobile`, {
      opacity: 0,
      duration: 0.3,
      delay: 0,
    });

    gsap.to(`.header-mobile`, {
      opacity: 1,
      duration: 0.3,
      delay: 0.3,
    });

    gsap.to(`.background-animation`, {
      left: isFromLeftToRight ? "25%" : "0",
      duration: 0.3,
      delay: 0.3,
      clear: "all",
      onStart: callback,
    });

    gsap.to(`.contact-button`, {
      opacity: 1,
      duration: 0.3,
      delay: 0.6,
    });


  }, []);


  const [isOpenContactModel, setIsOpenContactModel] = useState(false);


  return (
    <div className={styles.footerBar} style={{}}>
      <div className={styles.footerWrapper}>
        <div className={styles.languageChange}>
          <span className={locale}>
            <b>{locale === "en-US" ? "English" : "العربية"}</b>
          </span>

          <a onClick={(e) => {
                e.preventDefault();
                e.stopPropagation()
                handleAnimationFadeIn(locale, () => {
                  Cookies.set("NEXT_LOCALE", otherLocale);
                  router.push(pathname, pathname, { locale: otherLocale });
                });
              }}>
            <label className={styles.switch}>
              <input type="checkbox" checked={locale === "ar"} readOnly />
              <span className={styles.slider} />
            </label>
          </a>


          <span className={otherLocale}><b>{locale === "ar" ? "English" : "العربية"}</b></span>
        </div>
        {/*<span onClick={() => setIsOpenContactModel(true)} style={{ fontWeight: 'bold', float: `${locale === "ar" ? "left" : "right"}` }} ><Contact isOpen={isOpenContactModel} />{locale === "ar" ? "اتصل" : "Contact"}</span>*/}
        <a href="mailto:hello@mauzoun.com">
          <span style={{ fontWeight: 'bold', float: `${locale === "ar" ? "left" : "right"}` }} >{locale === "ar" ? "اتصل" : "Contact"}</span>
        </a>
      </div>
    </div>
  );
}