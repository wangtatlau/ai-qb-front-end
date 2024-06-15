import React from 'react';
import styles from './DashCard.module.css';

const DashCard = ({ name, icon, onClick }) => {
  // Determine if the name is 'Browse'
  const available = (name === 'Browse' || name === 'Feedback');

  // Apply the grey background class if the name is not 'browse' and add 'interactive' if it is
  const cardClasses = available ? `${styles.card} ${styles.interactive}` : `${styles.card} ${styles.greycard}`;

  // Handle click only if the name is 'browse'
  const handleClick = available ? onClick : () => {};

  return (
    <div className={cardClasses} onClick={handleClick}>
      <div className={styles.decoration} />
      <div className={styles.innerCard}>
        <img src={icon} alt={name} className={styles.icon} />
        <h2 className={styles.text}>{name}</h2>
      </div>
    </div>
  );
};

export default DashCard;



// import React from 'react';
// import styles from './DashCard.module.css';

// const DashCard = ({ name, icon, onClick }) => { // Use onClick here
//   return (
//     <div className={styles.card} onClick={onClick}> {/* Apply onClick to the card */}
//       <div className={styles.decoration} />
//       <div className={styles.innerCard}>
//         <img src={icon} alt={name} className={styles.icon} />
//         <h2 className={styles.text}>{name}</h2>
//       </div>
//     </div>
//   );
// };

// export default DashCard;
