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
  isBookmarked,
  toggleBookmark,
  isLastQuestion,
  handleSubmitTest,
  handleRightClick,
  strikedOptions,
  recordTimeStamp,
  likeCount,
}) => {
  const userAnswerForCurrentQuestion = userAnswers.find(
    (answer) => answer.questionId === question.id
  );
  const bookmarkButtonClass = isBookmarked
    ? styles.bookmarkButtonBookmarked
    : styles.bookmarkButtonUnbookmarked;

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
      setWrongReasonVisible(false);
      setWrongReason("");
    }
  };

  const onOptionRightClick = (event, option) => {
    event.preventDefault(); // Prevents the default context menu from opening
    handleRightClick(option);
  };

  return (
    <div
      className={`${styles.cardContainer} ${answered ? styles.answered : ""}`}
    >
      <div className={styles.questionHeader}>
        <div className={styles.fullQuestionContainer}>
          <h2 className={styles.questionStem}>
            {question.id}. {question.questionStem}
          </h2>
          <h2 className={styles.questionLeadIn}>{question.questionLeadIn}</h2>
        </div>
        <div className={styles.bookmarkButtonContainer}>
          <button
            onClick={() => {
              if (isBookmarked) {
                recordTimeStamp("unlike");
              } else {
                recordTimeStamp("like");
              }
              toggleBookmark();
            }}
            className={`${styles.bookmarkButton} ${bookmarkButtonClass}`}
          >
            {isBookmarked ? "♥️" : "♡"}
          </button>
        </div>
      </div>
      <ul className={`${styles.optionsList} ${styles.vertical}`}>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => {
              handleAnswerClick(option, index);
              if (!answered) {
                recordTimeStamp(`option${index}`);
              }
            }}
            onContextMenu={(event) => {
              onOptionRightClick(event, option);
              if (strikedOptions.includes(option)) {
                recordTimeStamp(`unstrike${index}`);
              } else {
                recordTimeStamp(`strike${index}`);
              }
            }}
            className={styles.optionItem}
          >
            <div className={styles.optionContent}>
              <button
                disabled={answered}
                className={`${styles.optionText} ${
                  answered && option === correctAnswer
                    ? styles.optionCorrect
                    : answered &&
                      userAnswerForCurrentQuestion &&
                      userAnswerForCurrentQuestion.selectedAnswer === option
                    ? styles.optionIncorrect
                    : ""
                } ${
                  strikedOptions.includes(option) ? styles.strikethrough : ""
                }`}
              >
                {option}
              </button>
              <div>
                {answered && (
                  <span>
                    {userAnswerForCurrentQuestion &&
                    option === userAnswerForCurrentQuestion.selectedAnswer ? (
                      <span
                        style={{
                          color: option === correctAnswer ? "green" : "red",
                          marginLeft: "10px",
                        }}
                      >
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
          <h2 className={styles.explanation}>
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
          </h2>
        </div>
      )}
      {answered && hasBeenRated && !isLastQuestion && (
        <div className={styles.nextButtonContainer}>
          <button onClick={() => {handleNextQuestion(); recordTimeStamp('next');}} className={styles.nextButton}>
            Next Question
          </button>
        </div>
      )}
      {answered && hasBeenRated && isLastQuestion && (
        <div className={styles.nextButtonContainer}>
          <button onClick={() => {handleSubmitTest(); recordTimeStamp('submit');}} className={styles.nextButton}>
            Submit & Review
          </button>
        </div>
      )}
      {answered && !hasBeenRated && (
        <div className={styles.ratingButtonsContainer}>
          {/* Rating buttons */}
          <button
            onClick={() => {
              handleRating("good");
              setWrongReasonVisible(false);
              recordTimeStamp("good");
            }}
            className={styles.rateButton}
          >
            👍
          </button>
          <button
            onClick={() => {
              handleRating("normal");
              setWrongReasonVisible(false);
              recordTimeStamp("normal");
            }}
            className={styles.rateButton}
          >
            👌
          </button>
          <button
            onClick={() => {
              handleWrongRating();
              recordTimeStamp("bad");
            }}
            className={styles.rateButton}
          >
            ⚠️
          </button>
          {likeCount > 1 && (<p className={styles.likeCount}>Liked by {likeCount} people.</p>)}
          {likeCount === 1 && (<p className={styles.likeCount}>Liked by {likeCount} person.</p>)}
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
          <button
            onClick={() => {submitWrongReason(); recordTimeStamp("submitReason");}}
            className={styles.submitReasonButton}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
