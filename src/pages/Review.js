import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Review.module.css";
import useBodyClass from "./useBodyClass";

const ReviewPage = () => {
  useBodyClass(styles.questionBody);
  const location = useLocation();
  const navigate = useNavigate();

  const [hasBeenRated, setHasBeenRated] = useState(false);

  const { correctCount, wrongCount, deckId } = location.state || {
    correctCount: 0,
    wrongCount: 0,
    deckId: 0,
  };

  useBodyClass(styles.ReviewBody);
  const data = [
    { name: "Correct Answers", value: correctCount },
    { name: "Incorrect Answers", value: wrongCount },
  ];

  const handleRating = async (rating) => {
    const ratingURL = "https://secure-backend-qvault.com/deck-rating";
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(ratingURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ deckId, rating }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit rating");
      }

      const responseData = await response.json();
      setHasBeenRated(true);
    } catch (error) {
      console.error("Error submitting rating:", error);
      alert("Error submitting rating: " + error.message);
    }
  };

  const COLORS = ["#45d43d", "#d43d3d"];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.top}>
        <h2 className={styles.title}>Review</h2>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.topTwo}>
          <div className={styles.rectangle}>
            <p className={styles.summaryText}>Correctness</p>
          </div>
          <div className={styles.circle}>
            <p className={styles.content}>
              {correctCount}/{wrongCount + correctCount}
            </p>
          </div>
        </div>
        <div className={styles.bottomOne}>
          <div className={styles.rectangle}>
            <p className={styles.summaryText}>Facility</p>
          </div>
          <div className={styles.circle}>
            <p className={styles.content}>/</p>
          </div>
        </div>
        <div className={styles.bottomTwo}>
          <div className={styles.rectangle}>
            <p className={styles.summaryText}>Point biserial</p>
          </div>
          <div className={styles.circle}>
            <p className={styles.content}>/</p>
          </div>
        </div>
        <div className={styles.bottomThree}>
          <div className={styles.rectangle}>
            <p className={styles.summaryText}>Discrimination</p>
          </div>
          <div className={styles.circle}>
            <p className={styles.content}>/</p>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {
          <div className={styles.returnButtonContainer}>
            <button
              onClick={() => navigate("/dashboard")}
              className={styles.returnButton}
            >
              Back to Dashboard
            </button>
          </div>
        }

        {!hasBeenRated && (
          <div className={styles.ratingButtonsContainer}>
            {/* Rating buttons */}
            <button
              onClick={() => {
                handleRating("good");
              }}
              className={styles.rateButton}
            >
              👍
            </button>
            <button
              onClick={() => {
                handleRating("bad");
              }}
              className={styles.rateButton}
            >
              👎
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
