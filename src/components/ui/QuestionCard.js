import React from "react";
import styles from "./QuestionCard.module.css";

const QuestionCard = ({
  question,
  options,
  optionsPercentage,
  explanation,
  handleAnswerClick,
  answered,
  correctAnswer,
  selectedAnswer,
  userAnswers,
}) => {
  return (
    <div className={`${styles.cardContainer} ${answered ? styles.answered : ""}`}>
      <h2>{question.id}. {question.question}</h2>
      <p className={styles.question}>{question.question}</p>
      <ul className={`${styles.optionsList} ${styles.vertical}`}>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)} className={styles.optionItem}>
            <div className={styles.optionContent}>
              <button
                disabled={answered}
                className={styles.optionText}
              >
                {option}
              </button>
              <div>
                {answered && (
                  <span>
                    {option === correctAnswer ? (
                      <span style={{ color: "green", marginLeft: "10px" }}>✔</span>
                    ) : (
                      <span style={{ color: "red", marginLeft: "10px" }}>✘</span>
                    )}
                  </span>
                )}
                {answered && (
                  <span className={styles.optionPercentage}>
                    {optionsPercentage[index]}%
                  </span>
                )}
              </div>
            </div>
            <div className={styles.overlayBarContainer}>
              {answered && (
                <div
                  className={`${styles.overlayBar} ${
                    option === correctAnswer
                      ? styles.correctOverlay
                      : styles.wrongOverlay
                  }`}
                  style={{ width: `${optionsPercentage[index]}%` }}
                ></div>
              )}
            </div>
          </li>
        ))}
      </ul>
      {answered && (
        <div className={styles.explanationContainer}>
          <p className={styles.explanation}>
            {userAnswers.map((answer) => (
              answer.questionId === question.id ? (
                <span key={answer.questionId}>
                  {answer.isCorrect ? (
                    <span style={{ color: "green" }}>Correct!</span>
                  ) : (
                    <span style={{ color: "red" }}>Incorrect.</span>
                  )}
                </span>
              ) : null
            ))}
            {correctAnswer === selectedAnswer ? "" : ` Correct answer: ${correctAnswer}`}
            <br></br>
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
