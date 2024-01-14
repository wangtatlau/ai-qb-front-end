import React from 'react';
import styles from './DashCard.module.css';

const DashCard = ({ name, icon }) => {
  return (
    <div className={styles.card}>
      <i className={`fas ${icon} ${styles.icon}`}></i>
      <p className={styles.text}>{name}</p>
    </div>
  );
};

export default DashCard;
