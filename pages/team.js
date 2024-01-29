import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import styles from '../styles/story.module.scss';
import Menu from '../components/Menu';
import formatJsxMessage from '../utils/formatJsxMessage';
import WhiteBox from '../components/WhiteBox';
import { MotionLogo } from '../components/MotionLogo';
import ContactButton from '../components/ContactButton';
import Footer from '../components/Footer';

const backgroundColor = '#f7f5f0';
const teamMembersData = {
  1: {
    src: '/team_pics_2024/2024-Layan.png',
  },
  2: {
    src: '/team_pics_2024/2024-Omar.png',
  },
  3: {
    src: '/team_pics_2024/2024-Ahmad.png',
  },
  4: {
    src: '/team_pics_2024/2024-Rokia.png',
  },
  5: {
    src: '/team_pics_2024/2024-Amal.png',
  },
  6: {
    src: '/team_pics_2024/2024-Raniah.png',
  },
  7: {
    src: '/team_pics_2024/2024-Malak.png',
  },
  8: {
    src: '/team_pics_2024/2024-Sara.png',
  },
  9: {
    src: '/team_pics_2024/2024-Hoza.png',
  },
  10: {
    src: '/team_pics_2024/2024-Omnia.png',
  },
  11: {
    src: '/team_pics_2024/2024-Lobaba.png',
  },
  12: {
    src: '/team_pics_2024/2024-Fatimah.png',
  },
};

const whiteBoxDecoratorsPositions = {
  fromTop: [
    {
      preferredMargin: '520px',
    },
    {
      preferredMargin: '537px',
    },
    {
      marginTop: '10px',
      preferredMargin: '550px',
    },
    {
      marginTop: '15px',
    },
    {
      marginTop: '32px',
    },
    {
      marginTop: '49px',
    },
  ],
  fromBottom: [
    {
      preferredMargin: '300px',
    },
    {
      marginTop: '-50px',
      preferredMargin: '735px',
    },
    {
      marginTop: '-67px',
      preferredMargin: '735px',
    },
  ],
};

const Team = function ({
  textAnimationControls,
  handleBgColorChange,
  handleOpenNav,
  history,
  isNavOpen,
  ...rest
}) {
  const locale = useRouter().locale;
  const { key, initial, animate, variants } = rest;

  const [expandedMembers, setExpandedMembers] = useState({});

  const toggleBio = (id) => {
    console.log('Toggling bio for member:', id);
    setExpandedMembers((prevState) => {
      const newState = { ...prevState, [id]: !prevState[id] };
      console.log('New state:', newState);
      return newState;
    });
  };

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  let numberOfMembersImage = Object.keys(teamMembersData).length;
  let numberOfMembers =
    Object.keys(intl.messages).filter((e) => e.startsWith('teamMember.'))
      .length / 3;

  console.log('Number of members from data:', numberOfMembersImage);
  console.log('Number of members from intl:', numberOfMembers);

  // const updateTeamMembersHoverState = (e, isHovered) => {
  //   const id = e.target?.id;
  //   if (id && teamMembersData[id].src)
  //     e.target.src = isHovered
  //       ? teamMembersData[id].src
  //       : teamMembersData[id].preview;
  // };

  const getTeamMembers = () => {
    return Object.keys(teamMembersData).map((key) => {
      const i = parseInt(key, 10);
      const isExpanded = expandedMembers[i];

      return (
        <div className="gridItemWrapper" key={`teamMemberWrapper.${i}`}>
          <div
            className={`${styles.gridItem} ${
              isExpanded ? styles.expanded : ''
            }`}
            key={`teamMember.${i}`}
          >
            {i <= numberOfMembers && (
              <div className="mt-0 mb-0 heading">
                <div className={styles.membersInfo}>
                  <span>{f(`teamMember.${i}.name`)}</span>
                  <span className="memberRole">
                    {f(`teamMember.${i}.role`)}
                  </span>
                </div>
                <div className="member-image">
                  <img
                    id={i}
                    src={teamMembersData[i].src}
                    className={styles.gridItemImage}
                    alt={`teamMember.${i}.name`}
                  />
                </div>
                <div className="bio-container">
                  {isExpanded && (
                    <p className="bio">{f(`teamMember.${i}.bio`)}</p>
                  )}
                </div>
                <div className={styles.buttonContainer}>
                  <button onClick={() => toggleBio(i)}>
                    {isExpanded ? (
                      <BsChevronUp size={30} />
                    ) : (
                      <BsChevronDown size={30} />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  React.useEffect(() => handleBgColorChange(backgroundColor), []);

  return (
    <>
      <NextSeo
        title={locale !== 'ar' ? 'Mauzoun | Team' : 'مَوْزوْن | فريقنا'}
        description={locale !== 'ar' ? 'Mauzoun | Team' : 'مَوْزوْن | فريقنا'}
      />
      <div className="background-animation" style={{ backgroundColor }} />
      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        variants={variants}
        //
        //
      >
        {/* <ContactButton isNavOpen = {isNavOpen} history = {history}/> */}
        <div
          style={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'stretch',
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
            // overflowY: "scroll",
          }}
        >
          <div
            className="bg-animation-story"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              zIndex: 8,
              overflow: isNavOpen ? 'hidden' : null,
            }}
          >
            <MotionLogo />

            <Menu
              backgroundColor={backgroundColor}
              textAnimationControls={textAnimationControls}
              isNavOpen={isNavOpen}
              handleOpenNav={handleOpenNav}
            />

            <div
              className="container"
              // layout="position"
            >
              <div
                className="container-background"
                style={{ backgroundColor }}
              ></div>
              {/*<div className="container-image">
                <div className={styles.storyCover}>
                  <motion.img src="/Story.png" height="341px" width="900px" layout="fixed" priority="true" transition={{ duration: 0.5 }}/>
                </div>
                </div>*/}
              <div className="container-content">
                <span className="title">{f('teamPageTitle')}</span>
              </div>
              <div className="container-content">
                {/*<span className="nameStory">{f("nameMeaning")}</span>*/}

                <div className="proudStory">{f('proud')}</div>
                <div className="container-object">
                  <div className={styles.gridContainer}>{getTeamMembers()}</div>
                </div>

                <span className="storyTeamwork">{f('teamwork')}</span>
              </div>

              {/*<div className="container-content">{f("world")}</div>*/}

              <div className="container-object">
                <div class={styles.totalWhiteBox}>
                  <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                    <span className="whitebox-font">
                      {f('whitebox.innerText1')}
                    </span>
                  </WhiteBox>
                </div>
              </div>
              <div className="container-content">{/*f("workAspects")*/}</div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Team;
