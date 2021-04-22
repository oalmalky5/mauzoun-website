import React from "react";
import { useIntl } from "react-intl";
import Modal from "react-modal";
import { NetlifyForm, Honeypot } from "react-netlify-forms";
import { useRouter } from "next/router";
import moment from "moment";

var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
countries.registerLocale(require("i18n-iso-countries/langs/ar.json"));

import styles from "../styles/contact.module.scss";

export default function Contact({ isOpen, onClose }) {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id) => intl.formatMessage({ id });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      ariaHideApp={false}
      style={{
        overlay: {
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <NetlifyForm
        name="Contact Form"
        action="/home"
        honeypotName="bot-field"
        formProps={{
          style: {
            fontSize: "20px",
            fontFamily: locale === "en-US" ? "Alegreya Sans" : "GE Dinar One",
          },
        }}
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />

            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              autoFocus={true}
              placeholder={f("contact.fullName")}
              onChange={handleChange}
            />

            {/* Project Name */}
            <input
              type="text"
              name="projectName"
              placeholder={f("contact.projectName")}
              onChange={handleChange}
            />

            {/* Country */}
            <select name="country" onChange={handleChange}>
              <option value="">{f("contact.country")}</option>
              {Object.values(
                countries.getNames(locale === "en-US" ? "en" : locale, {
                  select: "official",
                })
              ).map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>

            {/* Subject */}
            <textarea
              type="text"
              name="subject"
              rows="4"
              placeholder={f("contact.subject")}
              onChange={handleChange}
            />

            {/* Date */}
            <input
              type="date"
              name="date"
              min={moment().format("YYYY-MM-DD")}
              onChange={handleChange}
            />

            {/* Time */}
            <input
              type="time"
              name="time"
              placeholder={f("contact.time")}
              onChange={handleChange}
            />

            {success || error ? (
              <div
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  fontSize: "inherit",
                  fontFamily: "inherit",
                }}
              >
                {success && f("contact.success")}
                {error && f("contact.failure")}
              </div>
            ) : null}

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
