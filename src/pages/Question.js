import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../components/ui/QuestionCard";
import styles from "./Question.module.css";
import ScoreBoard from "../components/ui/ScoreBoard";

const questionStack = [
  {
    id: 1,
    question: "What is the capital of Germany?",
    options: ["Berlin", "Madrid", "Paris", "Rome", "Vienna"],
    optionsPercentage: ["10", "20", "30", "30", "10"],
    correctAnswer: "Berlin",
    explanation: "Berlin is the capital of Germany.",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn", "Mercury"],
    optionsPercentage: ["30", "10", "20", "30", "10"],
    correctAnswer: "Mars",
    explanation: "Mars is often referred to as the Red Planet due to its reddish appearance.",
  },
  {
    id: 3,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain", "Emily Bronte"],
    optionsPercentage: ["10", "10", "60", "10", "10"],
    correctAnswer: "William Shakespeare",
    explanation: "William Shakespeare wrote the famous play 'Romeo and Juliet.'",
  },
  {
    id: 4,
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus", "Rhinoceros"],
    optionsPercentage: ["10", "60", "10", "10", "10"],
    correctAnswer: "Blue Whale",
    explanation: "The Blue Whale is the largest mammal on Earth.",
  },
  {
    id: 5,
    question: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950", "1952"],
    optionsPercentage: ["10", "60", "10", "10", "10"],
    correctAnswer: "1945",
    explanation: "World War II ended in the year 1945.",
  },
  {
    id: 6,
    question: "In which year did World War II end? In which year did World War II end? In which year did World War II end? In which year did World War II end? In which year did World War II end? In which year did World War II end? In which year did World War II end?In which year did World War II end? In which year did World War II end?  ",
    options: ["1943", "1945", "1947", "1950", "1952"],
    optionsPercentage: ["10", "60", "10", "10", "10"],
    correctAnswer: "1945",
    explanation: "World War II ended in the year 1945.",
  },
];

  

const QuestionPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isReferenceVisible, setReferenceVisibility] = useState(false);
  const [ratings, setRatings] = useState({}); // State to store ratings and reasons

  const handleAnswerClick = (selectedAnswer) => {
    if (answered) return;
  
    const isCorrect = selectedAnswer === questionStack[currentQuestionIndex].correctAnswer;
  
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

  const handleScoreItemClick = (index) => {
    setCurrentQuestionIndex(index);
    setAnswered(true);
  };

    // Function to handle rating
  const handleRating = (questionId, rating) => {
    // Check if question is already rated
    if (!ratings[questionId]) {
      setRatings(prevRatings => ({
        ...prevRatings,
        [questionId]: { rating }
      }));
      handleNextQuestion();
    }
  };

// Function to handle wrong reason submission
  const handleWrongReasonSubmit = (questionId, reason) => {
    const currentRating = ratings[questionId];

    // Check if the question has a 'wrong' rating and no reason has been submitted yet
    if (currentRating && currentRating.rating === 'wrong' && !currentRating.reason) {
      setRatings(prevRatings => ({
        ...prevRatings,
        [questionId]: { ...currentRating, reason }
      }));
      handleNextQuestion();
    }
  };




  const currentQuestion = questionStack[currentQuestionIndex];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.navBar}>
        <div className={styles.leftContainer}>
          <Link to="/" className={styles.navLink}>
            BNF
          </Link>
          <Link to="/" className={styles.navLink}>
            NICE
          </Link>
          <Link to="/" className={styles.navLink}>
            UpToDate
          </Link>
          <div className={styles.referenceContainer}>
            <button className={styles.referenceButton} onClick={toggleReference}>
              Reference
            </button>
            {isReferenceVisible && (
              <div className={styles.referenceMenu}>
                <p>Some random information here.</p>
                <p>More details and content.</p>
              </div>
            )}
          </div>
        </div>
        <Link to="/" className={styles.submitLink}>
          Submit & Review
        </Link>
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
          selectedAnswer={userAnswers.length > 0 ? userAnswers[userAnswers.length - 1].selectedAnswer : null}
          userAnswers={userAnswers}
          handleRating={(rating) => handleRating(currentQuestion.id, rating)}
          handleWrongReasonSubmit={(reason) => handleWrongReasonSubmit(currentQuestion.id, reason)}
          hasBeenRated={!!ratings[currentQuestion.id]}
        />
        <div className={styles.scoreBoardContainer}>
          <ScoreBoard userAnswers={userAnswers} onScoreItemClick={handleScoreItemClick} />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;