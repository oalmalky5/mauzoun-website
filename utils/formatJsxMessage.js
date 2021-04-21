import JsxParser from "react-jsx-parser";
import Link from "next/link";

const formatJsxMessage = (intl, id, options) => {
  if (!intl) return;
  if (!options) options = {};

  let message = intl.formatMessage({ id });

  // Underline embedded links
  message = message.replace(
    /(<Link[^>]*>)/g,
    "$1<span style={{ fontFamily: 'Alegreya', fontWeight: 'bold', cursor: 'pointer' }}>"
  );
  message = message.replace(/(<\/Link[^>]*>)/g, "</span>$1");

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
