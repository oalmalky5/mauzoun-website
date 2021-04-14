import React from "react";
import { useIntl } from "react-intl";

import styles from "../styles/story.module.scss";
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";

const Story = function () {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  return (
    <div>
      <Menu backgroundColor="#91cae1" />

      <div className={styles.main}>
        <div className={styles.nameMeaning}>{f("nameMeaning")}</div>

        <div className={styles.aim}>{f("aim")}</div>

        <div className={styles.teamWork}>{f("teamwork")}</div>

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

        <div className={styles.world}>{f("world")}</div>

        <div className={styles.whiteBox}>
          <div className={styles.innerText1}>{f("whitebox.innerText1")}</div>

          <div className={styles.innerText2}>{f("whitebox.innerText2")}</div>
        </div>

        <div className={styles.aspectPara}>{f("workAspects")}</div>
      </div>
    </div>
  );
};

export default Story;
