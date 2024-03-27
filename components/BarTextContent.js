import { barText } from './barText';
import styles from '../styles/home.module.scss';
import HtmlContent from './HtmlContent';

function BarTextContent({ locale, type }) {
  if (!barText || !barText[type]) {
    return null;
  }

  const content = barText[type][locale];

  return (
    <div className={`${styles.expanded} ${locale}`}>
      <div className="rightContent">
        <p>
          <HtmlContent content={content.statement} />
        </p>
        <ul>
          {content.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BarTextContent;
