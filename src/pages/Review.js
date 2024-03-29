import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Review.module.css";
import useBodyClass from "./useBodyClass";

const ReviewPage = () => {
  useBodyClass(styles.questionBody);
  const location = useLocation();
  const navigate = useNavigate();
  const { correctCount, wrongCount } = location.state || {
    correctCount: 0,
    wrongCount: 0,
  };

  useBodyClass(styles.ReviewBody);
  const data = [
    { name: "Correct Answers", value: correctCount },
    { name: "Incorrect Answers", value: wrongCount },
  ];

  const COLORS = ["#45d43d", "#d43d3d"];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.top}>
        <h2 className={styles.title}>Review</h2>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.topContainer}>
          <div className={styles.topOne}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={data}
                  cx="50%"
                  cy="50%"
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
            </ResponsiveContainer>
          </div>
          <div className={styles.topTwo}>
            <p className={styles.summaryText}>Correctness</p>
            <p className={styles.correctness}>
              {correctCount}/{wrongCount + correctCount}
            </p>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomOne}>
            <p className={styles.summaryText}>Facility</p>
            <p className={styles.summaryText}>Not Available</p>
          </div>
          <div className={styles.bottomTwo}>
            <p className={styles.summaryText}>Discrimination</p>
            <p className={styles.summaryText}>Not Available</p>
          </div>
          <div className={styles.bottomThree}>
            <p className={styles.summaryText}>Point biserial</p>
            <p className={styles.summaryText}>Not Available</p>
          </div>
        </div>
      </div>

        <button
          className={styles.returnButton}
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

    </div>
  );
};

export default ReviewPage;
