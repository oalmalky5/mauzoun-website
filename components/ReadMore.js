import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

import styles from "../styles/readMore.module.scss";
import Contact from "../components/Contact";
import formatJsxMessage from "../utils/formatJsxMessage";
import { motion } from "framer-motion";


export default function Content({ children, style, decoratorsPositions }) {
  const locale = useRouter().locale;

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide" style={{ cursor: 'pointer' }}>
          {isReadMore ? `... (${locale === "ar" ? "اقرأ أكثر" : "Read more"})` : ` (${locale === "ar" ? "تظهر أقل" : "Show less"})`}
        </span>
      </p>
    );
  };

  return (
    <div className="container-fluid">
      <p>
        <ReadMore>
          {locale === "ar" ?
            `لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان Lorem Ipsum هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر الميلادي ، عندما أخذت طابعة غير معروفة لوحًا من النوع وتدافعت عليه لعمل كتاب عينة. لقد نجت ليس فقط خمسة قرون ، ولكن أيضًا القفزة في التنضيد الإلكتروني ، وظلت دون تغيير جوهري. تم نشره في الستينيات من القرن الماضي بإصدار أوراق Letraset التي تحتوي على مقاطع Lorem Ipsum ، ومؤخرًا مع برامج النشر المكتبي مثل Aldus PageMaker بما في ذلك إصدارات Lorem Ipsum.`
            :
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
          }
        </ReadMore>
      </p>
    </div>
  );
}