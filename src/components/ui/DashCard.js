import React from 'react';
import styles from './DashCard.module.css';

const DashCard = ({ name, icon, onClick }) => { // Use onClick here
  return (
    <div className={styles.card} onClick={onClick}> {/* Apply onClick to the card */}
      <div className={styles.decoration} />
      <div className={styles.innerCard}>
        <img src={icon} alt={name} className={styles.icon} />
        <h2 className={styles.text}>{name}</h2>
      </div>
    </div>
  );
};

export default DashCard;
