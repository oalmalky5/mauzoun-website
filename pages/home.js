import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useIntl } from "react-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NextSeo } from 'next-seo';

import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";
import { usePanelbear } from '@panelbear/panelbear-nextjs';

import {MotionLogo} from "../components/MotionLogo"
import Footer from "../components/Footer";

const backgroundColor = "#f7f5f0";

export default function Home({ updatePageTransition, textAnimationControls, handleBgColorChange, history, handleOpenNav, isNavOpen, ...rest }) {
  const { key, initial, animate, variants } = rest;
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, locale, id, {
    shouldFade: true,
    animationControls: textAnimationControls,
    ...options,
  })

  function CustomApp({ Component, pageProps }) {

    // Load Panelbear only once during the app lifecycle
    usePanelbear('BLavSVGQgtx');
  
    return <Component {...pageProps} />;
  }
  

  const [areServicesVisible, setAreServicesVisible] = useState(false);
  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [areProjectsVisible, setAreProjectsVisible] = useState(false);
  const [isWorkVisible, setIsWorkVisible] = useState(false);

  React.useEffect(()=>handleBgColorChange(backgroundColor), [])

  return (

    
    <>

      <NextSeo
        title={locale !== "ar" ? "Mauzoun | Home" : "مَوْزوْن | البداية"}
        description={f("pageTitle")}
      />
      <div className = "background-animation" style={{ backgroundColor }}/>

      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        variants={variants}
      >
        <ContactButton isNavOpen = {isNavOpen} history = {history}/>
        <div
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            height: "100%",
            overflowX: "hidden",
          }}
        >
          <div
            className='bg-animation-home'
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              zIndex: 8,
              overflow: isNavOpen ? 'hidden' : null
            }}
          >

            <MotionLogo />
            <Menu
              backgroundColor={backgroundColor}
              textAnimationControls={textAnimationControls}
              isNavOpen = {isNavOpen}
              handleOpenNav = {handleOpenNav}
            />

            <div className='container'>
              <div className='container-background' style={{ backgroundColor }}>
              </div>
              <div className='container-content'>
                <h1>{f("title")}</h1>
                {f("summary")}
              </div>
              {/*<div className='container-image'>
                <motion.img
                  width='800px'
                  height='400px'
                  layout='fixed'
                  priority='true'
                  src='/mainOffice 2.png'
                  alt='an image of an office'
                  transition={{ duration: 0.5 }}
                />
          </div>*/}
              <div className='container-content'>
                <Link href='/story'>
                  <h5 className='mb-0'>
                    {/*<u>{f("story.intro")}</u>*/}
                  </h5>
                </Link>
               { <span className='content'>{f("story.content")}</span>}

                {/* Services */}
                {/*!areServicesVisible ? (
                  <div
                    className='content-wrapper'
                    onClick={() => setAreServicesVisible(true)}
                  >
                    <h5>{f("services.intro")}</h5>
                    <span className='reveal-icon'>
                      <BsChevronDown className='reveal-icon' />
                    </span>
                  </div>
                ) : (
                  <div className='inline unwrapped-content'>
                    <hr />
                    <Link href='/services'>
                      <h5 style={{ cursor: "pointer" }}>{f("services.intro")}</h5>
                    </Link>
                    {f("services.content")}
                    <hr />
                  </div>
                )*/}
                <span className="servicesContent">{f("services.content")}</span>
                {/* Approach */}
                {/*!isApproachVisible ? (
                  <div
                    className='content-wrapper'
                    onClick={() => setIsApproachVisible(true)}
                  >
                    <h5>{f("approach.intro")}</h5>
                    <span className='reveal-icon'>
                      <BsChevronDown className='reveal-icon' />
                    </span>
                  </div>
                ) : (
                  <div className='inline unwrapped-content'>
                    {!areServicesVisible && <hr />}
                    <h5>{f("approach.intro")}</h5>
                    {f("approach.content")}
                    <hr />
                  </div>
                )*/}
                

                <span className="mt-1">{f("approach.content")}</span>

                {/* Projects */}
                {/*!areProjectsVisible ? (
                  <div
                    className='content-wrapper'
                    onClick={() => setAreProjectsVisible(true)}
                  >
                    <h5>{f("projects.intro")}</h5>
                    <span className='reveal-icon'>
                      <BsChevronDown className='reveal-icon' />
                    </span>
                  </div>
                ) : (
                  <div className='inline unwrapped-content'>
                    {!isApproachVisible && <hr />}
                    <h5>{f("projects.intro")}</h5>
                    {f("projects.content")}
                    <hr />
                  </div>
                )*/}
                {f("projects.content")}
                {/* Work */}
                {/*!isWorkVisible ? (
                  <div
                    className='content-wrapper'
                    onClick={() => setIsWorkVisible(true)}
                  >
                    <h5>{f("work.intro")}</h5>
                    <span className='reveal-icon'>
                      <BsChevronDown className='reveal-icon' />
                    </span>
                  </div>
                ) : (
                  <div className='inline unwrapped-content'>
                    {!areProjectsVisible && <hr />}
                    <h5>{f("work.intro")}</h5>
                    {f("work.content")}
                  </div>
                )*/}
                <span className="work">{f("work.content")}</span>
                {f("work.content2")}
              </div>
            </div>
          </div>
        </div>
        </motion.div>
        <Footer />
    </>
  );
}
