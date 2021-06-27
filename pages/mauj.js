import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NextSeo } from 'next-seo';
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import WhiteBox from "../components/WhiteBox";
import ContactButton from "../components/ContactButton";
import styles from "../styles/mauj.module.scss";

const backgroundColor = "#fbec9a";


export default function mauj({ textAnimationControls }) {

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
            title={locale !== "ar" ? "Mauzoun | Portfolio | Mauj" : "مَوْزوْن | أعمالنا | موج"}
            description={locale !== "ar" ? "Mauzoun | Portfolio | Mauj"   : "مَوْزوْن | أعمالنا| موج "}
        />

        <div>

            <Menu
                backgroundColor={backgroundColor}
                // textAnimationControls={textAnimationControls}
            />

            <div
                className='container'
                style={{ backgroundColor }}
                // layout="position"
            >
                <div className="intro">
                    <h1 className='mb-0'>{f("intro.title")}</h1>
                    <p>{f("intro.para")}</p>
                    <iframe className={styles.frame} width="550" height="600" src="https://www.instagram.com/p/CKqoCo5FZHM/embed" frameborder="0"></iframe>
                </div>

                <div className="meeting">
                    <h1>{f("meeting.title")}</h1>
                    <p>{f("meeting.para1")}</p>
                    <iframe className={styles.frame} width="550" height="600" src="https://www.instagram.com/p/CKOLK8EF21d/embed" frameborder="0"></iframe>
                    <p>{f("meeting.para2")}</p>
                    <iframe className={styles.frame} width="550" height="600" src="https://www.instagram.com/p/CEyWFKnJtrl/embed" frameborder="0"></iframe>
                </div>  

                <div className={styles.tone}>
                    <h1>{f("tone.title")}</h1>
                    <ul className={styles.list}>
                        <li>{f("tone.listElement1")}</li>
                        <li>{f("tone.listElement2")}</li>
                        <li>{f("tone.listElement3")}</li>
                        <li>{f("tone.listElement4")}</li>
                    </ul>
                    <p className={styles.toneFinal}>{f("tone.final")}</p>
                    <p>{f("tone.para1")}</p>
                    <iframe className={styles.frame} width="550" height="600" src="https://www.instagram.com/p/CEyT727pKDG/embed" frameborder="0"></iframe>
                    <p>{f("tone.para2")}</p>
                    <iframe className={styles.frame} width="550" height="600" src="https://www.instagram.com/p/CNAf2o_lkT7/embed" frameborder="0"></iframe>
                    <p>{f("tone.para3")}</p>
                </div>

                <div className={styles.brand}>
                    <h1>{f("brand.title")}</h1>
                    <p>{f("brand.para1")}</p>
                    <iframe  className={styles.frame} width="550" height="600" src="https://www.instagram.com/p/CL1O4W3Fk3P/embed" frameborder="0"></iframe>
                    <p>{f("brand.para2")}</p>
                </div>

                <div className={styles.testimony}>
                    <h1>{f("testimony.title")}</h1>
                    <p>{f("testimony.para1")}</p>
                    <p>{f("testimony.para2")}</p>
                    <p>{f("testimony.para3")}</p>
                </div>
            </div>
            
            <ContactButton />
            
        </div>
        </>
    )
}
