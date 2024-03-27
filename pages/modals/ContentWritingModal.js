import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/ContentWritingModal.module.scss';
import formatJsxMessage from '../../utils/formatJsxMessage'; // Adjust the path as needed
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

const ContentWritingModal = ({
  isOpen,
  onClose,
  textAnimationControls,
  handleBgColorChange,
  handleOpenNav,
  history,
  isNavOpen,
  ...rest
}) => {
  const router = useRouter();
  const locale = useRouter().locale;
  const intl = useIntl();

  const f = (id, options) =>
    formatJsxMessage(intl, router.locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.container}>
            <h2>{f('contentPageTitle')}</h2>
            <p>{f('mainPara')}</p>

            {/* Replicating sections from ContentWriting page */}
            {/* Approach */}
            <h3>{f('serviceQ')}</h3>
            <p>{f('serviceAnswer')}</p>

            {/* Content Writing Services */}
            <h3>{f('whatServicesQ')}</h3>
            <p>{f('serviceHeader')}</p>
            <ul>
              {[
                'contentWriting.services.mm',
                'contentWriting.services.naming',
                'contentWriting.services.manifesto',
                'contentWriting.services.slogans',
                'contentWriting.services.profile',
                'contentWriting.services.website',
                'contentWriting.services.socialMedia',
                'contentWriting.services.scriptWriting',
              ].map((e) => (
                <li key={e}>{f(e)}</li>
              ))}
            </ul>

            {/* Who is it for? */}
            <h3>{f('whoForQ')}</h3>
            <p>{f('whoForAnswer')}</p>

            {/* Boutique Publishing */}
            <h3>{f('smallProjectsQ')}</h3>
            <p>{f('smallProjectsAnswer')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentWritingModal;
