import React, { useState } from "react";
import { useIntl } from "react-intl";
import { BsChevronDown } from "react-icons/bs";

import styles from "../styles/services.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";

const backgroundColor = "#f7f5f0";

export default function services() {
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

      <div className="container" style={{ backgroundColor }}>
        <h1>{f("title")}</h1>

        {/* Approach */}
        {!isApproachVisible ? (
          <div
            className="wrapped-content"
            onClick={() => setIsApproachVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <h2>{f("approach.title")}</h2>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>
        ) : (
          <div className="unwrapped-content">
            <h2>{f("approach.title")}</h2>
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
          </div>
        )}

        {/* Content Writing */}
        {!isContentWritingVisible ? (
          <div
            className="wrapped-content"
            onClick={() => setIsContentWritingVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <h2>{f("contentWriting.title")}</h2>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>
        ) : (
          <div className="unwrapped-content">
            <h2>{f("contentWriting.title")}</h2>

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
          </div>
        )}

        {/* Creative Writing */}
        {!isCreativeWritingVisible ? (
          <div
            className="wrapped-content"
            onClick={() => setIsCreativeWritingVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <h2>{f("creativeWriting.title")}</h2>
            <span className="reveal-icon">
              <BsChevronDown className="reveal-icon" />
            </span>
          </div>
        ) : (
          <div className="unwrapped-content">
            <h2>{f("creativeWriting.title")}</h2>

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
          </div>
        )}
      </div>

      <ContactButton messageId="contactPrompt" />
    </div>
  );
}
