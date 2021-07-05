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
import styles from "../styles/landingPage.module.scss";
// import Kashida from "../components/kashida";


const backgroundColor = "#f8d952";

export default function Home({ updatePageTransition, textAnimationControls }) {
  const locale = useRouter().locale;

  // initial={{ left: '-5500px' }}
  // animate={{ left: 0 }}
  let initial = { left: '-5500px' }
  let animateKashidaOut = {
    right: '-5000px'
  }
  // animate={{ right: 0 }}
  if (locale == 'ar') {
    initial = { right: '-5500px' }
    animateKashidaOut = {
      left: '-5000px'
    }
  }

  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, locale, id, {
    shouldFade: true,
    animationControls: textAnimationControls,
    ...options,
  })


  const [areServicesVisible, setAreServicesVisible] = useState(false);
  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [areProjectsVisible, setAreProjectsVisible] = useState(false);
  const [isWorkVisible, setIsWorkVisible] = useState(false);

  React.useEffect(() => updatePageTransition("default"), []);
  return (
    <>
      <NextSeo
        title={locale !== "ar" ? "Mauzoun | Home" : "مَوْزوْن | البداية"}
        description={f("pageTitle")}
      />
      <div
        style={{
          // position: "fixed",
          // display: "flex",
          // alignItems: "stretch",
          // width: "100%",
          // height: "100%",
          // overflowX: "hidden",
          // // overflowY: "scroll",
        }}
      >

        <motion.div
          layoutId="transitionLayout"
          transition={{
            duration: 0.6
          }}
          style={{
            position: 'fixed',
            backgroundColor: '#f8d952',
            width: '430px',
            height: "100%",
            zIndex: -1,
          }} />
        {/* <div
        className='test-home'
        style={{
          backgroundColor: backgroundColor,
          width: "72%",
          height: "150vh",
          position: "absolute",
          zIndex: -1,
        }}
      ></div> */}

        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}>
          <Menu
            backgroundColor={backgroundColor}
            textAnimationControls={textAnimationControls}
          />
        </motion.div>
        <motion.div
          layoutId='backgroundLayout'
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='container' style={{
              backgroundColor,
            }}>
            <h1>{f("title")}</h1>
            {f("summary")}
            <img
              width='800px'
              height='400px'
              layout='fixed'
              priority='true'
              src='/team/website-photo-01.png'
              alt='an image of an office'
            />

            <Link href='/story'>
              <h5 className='mb-0'>
                <u>{f("story.intro")}</u>
              </h5>
            </Link>
            <span className='mt-0'>{f("story.content")}</span>

            {/* Services */}
            {!areServicesVisible ? (
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
            )}

            {/* Approach */}
            {!isApproachVisible ? (
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
            )}

            {/* Projects */}
            {!areProjectsVisible ? (
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
            )}

            {/* Work */}
            {!isWorkVisible ? (
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
            )}
          </motion.div>
          <ContactButton />
        </motion.div>
      </div>
    </>
  );
}
