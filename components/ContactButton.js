import React, { useState } from "react";
import { useIntl } from "react-intl";

import styles from "../styles/contact.module.scss";
import Contact from "../components/Contact";
import formatJsxMessage from "../utils/formatJsxMessage";
import { motion } from "framer-motion";

export default function ContactButton({ messageId, backgroundColor }) {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  return (
    <>
      <motion.button
        className={styles.contactButton}
        onClick={() => setIsContactFormVisible(true)}
        style={{ backgroundColor }}
        layout
      >
        {f(messageId)}
      </motion.button>

      <Contact
        isOpen={isContactFormVisible}
        onClose={() => setIsContactFormVisible(false)}
      />
    </>
  );
}
