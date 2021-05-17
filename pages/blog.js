import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ComingSoon from "../components/ComingSoon";
import ContactButton from "../components/ContactButton";

const backgroundColor = "#f7f5f0";

export default function blog({ textAnimationControls }) {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        // overflowY: "scroll",
      }}
    >
      <div
        className='test-blog'
        style={{
          backgroundColor: backgroundColor,
          width: "72%",
          height: "150vh",
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      <div
        className='bg-animation-blog'
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 10,
        }}
      >
        <Menu
          backgroundColor={backgroundColor}
          textAnimationControls={textAnimationControls}
        />

        <div
          className='container'
          style={{ backgroundColor }}
          // layout="position"
        >
          <h1>{f("title")}</h1>

          <ComingSoon />
        </div>

        {/* <ContactButton /> */}
      </div>
    </div>
  );
}
