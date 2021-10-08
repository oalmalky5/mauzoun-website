import React from "react";
import { useIntl } from "react-intl";
import Modal from "react-modal";
import { NetlifyForm, Honeypot } from "react-netlify-forms";
import { useRouter } from "next/router";
import moment from "moment";
import { BsChevronDown } from "react-icons/bs";

var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
countries.registerLocale(require("i18n-iso-countries/langs/ar.json"));

import styles from "../styles/contact.module.scss";

export default function Contact({ isOpen, onClose }) {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id) => intl.formatMessage({ id });

  const placeholderColor = "rgba(0, 0, 0, 1)";

  const updateInputColor = (e) => {
    if (!e.target.value.length) {
      e.target.style.color = placeholderColor;
    } else {
      e.target.style.color = "rgba(0, 0, 0, 1)";
    }
  };

  const closeButton = (
    <button
      className={styles.closeButton}
      onClick={onClose}
      style={{ transform: locale === "en-US" ? "scaleX(-1)" : "" }}
    >
      <img src="/Tilted Square.svg" height="25" width="25" priority="true" />
    </button>
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      ariaHideApp={false}
      style={{
        overlay: {
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {locale === "ar" && closeButton}

      <NetlifyForm
        name="Contact Form"
        action="/home"
        honeypotName="bot-field"
        formProps={{
          style: {
            direction: locale === "ar" ? "rtl" : "ltr",
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
            <div>
              <select
                name="country"
                onChange={(e) => {
                  updateInputColor(e);
                  handleChange(e);
                }}
                style={{
                  color: placeholderColor,
                  appearance: "none",
                }}
              >
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
              <BsChevronDown
                size="12px"
                style={{
                  position: "absolute",
                  marginTop: "20px",
                  marginLeft: locale === "en-US" ? "-23px" : "0px",
                  marginRight: locale === "ar" ? "-23px" : "0px",
                  strokeWidth: "1.3px",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Subject */}
            <textarea
              type="text"
              name="subject"
              rows="2"
              placeholder={f("contact.subject")}
              onChange={handleChange}
              style={{ resize: "none" }}
            />

            {/* Date Time */}
            <input
              type="datetime-local"
              name="dateTime"
              placeholder={f("contact.date")}
              min={moment().format("YYYY-MM-DD hh:mm:ss")}
              onChange={(e) => {
                updateInputColor(e);
                handleChange(e);
              }}
              style={{
                color: placeholderColor,
              }}
            />

            {/* Time */}
            {/* <input
              type="text"
              name="time"
              placeholder={f("contact.time")}
              onChange={(e) => {
                updateInputColor(e);
                handleChange(e);
              }}
              style={{
                color: placeholderColor,
              }}
            /> */}

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

            <button
              type="submit"
              style={{
                fontFamily: locale === "en-US" ? "Alegreya" : "GE Dinar Two",
                fontWeight: 500,
              }}
            >
              {f("contact.submit")}
            </button>
          </>
        )}
      </NetlifyForm>

      {locale === "en-US" && closeButton}
    </Modal>
  );
}
