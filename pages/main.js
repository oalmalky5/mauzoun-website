import Head from 'next/head'
import story from './story'
import services from './services'
import job from './job'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react'
import Link from 'next/link'
import { BsChevronDown } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";



export default function Home() {
  // create a hook foreach instancee of a button  
  const [button1Show, setButton1Show] = useState(true)
  const [button2Show, setButton2Show] = useState(true)
  const [button3Show, setButton3Show] = useState(true)
  const [button4Show, setButton4Show] = useState(true)


  return (
    <div>
    <div className={styles.sidenav}>
        <div className={styles.logo}><Link href="main" ><img src="https://i.imgur.com/0IJeIP7.png" alt="Mauzoun logo"/></Link></div>
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
        <h6>A warm welcome to you from the Mauzoun Team.</h6>
        <p className={styles.topPara}>We are a Jeddah-based writing studio that researches then writes creatively and holistically, providing services to clients worldwide.</p>
        <img src='http://writingandwellness.com/wp-content/uploads/2015/02/Home-Office-2.jpg' alt='an image of an office'></img>
        <div className={styles.storyPara}>
            <a className={styles.storyLink} href='#'><u>Here's our story:</u></a> 
            <p>we realized a lack of captivating brand content and creative writing in the Arab World. Quite simply, we created a solution.</p>
            <hr/>
        </div>

    <div className={styles.services}> 
        <div> 
            <span className={styles.text1}>Our Services</span>
            {button1Show ? 
                <span onClick={() => setButton1Show(false)}><BsChevronDown className={styles.icon1}/></span> : 
            <span> include developing strategic content for brands and campaigns, as well as unleashing our creativities in book editing, creative writing, story doctoring, and boutique publishing.<div><hr/></div></span> }
        </div>
    </div> 
    
    <div className={styles.approach}>
        <div> 
            <span className={styles.text2}>Our approach to writing is thoughtful and imaginative</span> 
            {button2Show ? <span onClick={() => setButton2Show(false)}><BsChevronDown className={styles.icon1}/></span> : 
            <span>, balancing between Arabic and English while remaining loyal to each language and the kind of service we provide. We believe in work that is backed by a strong understanding of brand strategies, audience needs, and empathetic storytelling.</span> }
        </div>
    </div>

    <div className={styles.projects}>
        <div> 
            <span className={styles.text3}>We seek projects that need us as much as we need them</span> 
            {button3Show ? <span onClick={() => setButton3Show(false)}><BsChevronDown className={styles.icon1}/></span> : 
            <span>, from innovative brands to independent authors with passion projects. You can read our tales of success in our portfolio.</span> }
        </div>
    </div>

    <div className={styles.work}>
        <div> 
            <span className={styles.text4}>Our work is dedicated and ethical</span> 
            {button4Show ? <span onClick={() => setButton4Show(false)}><BsChevronDown className={styles.icon1}/></span> : 
            <span>, prioritizing our community as much as our clients. This is why we host an annual competition for up-and-coming writers who are developing their first-ever manuscripts. Winners are provided with free editing, marketing, and publishing services to unleash their works to the world.</span> }
        </div>
    </div>

</div>

</div>

     // layout the structure of the pages and  
  )
}
