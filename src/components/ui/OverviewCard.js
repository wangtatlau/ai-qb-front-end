import React from "react";
import styles from "./OverviewCard.module.css"; // make sure to create this CSS module file
import overview from "../../static/photos/Overview.png";
import performance from "../../static/photos/Performance.png";
import { useNavigate } from "react-router-dom";

const OverviewCard = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>The Most Powerful AI Question Bank</h2>
        <p className={styles.subtitle}>Turn notes into questions using AI.</p>
        <button className={styles.signUpButton} onClick={() => navigate('/signup')}>Sign Up Now</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={overview} className={styles.image} />
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.leftContainer}>
          <h3 className={styles.secTitle}>Performance Track</h3>
          <p className={styles.description}>
            Performance Metrics Visualised by Graphs
          </p>
          <ul className={styles.metricList}>
            <li>Correctness</li>
            <li>Strong/Weak Areas</li>
            <li>Leaderboards</li>
            <li>Performance Percentile by Topic</li>
            <li>And Many More!</li>
          </ul>
        </div>
        <div className={styles.secImageContainer}>
          <img src={performance} className={styles.secImage} />
        </div>
      </div>
      <section className={styles.section1}>
        <h2 className={styles.step}>Step 1:</h2>
        <h2 className={styles.stepDescription}>Upload Your Notes.</h2>
      </section>
      <section className={styles.section2}>
        <h2 className={styles.step}>Step 2:</h2>
        <h2 className={styles.stepDescription}>Choose the Topics and Question Types</h2>
      </section>
      <section className={styles.section3}>
        <h2 className={styles.step}>Step 3:</h2>
        <h2 className={styles.stepDescription}>Get Hands-On with Our Question Set</h2>
      </section>
    </div>
  );
};

export default OverviewCard;
