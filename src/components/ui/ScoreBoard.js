import React from "react";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ userAnswers, onScoreItemClick }) => {
  const correctAnswersCount = userAnswers.filter(answer => answer.isCorrect).length;
  const correctPercentage = (correctAnswersCount / userAnswers.length * 100).toFixed(2);

  return (
    <div className={styles.scoreBoard}>
      <h3 className={styles.title}>Scoreboard</h3>
      <ul className={styles.questionList}>
        {userAnswers.map((answer, index) => (
          <li
            key={index}
            onClick={() => onScoreItemClick(index)}
            className={answer.isCorrect ? styles.correct : styles.wrong}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <div className={styles.scoreStats}>
        <p>Correct Answers: {correctAnswersCount}</p>
        <p>Wrong Answers: {userAnswers.filter(answer => !answer.isCorrect).length}</p>
        {/* <p>Total Questions Answered: {userAnswers.length}</p> */}
        {/* New line for correct percentage */}
        <p>Correct Percentage: {isNaN(correctPercentage) ? '0.00' : correctPercentage}%</p>
        <p>Facility: Coming Soon</p>
        <p>Discrimination: Coming Soon</p>
        <p>Point biserial: Coming Soon</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
