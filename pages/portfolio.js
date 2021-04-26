import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import styles from "../styles/portfolio.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import WhiteBox from "../components/WhiteBox";
import ContactButton from "../components/ContactButton";

const backgroundColor = "#fbec9a";

const clientLogos = [
  "/clientLogos/Saudi Tourism Authority.png",
  "/clientLogos/Musa Palm.png",
  "/clientLogos/Ministry of Culture.png",
  "/clientLogos/Mauj.png",
];

const whiteBoxDecoratorsPositions = {
  fromTop: [
    { marginTop: "70px" },
    {
      preferredMargin: "450px",
    },
    {
      preferredMargin: "467px",
    },
    {
      preferredMargin: "484px",
    },
    {
      preferredMargin: "501px",
    },
    {
      marginTop: "45px",
      preferredMargin: "735px",
    },
    {
      marginTop: "62px",
      preferredMargin: "735px",
    },
  ],
};

export default function portfolio({ textAnimationControls }) {
  const locale = useRouter().locale;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  const getClients = (category) => {
    let i = 1;
    let numberOfClients = Object.keys(intl.messages).filter((e) =>
      e.startsWith(`${category}.clients.`)
    ).length;
    let clients = [];

    while (i < numberOfClients + 1) {
      clients.push(
        <span
          key={`${category}.clients.${i}`}
          className={styles.client + " heading"}
          style={{
            fontWeight:
              numberOfClients !== 1 && i % 2 !== 0 ? "bold" : "normal",
          }}
        >
          {f(`${category}.clients.${i}`)}
        </span>
      );
      i += 1;
    }
    return clients;
  };

  const preferredSide = locale === "ar" ? "right" : "left";
  const oppositeSide = locale === "ar" ? "left" : "right";

  return (
    <div>
      <Menu
        backgroundColor={backgroundColor}
        textAnimationControls={textAnimationControls}
      />

      <motion.div
        className="container"
        style={{ backgroundColor }}
        layout="position"
      >
        <h1>{f("title")}</h1>

        <h2>{f("subtitle")}</h2>

        <span style={{ marginBottom: "50px" }}>{f("content")}</span>

        {/* Content Writing */}
        <h3 className={styles.clientCategory}>{f("contentWriting.title")}</h3>
        {getClients("contentWriting")}

        <hr className="big-margin" size={1} color="black" />

        {/* Creative Writing */}
        <h3 className={styles.clientCategory}>{f("creativeWriting.title")}</h3>
        {getClients("creativeWriting")}

        <WhiteBox
          style={{ marginTop: "50px" }}
          decoratorsPositions={whiteBoxDecoratorsPositions}
        >
          {f("clients")}

          <div className={styles.carousel}>
            <Carousel
              dynamicHeight={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              renderArrowPrev={(clickHandler, hasPrev) =>
                hasPrev && (
                  <div
                    className={styles.arrowContainer}
                    style={{ [preferredSide]: 0 }}
                    onClick={clickHandler}
                  >
                    <div
                      className={styles.arrow}
                      style={{ [preferredSide]: 0 }}
                    >
                      <BsChevronLeft className={styles.chevron} />
                    </div>
                  </div>
                )
              }
              renderArrowNext={(clickHandler, hasNext) =>
                hasNext && (
                  <div
                    className={styles.arrowContainer}
                    style={{ [oppositeSide]: 0 }}
                    onClick={clickHandler}
                  >
                    <div className={styles.arrow} style={{ [oppositeSide]: 0 }}>
                      <BsChevronRight className={styles.chevron} />
                    </div>
                  </div>
                )
              }
            >
              <img src="/Companies.png" priority="true" />
              <img src="/Companies.png" priority="true" />
            </Carousel>
          </div>
        </WhiteBox>
      </motion.div>

      <ContactButton />
    </div>
  );
}
