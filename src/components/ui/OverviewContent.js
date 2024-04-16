import React from "react";
import styles from "./OverviewContent.module.css";

const OverviewContent = ({ title, description, image, secDescription }) => {

  return (
    <div className={styles.bottomContent}>
      <div className={styles.leftContainer}>
        <h3 className={styles.secTitle}>{title}</h3>
        <p className={styles.description}>
          {description}
        </p>
        {secDescription && (
          <p className={styles.description}>
            {secDescription}
          </p>
        )}
      </div>
      <div className={styles.secImageContainer}>
        <img src={image} alt="" className={styles.secImage} />
      </div>
    </div>
  );
};

export default OverviewContent;
