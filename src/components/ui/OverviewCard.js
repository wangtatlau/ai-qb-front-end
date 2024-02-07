import React from 'react';
import styles from './OverviewCard.module.css'; // make sure to create this CSS module file
import overview from '../../static/photos/Overview.png'

const OverviewCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>Minimal and thoughtful</h2>
        <p className={styles.description}>
          Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.
        </p>
      </div>
      <div className={styles.imageContainer}>
        {/* Replace with your image path */}
        <img src={overview} className={styles.image} />
      </div>
    </div>
  );
};

export default OverviewCard;
