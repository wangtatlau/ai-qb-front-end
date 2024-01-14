import React from "react";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ userAnswers, onScoreItemClick }) => {
  return (
    <div className={styles.scoreBoard}>
      <h3 className={styles.title}>Score Board</h3>
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
        <p>Correct Answers: {userAnswers.filter(answer => answer.isCorrect).length}</p>
        <p>Wrong Answers: {userAnswers.filter(answer => !answer.isCorrect).length}</p>
        <p>Total Questions Answered: {userAnswers.length}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
