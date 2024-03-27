import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { BsChevronDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import styles from '../styles/services.module.scss';
import Menu from '../components/Menu';
import { MotionLogo } from '../components/MotionLogo';
import ContactButton from '../components/ContactButton';
import WhiteBox from '../components/WhiteBox';
import Footer from '../components/Footer';
import Service from '../components/Service';
import ContentWritingModal from './modals/ContentWritingModal';

const backgroundColor = '#f7f5f0';

const whiteBoxDecoratorsPositions = {
  fromTop: [
    {},
    {
      preferredMargin: '650px',
    },
    {
      preferredMargin: '667px',
    },
  ],
  fromBottom: [
    {
      preferredMargin: '550px',
    },
    {
      preferredMargin: '567px',
    },
    {
      preferredMargin: '584px',
    },
  ],
};

export default function Services({
  textAnimationControls,
  handleBgColorChange,
  handleOpenNav,
  isNavOpen,
  ...rest
}) {
  const { key, initial, animate, variants } = rest;
  const router = useRouter();
  const { locale } = router;
  const intl = useIntl();

  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [isContentWritingVisible, setIsContentWritingVisible] = useState(false);
  const [isCreativeWritingVisible, setIsCreativeWritingVisible] =
    useState(false);
  const [isBoutiquePublishingVisible, setIsBoutiquePublishingVisible] =
    useState(false);
  const [isContentWritingModalOpen, setIsContentWritingModalOpen] =
    useState(false);

  React.useEffect(() => handleBgColorChange(backgroundColor), []);

  const handleReadMoreClick = () => {
    console.log('Read more clicked');
    setIsContentWritingModalOpen(true);
  };

  return (
    <>
      <NextSeo
        title={locale !== 'ar' ? 'Mauzoun | Services' : 'مَوْزوْن | خدماتنا'}
        description={
          locale !== 'ar' ? 'Mauzoun | Services' : 'مَوْزوْن | خدماتنا'
        }
      />
      <div className="background-animation" style={{ backgroundColor }} />
      <div className="background-animation" style={{ backgroundColor }} />
      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        variants={variants}
      >
        <div
          style={{
            position: 'fixed',
            display: 'flex',
            alignItems: 'stretch',
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
          }}
        >
          <div
            className="bg-animation-services"
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
            <div className="container">
              <div
                className="container-background"
                style={{ backgroundColor }}
              ></div>
              <div className="container-content">
                <span className="title">
                  <FormattedMessage
                    id="title"
                    defaultMessage={intl.formatMessage({
                      id: 'services.header',
                    })}
                  />
                </span>
              </div>
              <div className="container-content">
                <section className={styles.services}>
                  <p className={styles.intro}>
                    <FormattedMessage
                      id="services.intro"
                      defaultMessage={intl.formatMessage({
                        id: 'services.intro',
                      })}
                    />
                  </p>
                  <hr className={`${styles.separator} ${styles.gold}`} />
                  <Service
                    title={intl.formatMessage({ id: 'service3.title' })}
                    description={intl.formatMessage({
                      id: 'service3.description',
                    })}
                    readMoreLink="https://www.mauzoun.com/contentwriting"
                    readMoreText={intl.formatMessage({
                      id: 'services.readMore',
                    })}
                    titleHoverColor="#3C1053"
                    descriptionHoverColor="#3C1053"
                  />

                  <hr className={`${styles.separator} ${styles.red}`} />
                  <Service
                    title={intl.formatMessage({ id: 'service2.title' })}
                    description={intl.formatMessage({
                      id: 'service2.description',
                    })}
                    readMoreLink="https://www.mauzoun.com/bookcommissions"
                    isReversed
                    readMoreText={intl.formatMessage({
                      id: 'services.readMore',
                    })}
                    titleHoverColor="#C14729"
                    descriptionHoverColor="#C14729"
                  />
                  <hr className={`${styles.separator} ${styles.purple}`} />
                  <Service
                    title={intl.formatMessage({ id: 'service3.title' })}
                    description={intl.formatMessage({
                      id: 'service3.description',
                    })}
                    readMoreLink="https://www.mauzoun.com/boutiquepublishing"
                    readMoreText={intl.formatMessage({
                      id: 'services.readMore',
                    })}
                    titleHoverColor="#CD9F26"
                    descriptionHoverColor="#CD9F26"
                  />
                </section>
              </div>
              <div style={{ height: '400px' }} />
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
      <ContentWritingModal
        isOpen={isContentWritingModalOpen}
        onClose={() => setIsContentWritingModalOpen(false)}
      />
    </>
  );
}
