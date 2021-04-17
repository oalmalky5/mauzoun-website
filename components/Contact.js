import React from "react";
import { useIntl } from "react-intl";
import Modal from "react-modal";

import styles from "../styles/contact.module.scss";

export default function Contact({ isOpen, onClose }) {
  const intl = useIntl();
  const f = (id) => intl.formatMessage({ id });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      style={{
        overlay: {
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <form name="contact" netlify>
        <input type="text" name="name" placeholder={f("contact.name")} />
        <input type="text" name="phone" placeholder={f("contact.phone")} />
        <input type="text" name="subject" placeholder={f("contact.subject")} />
        <input type="text" name="date" placeholder={f("contact.date")} />
        <input type="text" name="time" placeholder={f("contact.time")} />

        <button type="submit">{f("contact.submit")}</button>
      </form>

      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
    </Modal>
  );
}
