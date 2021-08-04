import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NextSeo } from 'next-seo';
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";
import WhiteBox from "../components/WhiteBox";
import styles from "../styles/musaandpalm.module.scss";



const backgroundColor = "#fbec9a";

export default function musaandpalm({textAnimationControls}) {

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
                title={locale !== "ar" ? "Mauzoun | Portfolio | Musa & Palm" : "مَوْزوْن | أعمالنا | موسى آند بالم"}
                description={locale !== "ar" ? "Mauzoun | Portfolio | Musa & Palm"   : "مَوْزوْن | أعمالنا| موسى آند بالم "}
            />

            <div>
                <Menu backgroundColor={backgroundColor}/>
            </div>

            <div className='container' style={{backgroundColor}}>
                <div className="intro">
                    <span className={styles.title1}>{f("intro.title1")}</span>
                    <p className={styles.para1}>{f("intro.para1")}</p>
                </div>

                <div className="longStory">
                    <span className={styles.title1}>{f("longStory.title1")}</span>
                    <span className={styles.para1}>{f("longStory.para1")}</span>
                    <span className={styles.title2}>{f("longStory.title2")}</span>
                    <span className={styles.para2}>{f("longStory.para2")}</span>
                    <span className={styles.para3}>{f("longStory.para3")}</span>
                </div> 
                
                <div>
                    <span className={styles.title1}>{f("process.title1")}</span>
                    <img className={styles.image}src="Musa&PalmEN.png" alt="Musa & Palm table"/>
                    <span className={styles.para1}>{f("process.para1")}</span>
                </div>

                <div>
                    <span className={styles.title1}>{f("collab.title1")}</span>
                    <span className={styles.para1}>{f("collab.para1")}</span>
                    <span className={styles.para1}>{f("collab.para2")}</span>
                </div>

                <div>
                    <span className={styles.title1}>{f("invitation.title1")}</span>
                    <span className={styles.para1}>{f("invitation.para1")}</span>
                    <span className={styles.para1}>{f("invitation.para2")}</span>
                    <span className={styles.para1}>{f("invitation.para3")}</span>
                </div>

            </div>

        </>
    )
}

