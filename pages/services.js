import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import styles from "../styles/services.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";

const backgroundColor = "#f7f5f0";

export default function services() {
  const router = useRouter();

  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [isContentWritingVisible, setIsContentWritingVisible] = useState(false);
  const [isCreativeWritingVisible, setIsCreativeWritingVisible] = useState(
    false
  );

  return (
    <div>
      <Menu backgroundColor={backgroundColor} />

      <motion.div className="container" style={{ backgroundColor }} layout>
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

              <div className="whitebox">
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
                    ____
                    {f(e)}
                  </div>
                ))}
              </div>
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

              <div className="whitebox">
                {f("creativeWriting.services.header")}
                <br />
                {[
                  "creativeWriting.services.storyDoctoring",
                  "creativeWriting.services.scriptwriting",
                  "creativeWriting.services.bookEditing",
                  "creativeWriting.services.bookTranslation",
                ].map((e) => (
                  <div className={styles.service} key={e}>
                    ____
                    {f(e)}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <img
          src="/Services.png"
          className={styles.servicesCover}
          style={router.locale === "ar" ? { transform: "scaleX(-1)" } : {}}
        />
        <div style={{ height: "350px" }} />
      </motion.div>

      <ContactButton messageId="contactPrompt" backgroundColor="#f8d952" />
    </div>
  );
}
