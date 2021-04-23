import React from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import "../styles/globals.scss";
import * as locales from "../content/locale";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname, locale, defaultLocale } = router;
  const localeCopy = locales[locale];
  const messages = Object.assign(localeCopy["shared"], localeCopy[pathname]);

  const variants = {
    visible: { opacity: 1, transition: { delay: 0, duration: 2 } },
    instantlyVisible: { opacity: 1, transition: { duration: 0 } },
    hidden: { opacity: 0, transition: { delay: 0, duration: 0.3 } },
    instantlyHidden: { opacity: 0, transition: { duration: 0 } },
  };

  const defaultPageTransition = {
    initial: false,
    animate: "instantlyVisible",
    exit: "instantlyHidden",
  };

  const [pageTransition, setPageTransition] = React.useState(
    defaultPageTransition
  );

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <AnimateSharedLayout type="crossfade">
        <div
          dir={pathname !== "/" && locale === "ar" ? "rtl" : "ltr"}
          className={"locale " + locale}
        >
          <AnimatePresence>
            <motion.div
              key={pathname}
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              variants={variants}
            >
              <Component
                setPageTransition={(v) => {
                  if (v === "default") {
                    setPageTransition(defaultPageTransition);
                    return;
                  }
                  setPageTransition(v);
                }}
                {...pageProps}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimateSharedLayout>
    </IntlProvider>
  );
}

export default MyApp;
