import React from 'react'
import styles from '../styles/story.module.css'
// import job from './job'
import Link from 'next/link'
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";



const Story = function(){

    
    return (
        <div>
                <div className={styles.sidenav}>
                    <div className={styles.logo}><Link href="main" ><img src="https://i.imgur.com/68krFzC.jpg" alt="Mauzoun logo"/></Link></div>
                    <div className={styles.navLinks}>
                        <Link href="story">Story</Link>
                        <Link href="services">Services</Link>
                        <Link href="#">Portfolio</Link>
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
                <div className={styles.nameMeaning}>
                    <p>Mauzoun is a creative writing studio based in Jeddah, Saudi Arabia that was founded in 2018. Our name aptly means “poetic balance” in Arabic, a meaning that our words, services, and values live up to.</p>
                </div>

                <div className={styles.aim}>
                    <p>Through our work process, we aim to reflect the richness and versatility of both the Arabic and English languages, the ingenuity of our writers, and how powerful and seamless good writing should be.</p>
                </div>

                <div className={styles.teamWork}>
                    <p>Our team works cooperatively to revive the appreciation of good writing, and we craft content and stories with precision and passion. Our words can pack a punch or be elegantly eloquent. It all depends on what you want, and how we see it best.</p>
                </div>

                <div className={styles.gridSection}>
                    <h4>Here is the team:</h4>
                    <div className={styles.gridContainer}>

                        <div className={styles.gridOne}> 
                            <div className={styles.gridItem}></div>
                            <div className={styles.name}>Layan Abdul Shakoor</div>
                            <div className={styles.role}>Creative Director</div>
                        </div>

                        <div className={styles.gridTwo}> 
                            <div className={styles.gridItem}></div>
                            <div className={styles.name}></div>
                            <div className={styles.role}></div>
                        </div>

                        <div className={styles.gridThree}> 
                            <div className={styles.gridItem}></div>
                            <div className={styles.name}></div>
                            <div className={styles.role}></div>
                        </div>

                        <div className={styles.gridFour}> 
                            <div className={styles.gridItem}></div>
                            <div className={styles.name}></div>
                            <div className={styles.role}></div>
                        </div>

                        <div className={styles.gridFive}> 
                            <div className={styles.gridItem}></div>
                            <div className={styles.name}></div>
                            <div className={styles.role}></div>
                        </div>

                        <div className={styles.gridSix}> 
                            <div className={styles.gridItem}></div>
                            <div className={styles.name}></div>
                            <div className={styles.role}></div>
                        </div>

                        <div className={styles.gridSeven}> 
                            <div className={styles.gridItem}></div>
                            <div className={styles.name}></div>
                            <div className={styles.role}></div>
                        </div>

                        <div className={styles.gridEight}> 
                            <div className={styles.gridItem}></div>
                            <div className={styles.name}></div>
                            <div className={styles.role}></div>
                        </div>

                        <div className={styles.gridNine}> 
                            <div className={styles.gridItem}></div>
                            <div className={styles.name}></div>
                            <div className={styles.role}></div>
                        </div>

                    </div>
                </div>

                <div className={styles.world}>
                    <p>In a world that is always bustling about and concerned with immediate results, we stick to the belief that good work takes care and time. Every word is an investment in your brand, or your identity as an author. That is why we work on booking basis only and rarely take on rushed projects.</p>
                </div>
                
                <div className={styles.whiteBox}>

                    <div className={styles.innerText1}>
                        We believe in the four-day work week, and consider ourselves pioneers in actively pursuing a work-life balance for all of our team members.
                    </div>

                    <div className={styles.innerText2}>
                        This culture we cultivated takes our creativities and productivities up a notch, providing the space and time needed to bring a fresh outlook to our workplace and your projects.
                    </div>
                </div>

                <div className={styles.aspectPara}>
                    <p>In all aspects, the work we do, and how we do it, is holistic and innovative. We aim to ease and expedite the process for artists, independent filmmakers, personal brands, and businesses alike, activating their ambitions with powerful and captivating words.</p>
                </div>
            </div>
         </div>
    )
}

export default Story;