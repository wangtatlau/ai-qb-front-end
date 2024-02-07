import React from 'react';
import styles from './ContactCard.module.css'; // Assuming you have CSS module files

const ContactCard = () => {
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
        <img src="/path-to-your-image.jpg" alt="Laptop Sleeve" className={styles.image} />
      </div>
    </div>
  );
};

export default ContactCard;
