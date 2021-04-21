import React, { useState } from "react";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";

import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ComingSoon from "../components/ComingSoon";

const backgroundColor = "#f7f5f0";

export default function blog() {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  return (
    <div>
      <Menu backgroundColor={backgroundColor} />

      <motion.div
        className="container"
        style={{ backgroundColor }}
        layout="position"
      >
        <h1 className="mb-0">{f("title")}</h1>

        {/* Authors */}
        <div className="mt-0">
          <h2>{f("authors.title")}</h2>
          <ComingSoon />
        </div>
      </motion.div>
    </div>
  );
}
