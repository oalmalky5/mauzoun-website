import React from "react";
import { useIntl } from "react-intl";
import Modal from "react-modal";
import { NetlifyForm, Honeypot } from "react-netlify-forms";

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
      <img src="/Services.png"></img>

      <NetlifyForm
        name="Contact"
        action="/home"
        honeypotName="bot-field"
        onFailure={(e) => console.log(e)}
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />
            {success && f("contact.success")}
            {error && f("contact.failure")}

            <input type="hidden" name="form-name" value="Contact" />
            <input
              type="text"
              name="name"
              placeholder={f("contact.name")}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder={f("contact.phone")}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder={f("contact.subject")}
              onChange={handleChange}
            />
            <input
              type="text"
              name="date"
              placeholder={f("contact.date")}
              onChange={handleChange}
            />
            <input
              type="text"
              name="time"
              placeholder={f("contact.time")}
              onChange={handleChange}
            />

            <button type="submit">{f("contact.submit")}</button>
          </>
        )}
      </NetlifyForm>

      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
    </Modal>
  );
}
