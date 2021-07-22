import React from "react";
import { IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { useIntl, createIntl, createIntlCache } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { isIOS } from "react-device-detect";

import styles from "../styles/menu.module.scss";
import * as locales from "../content/locale";
import formatJsxMessage from "../utils/formatJsxMessage";

import gsap from "gsap";

const intlCache = createIntlCache();

export default function Menu({ backgroundColor, textAnimationControls, isNavOpen, handleOpenNav }) {
  const router = useRouter();
  const { locale, pathname } = router;

  const otherLocale = locale === "en-US" ? "ar" : "en-US";

  const intl = useIntl();
  const [otherIntl, setOtherIntl] = React.useState();

  React.useEffect(() => {
    router.prefetch(`/${otherLocale}${pathname}`);
  }, []);

  React.useEffect(() => {
    const localeCopy = locales[otherLocale];
    setOtherIntl(
      createIntl(
        {
          locale: otherLocale,
          messages: Object.assign(localeCopy["shared"], localeCopy[pathname]),
        },
        intlCache
      )
    );
  }, [locale]);

  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });
  const otherF = (id, options) =>
    formatJsxMessage(otherIntl, otherLocale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  const [hoveredLink, setHoveredLink] = React.useState("");

  const buildTiltedSquare = (linkName) => {
    let filter;
    if (router.pathname === "/services" || router.pathname === "/blog")
      filter = "invert(92%) sepia(72%) saturate(682%) hue-rotate(329deg) brightness(96%) contrast(103%)";
    else filter = "invert(99%) sepia(59%) saturate(426%) hue-rotate(169deg) brightness(112%) contrast(100%)";

    return (
      <object
        data="/Tilted Square.svg"
        className={styles.tiltedSquare}
        style={{ filter }}
        hidden={hoveredLink !== linkName && `/${linkName}` !== router.pathname}
      />
    );
  };

  // USE THIS FUNCTION TO ANIMATION WITH TRANSITION EFFECT

  // const handleAnimationTransition = React.useCallback((locale, callback) => {
  //   const isFromLeftToRight = !locale || locale.includes("en-US");

  //   gsap.to(`.bg-animation-${pathname.split("/")[1]}`, {
  //     opacity: 0,
  //     delay: 0,
  //     x: isFromLeftToRight ? -20 : 20,
  //     duration: 1.5,
  //     onComplete: callback,
  //   });

  //   gsap.to(`.background-animation`, {
  //     [isFromLeftToRight ? "left" : "right"]: "25%",
  //     duration: 1.5,
  //     delay: 0,
  //     onComplete: () => {
  //       document.querySelector(".background-animation").style.left = null;
  //       document.querySelector(".background-animation").style.right = null;
  //     },
  //   });

  //   gsap.fromTo(
  //     `.bg-animation-${pathname.split("/")[1]}`,
  //     { x: isFromLeftToRight ? 100 : -100 },
  //     { opacity: 1, x: 0, duration: 1, delay: 1.5 }
  //   );
  // }, []);

  const handleAnimationFadeIn = React.useCallback((locale, callback) => {
    const isFromLeftToRight = !locale || locale.includes("en-US");

    gsap.fromTo(
      `.bg-animation-${pathname.split("/")[1]}`,
      { opacity: 1 },
      { opacity: 0, delay: 0, x: 0, duration: 0.8, onComplete: callback }
    );

    gsap.to(`.contact-button`, {
      opacity: 0,
      duration: 0.8,
      delay: 0,
    });

    gsap.to(`.header-mobile`, {
      opacity: 0,
      duration: 0.8,
      delay: 0,
    });

    // gsap.to(`.header-mobile__logo`, {
    //   opacity: 0,
    //   duration: 0.8,
    //   delay: 0,
    // });

    // gsap.to(`.header-mobile__button`, {
    //   opacity: 0,
    //   duration: 0.8,
    //   delay: 0,
    // });

    gsap.to(`.background-animation`, {
      left: isFromLeftToRight ? "25%" : "0",
      duration: 1,
      delay: 0.8,
      clear: "all",
    });

    gsap.to(`.contact-button`, {
      opacity: 1,
      duration: 0.6,
      delay: 1.6,
    });

    gsap.to(`.header-mobile`, {
      opacity: 1,
      duration: 0.6,
      delay: 1.6,
    });

    // gsap.to(`.header-mobile__logo`, {
    //   opacity: 1,
    //   duration: 0.6,
    //   delay: 1.6,
    // });

    // gsap.to(`.header-mobile__button`, {
    //   opacity: 1,
    //   duration: 0.6,
    //   delay: 1.6,
    // });

    gsap.fromTo(
      `.bg-animation-${pathname.split("/")[1]}`,
      { opacity: 0, x: 0 },
      { opacity: 1, x: 0, duration: 0.8, delay: 1.6 }
    );
  }, []);

  return (
    <div
      className={`${isNavOpen ? styles.open : ""} ${styles.sidenav} navigation`}
      style={{ backgroundColor: isNavOpen ? null : backgroundColor }}
      // layout='position'
    >
      {" "}
      <div className="animationFade">
        {isNavOpen ? null : (
          <Link href="/">
            <motion.img
              src="https://i.imgur.com/HjDbXtR.png"
              alt="Mauzoun logo"
              className={styles.logo}
              transition={{ duration: 0 }}
              layoutId="logo"
            />
          </Link>
        )}

        <div className={styles.menu}>
          <div>
            {["home", "story", "services", "portfolio", "blog", "andyou"].map((e, i) => {
              const otherText = otherF(e + "Link");
              return (
                <div key={e}>
                  {!(i % 2) && buildTiltedSquare(e)}

                  <Link href={"/" + e}>
                    <a
                      className={styles.navLink}
                      onMouseEnter={() => (isIOS ? null : setHoveredLink(e))}
                      onMouseLeave={() => (isIOS ? null : setHoveredLink(""))}
                      onClick={() => isNavOpen && handleOpenNav?.("instant")}
                    >
                      <div
                        className={`${styles.itemTitle} heading`}
                        style={{
                          fontWeight: locale === "en-US" ? "500" : "bold",
                        }}
                      >
                        {f(e + "Link")}
                        {i % 2 ? buildTiltedSquare(e) : null}
                      </div>

                      <span className={`${styles.otherLocaleLink} ${otherLocale} lighter`}>
                        {otherText ? (
                          otherText
                        ) : (
                          <p>
                            <span> </span>
                          </p>
                        )}
                      </span>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className={styles.languageSwitch}>
            <p className={locale}>
              <b>{locale === "en-US" ? "English" : "العربية"}</b>
            </p>

            <a
              onClick={async (e) => {
                e.preventDefault();
                Cookies.set("NEXT_LOCALE", otherLocale);
                handleAnimationFadeIn(locale, () => {
                  router.push(pathname, pathname, { locale: otherLocale });
                });
              }}
            >
              <label className={styles.switch}>
                <input type="checkbox" checked={locale === "ar"} readOnly />
                <span className={styles.slider} />
              </label>
            </a>

            <p className={otherLocale}>{locale === "ar" ? "English" : "العربية"}</p>
          </div>

          <div className={styles.complementaryInfo}>
            <div className={styles.bottomNavIcons}>
              <a target="_blank" href="https://twitter.com/mauzoun_?lang=en">
                <IoLogoTwitter size="30px" />
              </a>
              <a target="_blank" href="https://www.instagram.com/mauzoun/?hl=en">
                <IoLogoInstagram size="30px" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/mauzoun/about/">
                <IoLogoLinkedin size="30px" />
              </a>
            </div>

            <span className="en-US">{f("email")}</span>
            <span className="bolder">{f("location")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
