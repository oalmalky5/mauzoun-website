import React from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
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
      <AnimateSharedLayout type="crossfade">
        <div dir={pathname !== "/" && locale === "ar" ? "rtl" : "ltr"}>
          <Component {...pageProps} />
        </div>
      </AnimateSharedLayout>
    </IntlProvider>
  );
}

export default MyApp;
