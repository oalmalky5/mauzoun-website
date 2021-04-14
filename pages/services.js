import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

import styles from "../styles/services.module.scss";
import Menu from "../components/Menu";
import { useIntl } from "react-intl";
import formatJsxMessage from "../utils/formatJsxMessage";

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
      <Menu backgroundColor="#f7f5f0" />

      <div className={styles.main}>
        <div className={styles.title}>{f("title")}</div>

        {!isApproachVisible ? (
          <div
            className={styles.wrappedContent}
            onClick={() => setIsApproachVisible(true)}
            style={{ cursor: "pointer" }}
          >
            {f("approach.title")}
            <span className={styles.revealIcon}>
              <BsChevronDown className={styles.revealIcon} />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            <span className={styles.contentTitle}>{f("approach.title")}</span>
            <div>
              <div className={styles.header}>{f("approach.header")}</div>
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
                <div key={e}>
                  <div className={styles.contentHeader}>{f(`${e}.header`)}</div>
                  {intl.formatMessage({ id: `${e}.content` }) !==
                    `${e}.content` && (
                    <div className={styles.content}>{f(`${e}.content`)}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {!isContentWritingVisible ? (
          <div
            className={styles.wrappedContent}
            onClick={() => setIsContentWritingVisible(true)}
            style={{ cursor: "pointer" }}
          >
            {f("contentWriting.title")}
            <span className={styles.revealIcon}>
              <BsChevronDown className={styles.revealIcon} />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            <span className={styles.contentTitle}>
              {f("contentWriting.title")}
            </span>

            <div className={styles.content}>{f("contentWriting.content")}</div>

            <div className={styles.serviceListBox}>
              <div className={styles.header}>
                {f("contentWriting.services.header")}
              </div>

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
                  <span className={styles.serviceName}>{f(e)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isCreativeWritingVisible ? (
          <div
            className={styles.wrappedContent}
            onClick={() => setIsCreativeWritingVisible(true)}
            style={{ cursor: "pointer" }}
          >
            {f("creativeWriting.title")}
            <span className={styles.revealIcon}>
              <BsChevronDown className={styles.revealIcon} />
            </span>
          </div>
        ) : (
          <div className={styles.unwrappedContent}>
            <span className={styles.contentTitle}>
              {f("creativeWriting.title")}
            </span>

            <div className={styles.content}>{f("creativeWriting.content")}</div>

            <div className={styles.serviceListBox}>
              <div className={styles.header}>
                {f("creativeWriting.services.header")}
              </div>

              {[
                "creativeWriting.services.storyDoctoring",
                "creativeWriting.services.scriptwriting",
                "creativeWriting.services.bookEditing",
                "creativeWriting.services.bookTranslation",
              ].map((e) => (
                <div className={styles.service} key={e}>
                  ____
                  <span className={styles.serviceName}>{f(e)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
