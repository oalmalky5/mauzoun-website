import Head from 'next/head'
import story from './story'
// import services from './services'
// import job from './job'
import styles from '../styles/portfolio.module.css'
import React, {useState} from 'react'
import Link from 'next/link'
import { BsChevronDown } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";



export default function portfolio() {
    return (
        <div>
        <div className={styles.sidenav}>
        <div className={styles.logo}><Link href="main" ><img src="https://i.imgur.com/HjDbXtR.png" alt="Mauzoun logo"/></Link></div>
        <div className={styles.navLinks}>
            <Link href="story">Story</Link>
            <Link href="services">Services</Link>
            <Link href="portfolio">Portfolio</Link>
            <Link href="job">Mauzoun & You</Link>
        </div>

        <div className={styles.bottomNavIcons}>
            <div className={styles.twitter}><a target="_blank" href='https://twitter.com/mauzoun_?lang=en'><IoLogoTwitter size='30px'/></a></div>
            <div className={styles.twitter}><a target="_blank" href='https://www.instagram.com/mauzoun/?hl=en'><IoLogoInstagram size='30px'/></a></div>
            <div className={styles.twitter}><a target="_blank" href='https://www.linkedin.com/company/mauzoun/about/'><GrFacebookOption size='30px'/></a></div>
        </div>
        <div className={styles.email}>hello@mauzoun.com</div>
        <div className={styles.location}>Based in Jeddah, Saudi Arabia</div>
        </div>

        <div className={styles.main}>
            <div className={styles.mainTitle}>Portfolio</div>
            <div className={styles.firstPara}>A personal look into our tales of success.</div>
            <div className={styles.secondPara}>Read our team’s project-focused journal entries, which document our creative thought process and show our beloved final outcome.</div>

            <div className={styles.content}>
                <div className={styles.title}><u>Content Writing</u></div>

                <div className={styles.projects}>
                    <div className={styles.mauj}>Mauj</div>
                    <div className={styles.shafra}>Shafra</div>
                    <div className={styles.musa}>Musa & Palm</div>
                    <div className={styles.tourism}>Saudi Tourism Authority</div>
                    <div className={styles.albalad}>Ministry of Culture: AlBalad</div>
                </div>
                <hr/>
            </div>

            <div className={styles.creative}>
                <div className={styles.title}><u>Creative Writing</u></div>

                <div className={styles.projects}>
                    <div className={styles.culture}>Ministry of Culture: <br/>Madinah Culinary Arts</div>
                </div>
                
            </div>

            <div className={styles.brandLogos}>
                <div className={styles.logoGrid}>
                    <div className={styles.clients}>Since 2018, we have worked with <span className={styles.hundrid}><u>over 100 clients</u></span></div>
                </div>
            </div>

        </div>
            
        </div>

    )
}
