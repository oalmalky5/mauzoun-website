import React from "react";
import { useRouter } from "next/router";

import styles from "../styles/whitebox.module.scss";

export default function WhiteBox({ children }) {
  const locale = useRouter().locale;
  const preferredMargin = locale === "ar" ? "marginRight" : "marginLeft";

  const buildTiltedSquare = (options) => {
    const additionalStyles = {
      marginTop: "-10px",
      [preferredMargin]: "-10px",
      ...(options?.styles ? options.styles : {}),
    };

    return (
      <object
        data="/Tilted Square.svg"
        className={styles.tiltedSquare}
        style={additionalStyles}
      />
    );
  };

  return (
    <div className={styles.whiteBox}>
      {buildTiltedSquare()}
      {buildTiltedSquare({ styles: { [preferredMargin]: "650px" } })}
      {buildTiltedSquare({ styles: { [preferredMargin]: "670px" } })}

      <div className={styles.content}>{children}</div>

      {buildTiltedSquare({ styles: { [preferredMargin]: "550px" } })}
      {buildTiltedSquare({ styles: { [preferredMargin]: "570px" } })}
      {buildTiltedSquare({ styles: { [preferredMargin]: "590px" } })}
    </div>
  );
}
