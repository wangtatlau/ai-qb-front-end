import React from "react";
import styles from "./OverviewCard.module.css"; // make sure to create this CSS module file
import overview from "../../static/photos/Overview.png";
import performance from "../../static/photos/Performance.png";
import { useNavigate } from "react-router-dom";
import OverviewContent from "./OverviewContent";
import OverviewContentReverse from "./OverviewContentReverse";
import ai from "../../static/home/ai.png";
import game from "../../static/home/game.png";
import modern from "../../static/home/interface.png";
import evolves from "../../static/home/evolves.png";
import lenny from "../../static/home/lenny.jpg";
import mission from "../../static/home/mission.png";
import professor from "../../static/home/professor.png";
import research from "../../static/home/research.png";
import rocket from "../../static/home/rocket.png";
import secure from "../../static/home/secure.png";
import quality from "../../static/home/quality.png";

const OverviewCard = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>The World's Most Advanced AI-Powered</h2>
        <h2 className={styles.title}>Question Bank for Medical Students</h2>
        <p className={styles.subtitle}>
          Transforming Medical Education, One Question at a Time
        </p>
        <p className={styles.subtitle}>Unleash Your Potential with qVault.ai</p>
        <button
          className={styles.signUpButton}
          onClick={() => navigate("/signup")}
        >
          Sign Up Now
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img src={overview} className={styles.image} />
      </div>
      {/* <div className={styles.bottomContent}>
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
      </div> */}
      <OverviewContent
        title="Our Mission"
        description="At qVault.ai, we've made it our mission to empower medical students like you with
         the tools you need to excel in your studies and beyond. Our cutting-edge AI technology transforms
          your personal notes into a goldmine of exam-style questions, providing you with a personalized, 
          interactive learning experience like no other."
        image={rocket}
      />
      <OverviewContentReverse
        title="The Power of AI, the Precision of Experts"
        description="We're a team of passionate students and renowned educators to create
        a question bank that's truly exceptional. Our AI algorithms are
        trained on vast amounts of medical knowledge, ensuring that every
        question generated is accurate, relevant, and tailored to your
        university's curriculum."
        image={mission}
      />
      <div className={styles.setApart}>
        <h2 className={styles.subSectionTitle}>What sets qVault.ai apart?</h2>
        <OverviewContent
          title="AI-Powered Question Generation"
          description="We prioritize question quality, ensuring that generated questions are accurate, relevant, and aligned with your learning objectives."
          image={ai}
        />
        <OverviewContentReverse
          title="Quality-Centric Approach"
          description="We're a team of passionate students and renowned educators to create
        a question bank that's truly exceptional. Our AI algorithms are
        trained on vast amounts of medical knowledge, ensuring that every
        question generated is accurate, relevant, and tailored to your
        university's curriculum."
          image={quality}
        />
        <OverviewContent
          title="Student-Focused Design"
          description="Every feature of qVault.ai is crafted with the modern medical student in mind, from our intuitive interface to our personalized learning tools."
          image={modern}
        />
        <OverviewContentReverse
          title="Your Personal Tutor, Lenny"
          description="Meet Lenny, your AI-powered personal tutor. Lenny is always by your side, providing simple answers to your complex queries. With this cat, you'll never feel alone in your learning journey."
          image={lenny}
        />
        {/* <div className={styles.imageContainer}>
          <img src={overview} className={styles.image} />
        </div> */}
      </div>
      <div className={styles.secondSubSection}>
        <OverviewContent
          title="A Question Bank That Evolves with You"
          description="We understand that medical education is a journey, and your learning needs change as you progress. That's why we've designed qVault.ai to adapt to your unique learning style and pace. Whether you prefer factual recall questions or complex case-based scenarios, our platform has you covered."
          image={evolves}
        />
        <OverviewContentReverse
          title="Unleash Your Inner Competitor"
          description="With qVault.ai, learning becomes a game. Track your progress with detailed performance metrics, climb the leaderboards, and compete with your peers to see who can master the most topics. Our transparent rating system ensures that you're always learning from the best questions, as rated by the qVault.ai community."
          image={game}
        />
        <OverviewContent
          title="Driving Educational Innovation Through Research"
          description="At qVault.ai, we're not just building a question bank; we're pioneering a new era in medical education. Our team of researchers and educators continuously analyze user interactions and feedback to refine our AI algorithms and enhance our platform."
          image={research}
          secDescription="By participating in our studies, you're not just improving your own learning experience; you're contributing to the future of medical education. Your insights will help us identify areas for improvement and develop innovative solutions that cater to the evolving needs of medical students worldwide."
        />
        <OverviewContentReverse
          title="Safe, Secure, and Built from the Ground Up"
          description="At qVault.ai, we take your privacy seriously. We've built our platform from the ground up with security at its core. We never save your uploaded materials, ensuring that your data remains confidential and secure at all times."
          image={secure}
        />
        <OverviewContent
          title="Empowering Educators with Cutting-Edge Tools"
          description="qVault.ai is not just a platform for students; it's also a powerful tool for educators. Our AI-powered analytics provide valuable insights into student performance, allowing educators to identify areas where students may need additional support and tailor their teaching methods accordingly."
          image={professor}
        />
      </div>
      <h2 className={styles.subSectionTitle}>Join the qVault.ai Revolution</h2>
      <button
          className={styles.signUpButton}
          onClick={() => navigate("/signup")}
        >
          Sign Up Now
        </button>
      <p className={styles.description}>
        We're not just building a question bank; we're creating a movement. A
        movement of medical students who refuse to settle for mundane, generic
        question banks. A movement of future healthcare leaders who demand the
        best tools and resources to excel in their studies and beyond.
      </p>
      <section className={styles.section1}>
        <h2 className={styles.step}>Step 1:</h2>
        <h2 className={styles.stepDescription}>Upload Your Notes.</h2>
      </section>
      <section className={styles.section2}>
        <h2 className={styles.step}>Step 2:</h2>
        <h2 className={styles.stepDescription}>
          Choose the Topics and Question Types
        </h2>
      </section>
      <section className={styles.section3}>
        <h2 className={styles.step}>Step 3:</h2>
        <h2 className={styles.stepDescription}>
          Get Hands-On with Our Question Set
        </h2>
      </section>
    </div>
  );
};

export default OverviewCard;
