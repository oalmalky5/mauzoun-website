import React from "react";

import styles from "../styles/whitebox.module.scss";

export default function WhiteBox({ children }) {
  const buildTiltedSquare = (options) => {
    const additionalStyles = {
      marginTop: "-10px",
      marginLeft: "-10px",
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
      {buildTiltedSquare({ styles: { marginLeft: "650px" } })}
      {buildTiltedSquare({ styles: { marginLeft: "670px" } })}

      <div className={styles.content}>{children}</div>

      {buildTiltedSquare({ styles: { marginLeft: "550px" } })}
      {buildTiltedSquare({ styles: { marginLeft: "570px" } })}
      {buildTiltedSquare({ styles: { marginLeft: "590px" } })}
    </div>
  );
}
