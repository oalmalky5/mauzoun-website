import React, { useEffect, useState } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../styles/globals.scss";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import { AnimateSharedLayout, useAnimation } from "framer-motion";
import useWindowSize from '../utils/useWidth'
import * as locales from "../content/locale";
import HeaderMobile from '../components/HeaderMobile'
import gsap from "gsap";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const {width} = useWindowSize()
  const { pathname, locale, defaultLocale } = router;
  const localeCopy = locales[locale];
  const messages = Object.assign(localeCopy["shared"], localeCopy[pathname]);

  const textAnimationControls = useAnimation();

  const [currentPageColor, setCurrentPageColor] = useState('')
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [history, setHistory] = useState([])

  useEffect(()=>{
    if (width < 768){
      setIsNavOpen(false)
    }
  }, [width])

  useEffect(()=>{
    setHistory(prev => [...prev, pathname])
  }, [pathname])

  const variants = {
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 0.8 },
    },
    instantlyVisible: { opacity: 1, transition: { duration: 0 } },
    hidden: { opacity: 1, transition: { delay: 0 } },
  };
  
  const defaultPageTransition = {
    initial: 'hidden',
    animate: "visible",
  };

  const handleOpenNav = (type) => {
    const paddingDirection = locale === "ar" ? 'paddingRight' : 'paddingLeft'

    if (type === 'instant'){
      return setIsNavOpen(false)
    }

    if (isNavOpen) {
      gsap.to('.navigation', {width: '0%', paddingRight: 0, paddingLeft: 0, duration: 0.3, clearProps: 'all', onComplete: () => setIsNavOpen(!isNavOpen)})
    } else {
      setIsNavOpen(!isNavOpen)
      gsap.fromTo('.navigation', {width: 0}, {width: '100%', [paddingDirection]: 45, duration: 0.3, clearProps: 'all'})
    }
  }

  const handleBgColorChange = (color) => setCurrentPageColor(color)

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
              <HeaderMobile 
                  backgroundColor = {currentPageColor} 
                  isNavOpen = {isNavOpen} 
                  handleOpenNav = {handleOpenNav}
              /> 
              <Component
                updatePageTransition={()=>{}}
                textAnimationControls={textAnimationControls}
                handleBgColorChange = {handleBgColorChange}
                handleOpenNav = {handleOpenNav}
                isNavOpen = {isNavOpen} 
                key={pathname}
                history = {history}
                initial={defaultPageTransition.initial}
                animate={defaultPageTransition.animate}
                variants={variants}
                screenWidth = {width}
                {...pageProps}
              />
          </div>
        </AnimateSharedLayout>
    </IntlProvider>
  );
}

export default MyApp;
