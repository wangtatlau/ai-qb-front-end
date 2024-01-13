import React from "react";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ userAnswers, onScoreItemClick }) => {
  return (
    <div className={styles.scoreBoard}>
      <h3>Score Board</h3>
      <ul>
        {userAnswers.map((answer, index) => (
          <li key={index} onClick={() => onScoreItemClick(index)}>
            {index + 1}. {answer.isCorrect ? "Correct" : "Wrong"}
          </li>
        ))}
      </ul>
      {/* Move the statistics to the bottom */}
      <div className={styles.scoreStats}>
        <p>Correct Answers: {userAnswers.filter(answer => answer.isCorrect).length}</p>
        <p>Wrong Answers: {userAnswers.filter(answer => !answer.isCorrect).length}</p>
        <p>Total Questions Answered: {userAnswers.length}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
