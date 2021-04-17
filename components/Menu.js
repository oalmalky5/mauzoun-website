import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { useIntl, createIntl, createIntlCache } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

import styles from "../styles/menu.module.scss";
import * as locales from "../content/locale";
import formatJsxMessage from "../utils/formatJsxMessage";

const intlCache = createIntlCache();

export default function Menu({ backgroundColor }) {
  const router = useRouter();
  const { locale, pathname } = router;

  const otherLocale = locale === "en-US" ? "ar" : "en-US";

  const intl = useIntl();
  const [otherIntl, setOtherIntl] = React.useState();

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

  const f = (id, options) => formatJsxMessage(intl, id, options);
  const otherF = (id, options) => formatJsxMessage(otherIntl, id, options);

  return (
    <motion.div
      className={styles.sidenav}
      style={{ backgroundColor }}
      layoutId="menu"
    >
      <div className={styles.logo}>
        <Link href="/chooseLocale">
          <motion.img
            src="https://i.imgur.com/HjDbXtR.png"
            alt="Mauzoun logo"
            layoutId="logo"
          />
        </Link>
      </div>

      <div>
        {["home", "story", "services", "portfolio", "job"].map((e) => (
          <Link href={e === "home" ? "/" : "/" + e} key={e}>
            <a className={styles.navLink}>
              {f(e + "Link")}
              <span className={styles.otherLocaleLink}>
                {otherF(e + "Link")}
              </span>
            </a>
          </Link>
        ))}
      </div>

      <div className={styles.languageSwitch}>
        <b>{locale === "en-US" ? "English" : "عربــي"}</b>
        <Link href={pathname} locale={otherLocale}>
          <a onClick={() => Cookies.set("NEXT_LOCALE", otherLocale)}>
            <label className={styles.switch}>
              <input type="checkbox" checked={locale === "ar"} readOnly />
              <span className={styles.slider} />
            </label>
          </a>
        </Link>
        {locale === "ar" ? "English" : "عربــي"}
      </div>

      <div className={styles.complementaryInfo}>
        <div className={styles.bottomNavIcons}>
          <a target="_blank" href="https://twitter.com/mauzoun_?lang=en">
            <IoLogoTwitter size="30px" />
          </a>
          <a target="_blank" href="https://www.instagram.com/mauzoun/?hl=en">
            <IoLogoInstagram size="30px" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/mauzoun/about/"
          >
            <GrFacebookOption size="30px" />
          </a>
        </div>

        {f("email")}
        <b>{f("location")}</b>
      </div>
    </motion.div>
  );
}
