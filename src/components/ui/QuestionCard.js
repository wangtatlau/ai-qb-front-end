import React, { useState } from "react";
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
  handleRating,
  handleWrongReasonSubmit,
  hasBeenRated,
}) => {
  const userAnswerForCurrentQuestion = userAnswers.find(answer => answer.questionId === question.id);

  const [isWrongReasonVisible, setWrongReasonVisible] = useState(false);
  const [wrongReason, setWrongReason] = useState("");

  const handleWrongRating = () => {
    setWrongReasonVisible(true);
  };

  const handleReasonChange = (event) => {
    setWrongReason(event.target.value);
  };

  const submitWrongReason = () => {
    if (wrongReason) {
      handleWrongReasonSubmit(wrongReason);
      handleRating('wrong');
      setWrongReasonVisible(false);
      setWrongReason("");
    }
  };

  return (
    <div className={`${styles.cardContainer} ${answered ? styles.answered : ""}`}>
      <h2 className={styles.questionStem}>{question.id}. {question.questionStem}</h2>
      <h2 className={styles.questionLeadIn}>{question.questionLeadIn}</h2>
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
                    {((userAnswerForCurrentQuestion && option === userAnswerForCurrentQuestion.selectedAnswer)) ? (
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
            <br></br>
            {explanation}
          </p>
        </div>
      )}
      {answered && hasBeenRated && (
        <div className={styles.nextButtonContainer}>
          <button
            onClick={handleNextQuestion}
            className={styles.nextButton}
          >
            Next Question
          </button>
        </div>
      )}
      {answered && !hasBeenRated && (
        <div className={styles.ratingButtonsContainer}>
          {/* Rating buttons */}
          <button 
            onClick={() => {
              handleRating('good');
              setWrongReasonVisible(false);
            }} 
            className={styles.rateButton}
          >
            👍
          </button>
          <button 
            onClick={() => {
              handleRating('normal');
              setWrongReasonVisible(false);
            }} 
            className={styles.rateButton}
          >
            👌
          </button>
          <button onClick={handleWrongRating} className={styles.rateButton}>⚠️</button>
        </div>
      )}
      {isWrongReasonVisible && (
        <div className={styles.wrongReasonContainer}>
          <input
            type="text"
            value={wrongReason}
            onChange={handleReasonChange}
            className={styles.reasonInput}
            placeholder="Enter reason for incorrect question"
          />
          <button onClick={submitWrongReason} className={styles.submitReasonButton}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
