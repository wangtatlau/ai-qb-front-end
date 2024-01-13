import React from "react";
import styles from "./QuestionCard.module.css";

const QuestionCard = ({
  question,
  options,
  optionsPercentage,
  explanation,
  handleAnswerClick,
  handleNextQuestion,
  answered,
  correctAnswer,
  selectedAnswer,
  userAnswers,
}) => {
  const userAnswerForCurrentQuestion = userAnswers.find(answer => answer.questionId === question.id);

  return (
    <div className={`${styles.cardContainer} ${answered ? styles.answered : ""}`}>
      <h2 className={styles.questionStem}>{question.id}. {question.question}</h2>
      <p className={styles.questionLeadIn}>{question.question}</p>
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
                    {(option === selectedAnswer || (userAnswerForCurrentQuestion && option === userAnswerForCurrentQuestion.selectedAnswer)) ? (
                      <span style={{ color: (option === correctAnswer) ? "green" : "red", marginLeft: "10px" }}>
                        {option === correctAnswer ? "✔" : "✘"}
                      </span>
                    ) : null}
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
            {userAnswerForCurrentQuestion && (
              <span>
                {userAnswerForCurrentQuestion.isCorrect ? (
                  <span style={{ color: "green" }}>Correct!</span>
                ) : (
                  <span style={{ color: "red" }}>Incorrect.</span>
                )}
              </span>
            )}
            {correctAnswer === selectedAnswer ? "" : ` Correct answer: ${correctAnswer}`}
            <br></br>
            {explanation}
          </p>
        </div>
      )}
      {answered && (
        <div className={styles.nextButtonContainer}>
          <button
            onClick={handleNextQuestion}
            className={styles.nextButton}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;