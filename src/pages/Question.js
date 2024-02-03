import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../components/ui/QuestionCard";
import styles from "./Question.module.css";
import ScoreBoard from "../components/ui/ScoreBoard";
import ReferenceTable from "../components/ui/ReferenceTable";
import useBodyClass from "./useBodyClass";

const questionStack = [
  {
    id: 1,
    questionStem:
      "Sandy Hughes, 67, presents to A&E with chest pain. She describes 12 hours of sharp chest discomfort on inspiration, which started suddenly just after she arrived back from her flight to Florida. Her oxygen saturation is 94% on 2 litres of oxygen and her respiratory rate is 28.",
    questionLeadIn: "What is the most likely ECG finding for this patient?",
    options: [
      "Right axis deviation",
      "SI QIII TIII pattern",
      "Sinus tachycardia",
      "ST elevation in three contiguous leads",
      "Widespread saddle-shaped ST elevation",
    ],
    optionsPercentage: ["10", "20", "30", "30", "10"],
    correctAnswer: "Sinus tachycardia",
    explanation:
      "The most likely ECG finding in this patient is sinus tachycardia. This patient has presented with the classic signs of a pulmonary embolism (PE)- recent travel, sudden onset chest pain which is worse on inspiration, and increased respiratory rate with low oxygen saturations. ECG findings in PE can include right axis deviation, sinus tachycardia, and the oft-mentioned but rarely seen SI QIII TIII pattern. Of these, the most likely is sinus tachycardia. ST elevation in three contiguous leads would be seen in an ST-elevation myocardial infarction rather than a PE, and widespread saddle-shaped ST elevation is indicative of pericarditis.",
  },
  {
    id: 2,
    questionStem: "Which planet is known as the Red Planet?",
    questionLeadIn: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn", "Mercury"],
    optionsPercentage: ["30", "10", "20", "30", "10"],
    correctAnswer: "Mars",
    explanation:
      "Mars is often referred to as the Red Planet due to its reddish appearance.",
  },
  {
    id: 3,
    questionStem: "Who wrote 'Romeo and Juliet'?",
    questionLeadIn: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
      "Emily Bronte",
    ],
    optionsPercentage: ["10", "10", "60", "10", "10"],
    correctAnswer: "William Shakespeare",
    explanation:
      "William Shakespeare wrote the famous play 'Romeo and Juliet.'",
  },
  {
    id: 4,
    questionStem: "What is the largest mammal?",
    questionLeadIn: "What is the largest mammal?",
    options: [
      "Elephant",
      "Blue Whale",
      "Giraffe",
      "Hippopotamus",
      "Rhinoceros",
    ],
    optionsPercentage: ["10", "60", "10", "10", "10"],
    correctAnswer: "Blue Whale",
    explanation: "The Blue Whale is the largest mammal on Earth.",
  },
  {
    id: 5,
    questionStem: "In which year did World War II end?",
    questionLeadIn: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950", "1952"],
    optionsPercentage: ["10", "60", "10", "10", "10"],
    correctAnswer: "1945",
    explanation: "World War II ended in the year 1945.",
  },
  {
    id: 6,
    questionStem:
      "In which year did World War II end? In which year did World War II end? In which year did World War II end? In which year did World War II end? In which year did World War II end? In which year did World War II end? In which year did World War II end?In which year did World War II end? In which year did World War II end?  ",
    questionLeadIn: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950", "1952"],
    optionsPercentage: ["10", "60", "10", "10", "10"],
    correctAnswer: "1945",
    explanation: "World War II ended in the year 1945.",
  },
];

