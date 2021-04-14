import React from "react";
import { useIntl } from "react-intl";

import styles from "../styles/story.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";

const backgroundColor = "#d1e3f2";

const Story = function () {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  return (
    <div>
      <Menu backgroundColor={backgroundColor} />

      <div className="container" style={{ backgroundColor }}>
        <h1>{f("nameMeaning")}</h1>

        {f("aim")}

        <b>{f("teamwork")}</b>

        <div className={styles.gridSection}>
          <h4>{f("teamPresentation")}</h4>

          <div className={styles.gridContainer}>
            <div className={styles.gridOne}>
              <div className={styles.gridItem}></div>
              <div className={styles.name}>
                {f("teamMember.LayanAbdulShakoor")}
              </div>
              <div className={styles.role}>{f("roles.creativeDirector")}</div>
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

        {f("world")}

        <div className="whitebox">
          <b>{f("whitebox.innerText1")}</b>
          <br />
          {f("whitebox.innerText2")}
        </div>

        {f("workAspects")}
      </div>
    </div>
  );
};

export default Story;
