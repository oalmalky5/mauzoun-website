import React from "react";

import {useIntl} from "react-intl";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {Carousel} from "react-responsive-carousel";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {NextSeo} from "next-seo";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import {MotionLogo} from "../components/MotionLogo"
import ContactButton from "../components/ContactButton";
import WhiteBox from "../components/WhiteBox";
import styles from "../styles/musaandpalm.module.scss";

const backgroundColor = "#f7f5f0";

export default function musaandpalm({textAnimationControls, handleBgColorChange, handleOpenNav, history, isNavOpen, ...rest}) {
    const locale = useRouter().locale;
    const {key, initial, animate, variants} = rest;

    const intl = useIntl();
    const f = (id, options) =>
        formatJsxMessage(intl, locale, id, {
            shouldFade: true,
            animationControls: textAnimationControls,
            ...options,
        });

    const whiteBoxDecoratorsPositions = {
        fromTop: [
            {
                preferredMargin: "520px",
            },
            {
                preferredMargin: "537px",
            },
            {
                marginTop: "10px",
                preferredMargin: "550px",
            },
            {
                marginTop: "15px",
            },
            {
                marginTop: "32px",
            },
            {
                marginTop: "49px",
            },
        ],
        fromBottom: [
            {
                preferredMargin: "300px",
            },
            {
                marginTop: "-50px",
                preferredMargin: "735px",
            },
            {
                marginTop: "-67px",
                preferredMargin: "735px",
            },
        ],
    };

    React.useEffect(() => handleBgColorChange(backgroundColor), []);

    return (
        <>
            <NextSeo
                title={locale !== "ar" ? "Mauzoun | Portfolio | Musa & Palm" : "مَوْزوْن | أعمالنا | موسى آند بالم"}
                description={locale !== "ar" ? "Mauzoun | Portfolio | Musa & Palm" : "مَوْزوْن | أعمالنا| موسى آند بالم "}
            />
            <div className="background-animation" style={{backgroundColor}}/>

            <motion.div
                key={key}
                initial={initial}
                animate={animate}
                variants={variants}


            >
                {/* <ContactButton isNavOpen={isNavOpen} history={history}/> */}
                <div>
                    <MotionLogo/>
                    <Menu
                        backgroundColor={backgroundColor}
                        textAnimationControls={textAnimationControls}
                        isNavOpen={isNavOpen}
                        handleOpenNav={handleOpenNav}
                    />

                    <div className="container">
                        <div className="container-background" style={{backgroundColor}}></div>
                        <div className="container-content">
                            <div className="intro">
                                <span className="title">{f("intro.title1")}</span>
                                <p className="para">{f("intro.para1")}</p>
                                <p className="para">{f("intro.para2")}</p>
                            </div>

                            <div className="longStory">
                                <span className="title">{f("longStory.title1")}</span>
                                <span className="para">{f("longStory.para1")}</span>
                                <img className={styles.image2} src="/mppic.png" alt="Musa & Palm table"/>
                                <span className="para">{f("longStory.title2")}</span>
                                <span className="para">{f("longStory.para2")}</span>
                                <span className="para">{f("longStory.para3")}</span>
                            </div>

                            <div>
                                <span className="title">{f("process.title1")}</span>

                                {
                                    <img className={styles.image2}
                                         src={locale !== "ar" ? "/Musa&PalmEN2.png" : "/musa&palmar.png"}
                                         alt="Musa & Palm table"/>
                                }
                                <span className="para">{f("process.para1")}</span>
                            </div>

                            <div>
                                <span className="title">{f("collab.title1")}</span>
                                <span className="para">{f("collab.para1")}</span>
                                <span className="para">{f("collab.para2")}</span>
                            </div>

                            <div>
                                <span className="title">{f("invitation.title1")}</span>
                                <span className="para">{f("invitation.para1")}</span>
                                <span className="para">{f("invitation.para2")}</span>
                                <span className="para">{f("invitation.para3")}</span>
                            </div>

                            <div className={styles.testimony}>

                                
                                <span className="testTitle" >{f("testimony.title")}</span>
                                <div className={styles.totalWhiteBox}>
                                    <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                                        <span
                                              className="musaPara1">{f("testimony.para1")}</span>
                                        <span 
                                              className="musaPara2">{f("testimony.para2")}</span>
                                        <span 
                                              className="musaPara3">{f("testimony.para3")}</span>
                                    </WhiteBox>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );

}
