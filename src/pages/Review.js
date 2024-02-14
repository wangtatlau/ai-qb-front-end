import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useLocation } from "react-router-dom";
import styles from "./Review.module.css"; // Import the CSS module
import useBodyClass from "./useBodyClass";

const ReviewPage = () => {
  const location = useLocation();
  const { correctCount, wrongCount } = location.state || {
    correctCount: 0,
    wrongCount: 0,
  };
  const totalCount = correctCount + wrongCount;
  const correctPercentage = totalCount
    ? ((correctCount / totalCount) * 100).toFixed(2)
    : 0;

  useBodyClass(styles.ReviewBody);
  const data = [
    { name: "Correct Answers", value: correctCount },
    { name: "Incorrect Answers", value: wrongCount },
  ];

  const COLORS = ["#4caf50", "#f44336"]; // Green for correct, Red for incorrect

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.chartContainer}>
        <h2 className={styles.chartTitle}>Quiz Results</h2>{" "}
        {/* Add a title for the chart */}
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className={styles.percentageDisplay}>
          Correct: {correctPercentage}%
        </div>
        <div className={styles.percentageDisplay}>
          Incorrect: {100-correctPercentage}%
        </div>
      </div>
      <div className={styles.summaryContainer}>
        <h2 className={styles.summaryHeading}>Review Summary</h2>
        <p className={styles.summaryText}>
          You answered a total of {correctCount + wrongCount} questions.
        </p>
        <p className={styles.summaryText}>{correctCount} were correct.</p>
        <p className={styles.summaryText}>{wrongCount} were incorrect.</p>
      </div>
    </div>
  );
};

export default ReviewPage;
