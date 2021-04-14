import React, { useState } from "react";
import { useIntl } from "react-intl";

import styles from "../styles/contact.module.scss";
import Contact from "../components/Contact";
import formatJsxMessage from "../utils/formatJsxMessage";

export default function ContactButton({ messageId }) {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  return (
    <>
      <button
        className={styles.contactButton}
        onClick={() => setIsContactFormVisible(true)}
      >
        {f(messageId)}
      </button>

      <Contact
        isOpen={isContactFormVisible}
        onClose={() => setIsContactFormVisible(false)}
      />
    </>
  );
}
