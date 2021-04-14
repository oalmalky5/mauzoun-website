import JsxParser from "react-jsx-parser";
import Link from "next/link";

const formatJsxMessage = (intl, locale, id, options) => {
  if (!intl) return;

  let message = intl.formatMessage({ id });

  // Underline embedded links
  message = message.replace(
    /(<Link[^>]*>)/g,
    "$1<span style={{ textDecoration: 'underline', cursor: 'pointer' }}>"
  );
  message = message.replace(/(<\/Link[^>]*>)/g, "</span>$1");

  if (!options) options = {};
  if (locale == "ar") {
    options.style = { textAlign: "right", ...options.style };
  }

  return (
    <span style={options.style}>
      <JsxParser
        renderInWrapper={false}
        components={{ Link }}
        jsx={`<p>${message}</p>`}
      />
    </span>
  );
};

export default formatJsxMessage;
