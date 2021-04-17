import React from "react";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";

import styles from "../styles/portfolio.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";

const backgroundColor = "#fbec9a";

export default function portfolio() {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const getClients = (category) => {
    let i = 1;
    let numberOfClients = Object.keys(intl.messages).filter((e) =>
      e.startsWith(`${category}.clients.`)
    ).length;
    let clients = [];

    while (i < numberOfClients + 1) {
      clients.push(
        <span className={styles.client} key={`${category}.clients.${i}`}>
          {i % 2 === 0 ? (
            f(`${category}.clients.${i}`)
          ) : (
            <b>{f(`${category}.clients.${i}`)}</b>
          )}
        </span>
      );
      i += 1;
    }
    return clients;
  };

  return (
    <div>
      <Menu backgroundColor={backgroundColor} />

      <motion.div className="container" style={{ backgroundColor }} layout>
        <h1>{f("title")}</h1>

        <h2>{f("subtitle")}</h2>

        {f("content")}

        {/* Content Writing */}
        <h3 className={styles.clientCategory}>{f("contentWriting.title")}</h3>
        {getClients("contentWriting")}

        <hr className="big-margin" size={1} color="black" />

        {/* Creative Writing */}
        <h3 className={styles.clientCategory}>{f("creativeWriting.title")}</h3>
        {getClients("creativeWriting")}

        <div className="whitebox">
          <div className={styles.logoGrid}>
            <div className={styles.clients}>{f("clients")}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
