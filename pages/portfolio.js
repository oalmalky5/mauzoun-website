import React from "react";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../styles/portfolio.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import WhiteBox from "../components/WhiteBox";
import ContactButton from "../components/ContactButton";

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

        <WhiteBox>
          <div className={styles.logoGrid}>
            <div>{f("clients")}</div>
            <div className={styles.companies}>
              <Image
                src="/Companies.png"
                height="624"
                width="598"
                priority="true"
              />
            </div>
          </div>
        </WhiteBox>
      </motion.div>

      <ContactButton />
    </div>
  );
}