const QuestionPage = () => {
  useBodyClass(styles.questionBody);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isReferenceVisible, setReferenceVisibility] = useState(false);
  const [ratings, setRatings] = useState({}); // State to store ratings and reasons
  const [bookmarks, setBookmarks] = useState({}); // State to store bookmarks
  const isLastQuestion = currentQuestionIndex === questionStack.length - 1;
  // Add a state for the question stack fetched from the API
  const [apiQuestionStack, setApiQuestionStack] = useState([]);

  // Add a state for handling loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch question stack from the API when the component mounts
  useEffect(() => {
    setIsLoading(true);
    fetch("YOUR_API_URL") // Replace with your actual API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions!");
        }
        return response.json();
      })
      .then((data) => {
        setApiQuestionStack(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    if (answered) return;

    const isCorrect =
      selectedAnswer === questionStack[currentQuestionIndex].correctAnswer;
    //selectedAnswer === apiQuestionStack[currentQuestionIndex].correctAnswer;

    setUserAnswers([
      ...userAnswers,
      { questionId: currentQuestionIndex + 1, selectedAnswer, isCorrect },
    ]);

    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    setAnswered(true);
  };

  const toggleReference = () => {
    setReferenceVisibility(!isReferenceVisible);
  };

  const handleNextQuestion = () => {
    if (!answered) return;
    let answeredCount = correctCount + wrongCount;

    if (currentQuestionIndex + 1 < questionStack.length) {
      //if (currentQuestionIndex + 1 < apiQuestionStack.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      if (answeredCount === currentQuestionIndex + 1) {
        setAnswered(false);
      }
    } else {
      // Handle end of the question stack
      // You can redirect to a summary page or do something else
      console.log("End of questions");
    }
  };

  const handleSubmitTest = () => {};

  const handleScoreItemClick = (index) => {
    setCurrentQuestionIndex(index);
    setAnswered(true);
  };

  // Function to handle rating
  const handleRating = (questionId, rating) => {
    // Check if question is already rated
    if (!ratings[questionId]) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [questionId]: { rating },
      }));
      if (!isLastQuestion) {
        handleNextQuestion();
      }
    }
  };

  // Function to handle wrong reason submission
  const handleWrongReasonSubmit = (questionId, reason) => {
    const currentRating = ratings[questionId];

    // Check if the question has a 'wrong' rating and no reason has been submitted yet
    if (
      currentRating &&
      currentRating.rating === "wrong" &&
      !currentRating.reason
    ) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [questionId]: { ...currentRating, reason },
      }));
      handleNextQuestion();
    }
  };

  const toggleBookmark = (questionId) => {
    setBookmarks((prevBookmarks) => ({
      ...prevBookmarks,
      [questionId]: !prevBookmarks[questionId],
    }));
  };

  const currentQuestion = questionStack[currentQuestionIndex];
  //const currentQuestion = apiQuestionStack[currentQuestionIndex];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.navBar}>
        <div className={styles.leftContainer}>
          <div className={styles.referenceContainer}>
            <button
              className={styles.referenceButton}
              onClick={toggleReference}
            >
              Reference▼
            </button>
            {isReferenceVisible && (
              <div
                className={`${styles.referenceMenu} ${
                  isReferenceVisible ? styles.referenceMenuVisible : ""
                }`}
              >
                <ReferenceTable />
              </div>
            )}
          </div>
          <a className={styles.itemContainer} href="https://bnf.nice.org.uk">
            <p
              
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              BNF
            </p>
          </a>
          <a className={styles.itemContainer} href="https://www.nice.org.uk">
            <p
              
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              NICE
            </p>
          </a>
          <a className={styles.itemContainer} href="https://www.uptodate.com/contents/table-of-contents/primary-care-adult/general-medicine">
            
            <p
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              UpToDate
            </p>
          </a>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.submitContainer} onClick={handleSubmitTest}>
            <Link className={styles.submitLink}>
              Submit & Review
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.questionContent}>
        <QuestionCard
          question={currentQuestion}
          options={currentQuestion.options}
          optionsPercentage={currentQuestion.optionsPercentage}
          explanation={currentQuestion.explanation}
          handleAnswerClick={handleAnswerClick}
          handleNextQuestion={handleNextQuestion}
          answered={answered}
          correctAnswer={currentQuestion.correctAnswer}
          selectedAnswer={
            userAnswers.length > 0
              ? userAnswers[userAnswers.length - 1].selectedAnswer
              : null
          }
          userAnswers={userAnswers}
          handleRating={(rating) => handleRating(currentQuestion.id, rating)}
          handleWrongReasonSubmit={(reason) =>
            handleWrongReasonSubmit(currentQuestion.id, reason)
          }
          hasBeenRated={!!ratings[currentQuestion.id]}
          isBookmarked={bookmarks[currentQuestion.id]}
          toggleBookmark={() => toggleBookmark(currentQuestion.id)}
          isLastQuestion={isLastQuestion}
          handleSubmitTest={handleSubmitTest}
        />
        <div className={styles.scoreBoardContainer}>
          <ScoreBoard
            userAnswers={userAnswers}
            onScoreItemClick={handleScoreItemClick}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
