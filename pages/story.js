import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Menu from '../components/Menu';
import formatJsxMessage from '../utils/formatJsxMessage';
import { MotionLogo } from '../components/MotionLogo';
import Footer from '../components/Footer';
import Bar from '../components/Bar';
import styles from '../styles/home.module.scss';
import BarTextContent from '../components/BarTextContent';

const backgroundColor = '#f7f5f0';

export default function Story({
  updatePageTransition,
  textAnimationControls,
  handleBgColorChange,
  isNavOpen,
  handleOpenNav,
  ...rest
}) {
  const [expandedBar, setExpandedBar] = useState(null);

  const barsExtended = expandedBar !== null;

  const locale = useRouter().locale;
  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  React.useEffect(() => handleBgColorChange(backgroundColor), []);

  return (
    <>
      <NextSeo
        title={locale !== 'ar' ? 'Mauzoun | Story' : 'مَوْزوْن | قصتنا'}
        description={f('pageTitle')}
      />
      <div className="background-animation" style={{ backgroundColor }} />

      <motion.div>
        <AnimatePresence>
          <img
            src={
              locale === 'ar'
                ? `/homepage-text-ar.png`
                : `/homepage-text-en.png`
            }
            alt={locale === 'ar' ? 'الصفحة الرئيسية' : 'Homepage text'}
            className={`${styles.homepageImage} ${
              barsExtended ? styles.fadeOut : ''
            }`}
          />
        </AnimatePresence>
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
            className="bg-animation-home"
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

            <div className={styles.container} style={{ backgroundColor }}>
              <div className={styles.verticalBars}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Bar
                    title={locale === 'ar' ? 'الجوائز' : 'Awards'}
                    imageSrc="/bars_photos/1.png"
                    isExpanded={expandedBar === 'awards'}
                    onClick={() =>
                      setExpandedBar(expandedBar === 'awards' ? null : 'awards')
                    }
                    type="awards"
                    isFirstBar={true}
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedBar(null);
                      }}
                    >
                      <BarTextContent locale={locale} type="awards" />
                    </div>
                  </Bar>{' '}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Bar
                    title={
                      locale === 'ar' ? (
                        <>
                          <span>العملاء</span>
                          <br />
                          <span>ومشاريع التعاون</span>
                        </>
                      ) : (
                        <>
                          <span>Clients &</span>
                          <br />
                          <span>Collaborations</span>
                        </>
                      )
                    }
                    imageSrc="/bars_photos/2.png"
                    isExpanded={expandedBar === 'clientsCollaborations'}
                    onClick={() =>
                      setExpandedBar(
                        expandedBar === 'clientsCollaborations'
                          ? null
                          : 'clientsCollaborations'
                      )
                    }
                    type="clientsCollaborations"
                    style={{
                      flexDirection: locale === 'ar' ? 'row-reverse' : 'row',
                    }}
                  >
                    {/* Additional content for Clients & Collaborations */}
                  </Bar>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Bar
                    title={locale === 'ar' ? 'الخدمات' : 'Services'}
                    imageSrc="/bars_photos/3.png"
                    isExpanded={expandedBar === 'services'}
                    onClick={() =>
                      setExpandedBar(
                        expandedBar === 'services' ? null : 'services'
                      )
                    }
                    type="servicesBar"
                    style={{
                      flexDirection: locale === 'ar' ? 'row-reverse' : 'row',
                    }}
                  >
                    {/* Additional content for Services */}
                  </Bar>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Bar
                    title={locale === 'ar' ? 'عن مَوْزوْن' : 'About'}
                    imageSrc="/bars_photos/4.png"
                    isExpanded={expandedBar === 'about'}
                    onClick={() =>
                      setExpandedBar(expandedBar === 'about' ? null : 'about')
                    }
                    type="aboutBar"
                    style={{
                      flexDirection: locale === 'ar' ? 'row-reverse' : 'row',
                    }}
                  >
                    {/* Additional content for About */}
                  </Bar>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
