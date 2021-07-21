import React from "react";
import { useRouter } from "next/router";

import styles from "../styles/whitebox.module.scss";

export default function WhiteBox({ children, style, decoratorsPositions }) {
  const locale = useRouter().locale;
  const preferredMargin = locale === "ar" ? "right" : "left";

  const buildTiltedSquare = (options, name, index) => {

    const parseNumber = (num) => {
      const parsedNumber = num ? Number.parseInt(num) : 0
      return parsedNumber === 0 ? null : `${parsedNumber / 7.461}%`
    }
    
    const style = {
      marginTop: options.marginTop,
      marginBottom: options.marginBottom,
      [preferredMargin]: parseNumber(options.preferredMargin),
    };

    if (!style.marginTop) style.top = "-10px";
    if (!style[preferredMargin]) style[preferredMargin] = "-10px";

    return (
      <div
        key={`${name}${index}`}
        className={styles.tiltedSquare}
        style={style}
      >
        <img src="/Tilted Square.svg" height="18" width="18" priority="true" />
      </div>
    );
  };

  return (
    <div className={styles.whiteBox} style={style}>
      {decoratorsPositions.fromTop?.map((e, i) =>
        buildTiltedSquare(e, "fromTop", i)
      )}

      <div className={styles.content + " heading"}>{children}</div>

      {decoratorsPositions.fromBottom?.map((e, i) =>
        buildTiltedSquare(e, "fromBottom", i)
      )}
    </div>
  );
}
