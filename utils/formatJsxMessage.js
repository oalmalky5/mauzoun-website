import JsxParser from "react-jsx-parser";
import Link from "next/link";

const formatJsxMessage = (intl, locale, id, styles) => {
  if (!intl) return;

  if (locale == "ar") {
    styles = { textAlign: "right", ...styles };
  }

  let message = intl.formatMessage({ id });

  // Underline embedded links
  message = message.replace(
    /(<Link[^>]*>)/g,
    "$1<span style={{ textDecoration: 'underline', cursor: 'pointer' }}>"
  );
  message = message.replace(/(<\/Link[^>]*>)/g, "</span>$1");

  return (
    <div style={styles}>
      <JsxParser components={{ Link }} jsx={`<p>${message}</p>`} />
    </div>
  );
};

export default formatJsxMessage;
