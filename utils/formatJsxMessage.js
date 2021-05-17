import JsxParser from "react-jsx-parser";
import Link from "next/link";
import { motion } from "framer-motion";

const formatJsxMessage = (intl, locale, id, options) => {
  if (!intl) return;
  if (!options) options = {};

  let message;
  if (Object.keys(intl.messages).includes(id)) {
    message = intl.formatMessage({ id });
  } else {
    message = "";
  }

  // Underline embedded links
  message = message.replace(
    /(<Link[^>]*>)/g,
    `$1<span style={{ fontFamily: '${
      locale === "en-US" ? "Alegreya" : "GE Dinar Two"
    }', fontWeight: 'bold', cursor: 'pointer' }}>`
  );
  message = message.replace(/(<\/Link[^>]*>)/g, "</span>$1");

  const variants = {
    slowVisible: {
      opacity: 1,
      transition: { delay: 0, duration: 0, ease: "circIn" },
    },
    visible: { opacity: 1, transition: { delay: 0, duration: 0 } },
    instantlyVisible: { opacity: 1, transition: { duration: 0 } },
    hidden: { opacity: 1, transition: { delay: 0, duration: 0 } },
  };

  let content = (
    <JsxParser
      renderInWrapper={false}
      components={{ Link }}
      jsx={`<span>${message}</span>`}
    />
  );

  return (
    <p
    // animate={
    //   options.shouldFade ? options.animationControls : "instantlyVisible"
    // }
    // variants={variants}
    // style={options.style}
    >
      {content}
    </p>
  );
};

export default formatJsxMessage;
