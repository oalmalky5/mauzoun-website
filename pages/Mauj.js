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
import InstagramEmbed from 'react-instagram-embed';

const backgroundColor = "#fbec9a";


export default function Mauj() {
    return (
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

            <div className={styles.firstSec}>
                <h1 className={styles.title}>Mauj defies the conventional.</h1>
                <p className={styles.body}>Mauj is one of our most prominent, stimulating, and challenging projects. What we love most in Mauj is how aware their team is of what they present and how they present it, and their consideration of the culture of their audience of Arab women. We also love the way our writers balance between their beautiful poetic tone, and clear and direct educational method.</p>
                                    
                

            </div>

            <div className={styles.secondSec}>
                <h1 className={styles.title}>How did we meet?</h1>
                <p className={styles.body1}>In February 2020, we submitted a pitch for their new project, knowing nothing at the time except that it is a platform concerned with women's sexual and reproductive health. We began preparing the presentation and research content, and were working very enthusiastically seeing as Mauj is moving in a relatively new direction for the Arab region. We put all our effort into what we did and Mauj, in turn, loved our work and writing style right away – and we won!</p>
                <p className={styles.body2}>At Mauzoun, we don’t consider ourselves to be a writing service provider only, but rather as creative partners; explaining to clients our opinion from a creative perspective. This is what we did with Mauj.</p>
                <p className={styles.body3}>At the begging, Mauj started with another name – one that carries hidden meaning. They were likely going to encounter some obstacles, or reach an unintended audience that was unlikely to support their message. After we won the pitch (with flying colors!) we suggested they change their old name to another one more in line with their vision and direction, and this required many intensive sessions together to convince them of the need for change – after which we absolutely fell in love with their new choice, Mauj. </p>
            </div>

            <div className={styles.thirdSec}>
                <h1 className={styles.title}>What about our tone of writing?</h1>
                <ul className={styles.list}>
                    <li>Welcome to Mauj. Welcome to your home.</li>
                    <li>Welcome to Mauj. We’ve been waiting for you.</li>
                    <li>Welcome to Mauj. We’ve been waiting for you.</li>
                </ul>

                <p>Welcome to Mauj. We’re glad you came.</p>

                <p>When it was time to decide on their tone, we chose to write in a lovely poetic tone, to complement the particular character and rhythm of Mauj, and is why we chose "we're glad you came." From there we set out to write their Brand Manifesto. It was one of the first things we wrote for Mauj, and as the words came together and the vision became clearer, in a sense, we were setting the foundation stones for Mauj. That was the ground from which we took off to write their social media content, launching in September 2020, and starting a new journey.</p>

                <p>When we started writing, we knew very well that addressing topics on women's sexual health was unfamiliar, but also necessary. This is why we always ask ourselves what the best and smoothest way could be to introduce this content to the readers, and how the audience could join in on a constructive conversation. When we started in early September 2020, the posts were introducing the content to the audience, and delving gradually into the topics to eventually reach where we are in March 2021. We did this because one of our most important values at Mauzoun is to take into consideration Arab culture and Arab audiences, as they form a priority for us and for our clients.</p>

                <p>What makes our work exceptional with Mauj is our collaboration with their team. We think together about which topics to discuss, and about the dates of publication, contemplating whether or not a post is suitable for its publication date, or if there's an event that would be in conflict with the content? We also help them develop their ideas; they are dear clients and valuable partners, and we love what they do with their work and the limits they push.</p>

            </div>
                <div className={styles.fourthSec}>
                    <h1 className={styles.title}>A flexible business relationship led to an integrated brand.</h1>
                    <p>With their deliberate management, brilliant illustrations and our written content, Mauj received 37K followers in the first five months alone, without ever resorting to promotions or paid advertisements, and as of this blog’s date of June 2021, they now have more than 53K followers. 12 of the posts we wrote for them received 80% more engagement than average. What we love the most about Mauj is how they balance sharing knowledge with promoting their products, without one side overshadowing the other.</p>

                    <p>Sometimes ideas seem to come out of nowhere, especially with new brands. You may arrive at fresh and daring concepts, which we at Mauzoun support with every client; regardless of how bold the idea or the limits it may push.</p>
                </div>

                <div className={styles.fifthSec}>
                    <h1 className={styles.title}>What Mauj wrote about Mauzoun</h1>
                    <p>Mauzoun won us over with the first page of the proposal they put together for us. Although there were a number of companies tendering to work with us, once we saw Mauzoun’s pitch, we stopped looking at others. Their in-depth research, cultural references, insightful analysis, and brilliant, witty writing sealed the deal. Mind you, we are not an easy client— exciting and daring, yes, but definitely not your average scope of work. As a small, startup business, we are constantly rethinking our strategy and changing our approach, and without skipping a beat, Mauzoun is on top of it, adjusting scopes and adapting the work to meet our latest needs.</p>
                    <p>In our search for a copywriting agency, we were not only looking for excellent writers, we were seeking strategic partners who could think with us (sometimes for us), help us better understand our regional audience, engage in future planning, and who are equally invested in the success of the business. That’s exactly what the Mauzoun team is.</p>
                    <p>They have mastered the Arabic language, are culturally tapped in, understand the ins and outs of social norms, always add their creative magic to all that they do, and are up for a challenge any day. The harder the brief or ask, the more excited they get and the better the work. They inspire us to up our strategy, put out better work, think harder, and act faster. They never hold back from contributing beyond scopes and calling us out on our BS, which we appreciate so much. They are willing to bend over backwards to get us to meet our objectives, and that kind of partnership doesn’t come easy. We are so thankful to have such an impressive group of strong, smart, and witty</p>
                </div>
            <div>
        </div>
        </div>
        </div>
    )
}
