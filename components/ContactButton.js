import React, { useState, useEffect} from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

import styles from "../styles/contact.module.scss";
import Contact from "../components/Contact";
import formatJsxMessage from "../utils/formatJsxMessage";
import { motion } from "framer-motion";
import useWidth from '../utils/useWidth'

export default function ContactButton({
  messageId = "contactPrompt",
  backgroundColor = "#ffffff",
  isNavOpen,
  history
}) {
  const {oneVW} = useWidth()
  const {locale} = useRouter();

  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, locale, id, options);
  const [circleParams, setCircleParams] = useState({cx: null, cy: null, r: null})
  const [isHovered, setIsHovered] = useState(false);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);
  const [isWithAnimation, setIsWithAnimation] = useState(true)

  useEffect(()=>{
    const maxSize = 210;
    const minSize = 150;
    let currentSize; 
    if (20 * oneVW >= maxSize){
      currentSize = maxSize;
    } else if (20 * oneVW <= minSize){
      currentSize = minSize;
    } else {
      currentSize = 20 * oneVW
    }
    
    setCircleParams({cx: currentSize / 2, cy: currentSize / 2, r: currentSize / 2 - 2})
  }, [oneVW])

  useEffect(()=>{
    if ( history && history[history?.length - 2] === '/'){
      return setIsWithAnimation(true)
    } else {
      setIsWithAnimation(false)
    }
  }, [history])

  if (isNavOpen) return null;
  
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.buttonSpacer} />
        <div className={styles.buttonContainer}>
          <div className = {styles.contactWrapper}>

          <motion.button
            className={`${styles.contactButton} ${styles.spin}` + " heading"}
            onClick={() => {
              setIsHovered(false);
              // setIsContactFormVisible(true);
            }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: isHovered ? "#f8d952" : "#ffffff" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            layout='position'
          >
            <div className = {styles.circleContainer}>
              <a href="mailto:hello@mauzoun.com">
                <svg height="100%" width="100%">
                    <circle className={isWithAnimation ? styles.circleAnimation : ''} cx={circleParams.cx} cy={circleParams.cy} r={circleParams.r} stroke="#231f20" stroke-width="4" fill-opacity="0" />
                </svg>
              </a>
          </div>
            <span className = "contact-button">
            {isHovered ? f(messageId + ".hovered") : f(messageId)}
            </span>
          </motion.button>
          </div>
        </div>
      </div>

      <Contact
        isOpen={isContactFormVisible}
        onClose={() => setIsContactFormVisible(false)}
      />
    </>
  );
}
