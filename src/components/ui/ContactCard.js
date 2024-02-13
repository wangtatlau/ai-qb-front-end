import React from "react";
import styles from "./ContactCard.module.css";
import contactPhoto from "../../static/photos/ContactUs.png";

const ContactCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.description}>
          If you have any quries, please contact us at:
        </p>
        <table className={styles.contactList}>
          <tr>
            <td>Issac Ng:</td> <td>isaac.ng.5@kcl.ac.uk</td>
          </tr>
          <tr>
            <td>Mandeep Gill Sagoo:</td> <td>mandeep.gill@kcl.ac.uk </td>
          </tr>
        </table>
      </div>
      <div className={styles.imageContainer}>
        <img src={contactPhoto} alt="Laptop Sleeve" className={styles.image} />
      </div>
    </div>
  );
};

export default ContactCard;
