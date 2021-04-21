import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/whitebox.module.scss";

export default function WhiteBox({ children, style }) {
  const locale = useRouter().locale;
  const preferredMargin = locale === "ar" ? "marginRight" : "marginLeft";

  const buildTiltedSquare = (options) => {
    const additionalStyles = {
      marginTop: "-10px",
      [preferredMargin]: "-10px",
      ...(options?.styles ? options.styles : {}),
    };

    return (
      <div className={styles.tiltedSquare} style={additionalStyles}>
        <Image
          src="/Tilted Square.svg"
          height="20"
          width="20"
          priority="true"
        />
      </div>
    );
  };

  return (
    <div className={styles.whiteBox} style={style}>
      {buildTiltedSquare()}
      {buildTiltedSquare({ styles: { [preferredMargin]: "650px" } })}
      {buildTiltedSquare({ styles: { [preferredMargin]: "670px" } })}

      <div className={styles.content + " heading"}>{children}</div>

      {buildTiltedSquare({ styles: { [preferredMargin]: "550px" } })}
      {buildTiltedSquare({ styles: { [preferredMargin]: "570px" } })}
      {buildTiltedSquare({ styles: { [preferredMargin]: "590px" } })}
    </div>
  );
}
