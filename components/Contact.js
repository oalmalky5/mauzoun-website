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
      <form
        name="Contact Form"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={() => "Form submitted"}
        style={{
          fontFamily: locale === "en-US" ? "Alegreya Sans" : "GE Dinar One",
        }}
      >
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <input type="hidden" name="form-name" value="Contact Form" />

        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          autoFocus={true}
          placeholder={f("contact.fullName")}
        />

        {/* Project Name */}
        <input
          type="text"
          name="projectName"
          placeholder={f("contact.projectName")}
        />

        {/* Country */}
        <select name="country">
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
        />

        {/* Date */}
        <input type="date" name="date" min={moment().format("YYYY-MM-DD")} />

        {/* Time */}
        <input type="time" name="time" placeholder={f("contact.time")} />

        <button type="submit">{f("contact.submit")}</button>
      </form>

      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
    </Modal>
  );
}
