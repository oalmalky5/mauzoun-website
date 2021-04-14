import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import {
  useIntl,
  createIntl,
  createIntlCache,
  RawIntlProvider,
} from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/menu.module.css";
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

  const f = (id, options) => formatJsxMessage(intl, locale, id, options);
  const otherF = (id, options) =>
    formatJsxMessage(otherIntl, otherLocale, id, options);

  return (
    <div>
      <div className={styles.sidenav} style={{ backgroundColor }}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="https://i.imgur.com/HjDbXtR.png" alt="Mauzoun logo" />
          </Link>
        </div>

        <div>
          {["story", "services", "portfolio", "job"].map((e) => (
            <Link href={"/" + e} key={e}>
              <a className={styles.navLink}>
                <span>{f(e + "Link", { style: { textAlign: "left" } })}</span>
                <span className={styles.otherLocaleLink}>
                  {otherF(e + "Link", { style: { textAlign: "left" } })}
                </span>
              </a>
            </Link>
          ))}
        </div>

        <div className={styles.languageSwitch}>
          <p style={{ fontWeight: locale === "en-US" ? "bold" : "normal" }}>
            English
          </p>
          <Link href={pathname} locale={otherLocale}>
            <label className={styles.switch}>
              <input type="checkbox" checked={locale === "ar"} readOnly />
              <span className={styles.slider}></span>
            </label>
          </Link>
          <p style={{ fontWeight: locale === "ar" ? "bold" : "normal" }}>
            عربــي
          </p>
        </div>

        <div className={styles.bottomNavIcons}>
          <div className={styles.twitter}>
            <a target="_blank" href="https://twitter.com/mauzoun_?lang=en">
              <IoLogoTwitter size="30px" />
            </a>
          </div>
          <div className={styles.twitter}>
            <a target="_blank" href="https://www.instagram.com/mauzoun/?hl=en">
              <IoLogoInstagram size="30px" />
            </a>
          </div>
          <div className={styles.twitter}>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/mauzoun/about/"
            >
              <GrFacebookOption size="30px" />
            </a>
          </div>
        </div>

        <div className={styles.email}>hello@mauzoun.com</div>

        <div className={styles.location}>Based in Jeddah, Saudi Arabia</div>
      </div>
    </div>
  );
}
