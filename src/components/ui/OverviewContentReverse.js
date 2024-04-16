import React from "react";
import styles from "./OverviewContent.module.css";

const OverviewContentReverse = ({ title, description, image }) => {

  return (
    <div className={styles.bottomContent}>
      <div className={styles.secImageContainer}>
        <img src={image} alt="" className={styles.secImage} />
      </div>
      <div className={styles.leftContainer}>
        <h3 className={styles.secTitle}>{title}</h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default OverviewContentReverse;
