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

Modal.setAppElement(".container");

export default function Contact({ isOpen, onClose }) {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id) => intl.formatMessage({ id });

  const dateRef = React.createRef();
  const timeRef = React.createRef();

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
      <NetlifyForm
        name="Contact"
        action="/home"
        honeypotName="bot-field"
        onFailure={(e) => console.log(e)}
        formProps={{
          style: {
            fontFamily: locale === "en-US" ? "Alegreya Sans" : "GE Dinar One",
          },
        }}
      >
        {({ handleChange, success, error }) => (
          <>
            <Honeypot />

            {success && f("contact.success")}
            {error && f("contact.failure")}

            <input type="hidden" name="form-name" value="Contact" />

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
