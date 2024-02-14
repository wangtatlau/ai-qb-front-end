import React, { useRef, useEffect, useState } from "react";
import styles from "./ContactCard.module.css";
import contactPhoto from "../../static/photos/ContactUs.png";

const ContactCard = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }

      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.card}>
      <div
        className={`${styles.content} ${
          isVisible ? styles.fadeInLeft : styles.fadeOutLeft
        }`}
        ref={contentRef}
      >
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.description}>
          If you have any queries, please contact us at:
        </p>
        <table className={styles.contactList}>
          <tr>
            <td>Issac Ng:</td> <td>isaac.ng.5@kcl.ac.uk</td>
          </tr>
          <tr>
            <td>Mandeep Gill Sagoo:</td> <td>mandeep.gill@kcl.ac.uk</td>
          </tr>
        </table>
      </div>
      <div
        className={`${styles.imageContainer} ${
          isVisible ? styles.fadeInRight : styles.fadeOutRight
        }`}
        ref={imageRef}
      >
        <img
          src={contactPhoto}
          alt="Contact Us"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ContactCard;
