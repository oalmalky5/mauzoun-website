import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

import styles from "../styles/contact.module.scss";
import Contact from "../components/Contact";
import formatJsxMessage from "../utils/formatJsxMessage";
import { motion } from "framer-motion";

export default function ContactButton({
  messageId = "contactPrompt",
  backgroundColor = "#ffffff",
}) {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, locale, id, options);

  const [isHovered, setIsHovered] = useState(false);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.buttonSpacer} />
        <div className={styles.buttonContainer}>
          <motion.button
            className={styles.contactButton + " heading"}
            onClick={() => {
              setIsHovered(false);
              setIsContactFormVisible(true);
            }}
            style={{ backgroundColor: isHovered ? "#f8d952" : "#ffffff" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            layout="position"
          >
            {isHovered ? f(messageId + ".hovered") : f(messageId)}
          </motion.button>
        </div>
      </div>

      <Contact
        isOpen={isContactFormVisible}
        onClose={() => setIsContactFormVisible(false)}
      />
    </>
  );
}
