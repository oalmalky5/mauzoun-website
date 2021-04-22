import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ComingSoon from "../components/ComingSoon";

const backgroundColor = "#f7f5f0";

export default function blog() {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, locale, id, options);

  return (
    <div>
      <Menu backgroundColor={backgroundColor} />

      <motion.div
        className="container"
        style={{ backgroundColor }}
        layout="position"
      >
        <h1>{f("title")}</h1>

        <ComingSoon />
      </motion.div>
    </div>
  );
}
