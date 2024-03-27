import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import BarTextContent from '../components/BarTextContent';

const Bar = ({ title, imageSrc, isExpanded, onClick, type, isTilted }) => {
  const locale = useRouter().locale;

  // Function to handle clicks on the bar. If the bar is expanded, it will collapse.
  const handleBarClick = () => {
    // If the bar is expanded, collapse it, otherwise, expand it.
    onClick();
  };

  // Function to handle click on the close button
  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent the bar's main onClick from firing
    onClick(); // This will contract the bar
  };

  return (
    <div
      className={`${styles.bar} ${styles[type]} ${styles.barContent} ${
        isExpanded ? styles.expanded : ''
      } ${isTilted ? styles.tilted : ''}`}
      onClick={handleBarClick} // Handles expanding/collapsing the bar
    >
      <div
        className={styles.leftContent}
        style={{
          left: locale === 'ar' ? 'auto' : '0',
          right: locale === 'ar' ? '0' : 'auto',
        }}
      >
        <h1 className={styles.text}>{title}</h1>
        <div className={styles.imageWrapper}>
          <Image
            className={styles[`image${imageSrc.match(/\d/)[0]}`]}
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      {isExpanded && (
        <>
          <div
            className={`${styles.rightContent} ${
              isExpanded ? styles.animateTextContent : ''
            }`}
            style={{
              right: locale === 'ar' ? 'auto' : '0',
              left: locale === 'ar' ? '0' : 'auto',
            }}
          >
            <BarTextContent locale={locale} type={type} />
          </div>
          {/* Close button */}
          <button
            className={styles.closeButton}
            onClick={handleCloseClick}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '10px',
              right: locale === 'ar' ? 'auto' : '10px',
              left: locale === 'ar' ? '10px' : 'auto',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </>
      )}
    </div>
  );
};

export default Bar;
