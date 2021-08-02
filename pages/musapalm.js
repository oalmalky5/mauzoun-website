import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NextSeo } from 'next-seo';
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";
import styles from "../styles/mauj.module.scss";
import WhiteBox from "../components/WhiteBox";

const backgroundColor = "#fbec9a";


export default function musapalm({ textAnimationControls }) {

    const locale = useRouter().locale;

    const intl = useIntl();
    const f = (id, options) =>
      formatJsxMessage(intl, locale, id, {
        shouldFade: true,
        animationControls: textAnimationControls,
        ...options,
        
      });
      
  
    return (
      <>
        <NextSeo
          title={locale !== "ar" ? "Mauzoun | Portfolio | Musa & Palm" : "مَوْزوْن | أعمالنا | موسى و بالم"}
          description={locale !== "ar" ? "Mauzoun | Portfolio | Musa & Palm"   : "مَوْزوْن | أعمالنا| موسى و بالم "}
        />

        
</>
    )
}
