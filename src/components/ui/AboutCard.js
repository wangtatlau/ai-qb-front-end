import React, { useRef, useEffect, useState } from "react";
import styles from "./AboutCard.module.css";
import groupPhoto from "../../static/photos/About_us.jpg";

const AboutCard = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as per your need
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.card}>
      <div
        className={`${styles.imageContainer} ${
          isVisible ? styles.fadeInLeft : styles.fadeOutLeft
        }`}
      >
        <img
          ref={imageRef}
          src={groupPhoto}
          alt="Laptop Sleeve"
          className={`${styles.image}`}
        />
      </div>
      <div
        ref={contentRef}
        className={`${styles.content} ${
          isVisible ? styles.fadeInRight : styles.fadeOutRight
        }`}
      >
        <h2 className={styles.title}>About us</h2>
        <p className={styles.description}>
          We are a diverse team of thinkers, creators, and leaders united by a
          shared ambition to excel.
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
