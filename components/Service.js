import React, { useState } from 'react';
import styles from '../styles/services.module.scss';

const Service = ({
  title,
  description,
  readMoreLink,
  readMoreText,
  titleHoverColor,
  descriptionHoverColor,
  isReversed,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${styles.service} ${isReversed ? styles.reversed : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.titleContainer}>
        <h2
          className={styles.title}
          style={hover ? { color: titleHoverColor } : {}}
        >
          {title}
        </h2>
      </div>
      <div className={styles.descriptionContainer}>
        <p
          className={styles.description}
          style={hover ? { color: descriptionHoverColor } : {}}
        >
          {description}
        </p>
        <a
          href={readMoreLink}
          className={styles.readMore}
          target="_blank"
          rel="noopener noreferrer"
        >
          {readMoreText}
        </a>
      </div>
    </div>
  );
};

export default Service;
