import React from 'react';
import styles from './AboutCard.module.css';
import groupPhoto from '../../static/photos/About_us.jpg'

const AboutCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={groupPhoto} alt="Laptop Sleeve" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>About us</h2>
        <p className={styles.description}>
          We are a diverse team of thinkers, creators, and leaders united by a shared ambition to excel. 
        </p>
        <p className={styles.description}>
          Meet our team (From right to left):
        </p>
        <table className={styles.teamList}>
          <tr>
            <td>Project Lead:</td> <td>Issac Ng</td>
          </tr>
          <tr>
            <td>Internal Relations:</td> <td>Oscar Ho</td>
          </tr>
          <tr>
            <td>Lead Sofware Designer:</td> <td>Abirami</td>
          </tr>
          <tr>
            <td>Staff Project Lead:</td> <td>Dr Mandeep Sagoo</td>
          </tr>
          <tr>
            <td>External Relations:</td> <td>Chantelle Gasa</td>
          </tr>
          <tr>
            <td>Research Lead:</td> <td>Claire Han</td>
          </tr>
          <tr>
            <td>Backend Lead:</td> <td>Kourosh Zarei</td>
          </tr>
          <tr>
            <td>Frontend Lead:</td> <td>Victor Lau</td>
          </tr>
          <tr>
            <td>Staff Contributor:</td> <td>Anatoliy Markiv (not in photo)</td>
          </tr>
        </table>
      </div>
      
    </div>
  );
};

export default AboutCard;
