import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AnimateSharedLayout } from "framer-motion";

import "../styles/globals.scss";
import * as locales from "../content/locale";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = Object.assign(localeCopy["shared"], localeCopy[pathname]);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <form name="Contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="text" name="phone" />
        <input type="text" name="subject" />
        <input type="text" name="date" />
        <input type="text" name="time" />
      </form>

      <AnimateSharedLayout type="crossfade">
        <div dir={pathname !== "/" && locale === "ar" ? "rtl" : "ltr"}>
          <Component {...pageProps} />
        </div>
      </AnimateSharedLayout>
    </IntlProvider>
  );
}

export default MyApp;
