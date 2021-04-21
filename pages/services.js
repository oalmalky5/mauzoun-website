import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import styles from "../styles/services.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";
import WhiteBox from "../components/WhiteBox";

const backgroundColor = "#f7f5f0";

const whiteBoxDecoratorsPositions = {
  fromTop: [
    {},
    {
      preferredMargin: "650px",
    },
    {
      preferredMargin: "667px",
    },
  ],
  fromBottom: [
    {
      preferredMargin: "550px",
    },
    {
      preferredMargin: "567px",
    },
    {
      preferredMargin: "584px",
    },
  ],
};

export default function services() {
  const router = useRouter();

  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, router.locale, id, options);

  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [isContentWritingVisible, setIsContentWritingVisible] = useState(false);
  const [isCreativeWritingVisible, setIsCreativeWritingVisible] = useState(
    false
  );

  const bullet = (
    <div className={styles.bullet}>
      <object data="/Tilted Square.svg" className={styles.tiltedSquare} />
      <svg width="40" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10 L40 10" stroke="black" stroke-width="2" />
      </svg>
    </div>
  );

  return (
    <div>
      <Menu backgroundColor={backgroundColor} />

      <motion.div
        className="container"
        style={{ backgroundColor }}
        layout="position"
      >
        <h1 className="mb-0">{f("title")}</h1>

        {/* Approach */}
        <div className="mt-0 unwrapped-content">
          <div
            className="content-wrapper"
            onClick={() => setIsApproachVisible(!isApproachVisible)}
          >
            <h2>{f("approach.title")}</h2>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>

          {isApproachVisible && (
            <div>
              <h3>{f("approach.header")}</h3>
              {[
                "approach.contact",
                "approach.briefForm",
                "approach.quotation",
                "approach.timeline",
                "approach.research",
                "approach.writing",
                "approach.delivery",
                "approach.feedback",
                "approach.adaptTimeline",
                "approach.finished",
              ].map((e) => (
                <div className="content-block" key={e}>
                  <b>{f(`${e}.header`)}</b>
                  {intl.formatMessage({ id: `${e}.content` }) !==
                    `${e}.content` && f(`${e}.content`)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Writing */}
        <div className="mt-0 unwrapped-content">
          <div
            className="content-wrapper"
            onClick={() => setIsContentWritingVisible(!isContentWritingVisible)}
            style={isContentWritingVisible ? { marginBottom: "30px" } : {}}
          >
            <h2>{f("contentWriting.title")}</h2>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>

          {isContentWritingVisible && (
            <>
              {f("contentWriting.content")}

              <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                {f("contentWriting.services.header")}
                <br />
                {[
                  "contentWriting.services.naming",
                  "contentWriting.services.manifesto",
                  "contentWriting.services.slogans",
                  "contentWriting.services.profile",
                  "contentWriting.services.website",
                  "contentWriting.services.socialMedia",
                ].map((e) => (
                  <div className={styles.service} key={e}>
                    {bullet}
                    {f(e)}
                  </div>
                ))}
              </WhiteBox>
            </>
          )}
        </div>

        {/* Creative Writing */}
        <div className="mt-0 unwrapped-content">
          <div
            className="content-wrapper"
            onClick={() =>
              setIsCreativeWritingVisible(!isCreativeWritingVisible)
            }
            style={isCreativeWritingVisible ? { marginBottom: "30px" } : {}}
          >
            <h2>{f("creativeWriting.title")}</h2>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>

          {isCreativeWritingVisible && (
            <>
              {f("creativeWriting.content")}

              <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                {f("creativeWriting.services.header")}
                <br />
                {[
                  "creativeWriting.services.storyDoctoring",
                  "creativeWriting.services.scriptwriting",
                  "creativeWriting.services.bookEditing",
                  "creativeWriting.services.bookTranslation",
                ].map((e) => (
                  <div className={styles.service} key={e}>
                    {bullet}
                    {f(e)}
                  </div>
                ))}
              </WhiteBox>
            </>
          )}
        </div>

        <div style={{ height: "400px" }} />

        <div className={styles.servicesCover}>
          <img
            src="/Services.png"
            height="437px"
            width="400px"
            layout="fixed"
            priority="true"
            style={router.locale === "ar" ? { transform: "scaleX(-1)" } : {}}
          />
        </div>
      </motion.div>

      <ContactButton backgroundColor="#f8d952" />
    </div>
  );
}
