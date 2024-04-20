import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuestionCard from "../components/ui/QuestionCard";
import styles from "./Question.module.css";
import ScoreBoard from "../components/ui/ScoreBoard";
import useBodyClass from "./useBodyClass";
import QuestionNavbar from "../components/ui/QuestionNavbar";

const QuestionPage = () => {
  useBodyClass(styles.questionBody);
  const location = useLocation();
  const [deckId, setdeckId] = useState(() => {
    const state = location.state ? location.state.deckId : 0;
    return state;
  });
  const [questionStack, setQuestionStack] = useState(() => {
    const state = location.state ? location.state.questionStack : [];
    return state;
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isReferenceVisible, setReferenceVisibility] = useState(false);
  const [ratings, setRatings] = useState({}); // State to store ratings and reasons
  const [bookmarks, setBookmarks] = useState({}); // State to store bookmarks
  const isLastQuestion = currentQuestionIndex === questionStack.length - 1;
  const [strikedOptions, setStrikedOptions] = useState({});
  const allQuestionsRated =
    Object.keys(ratings).length === questionStack.length;

  const navigate = useNavigate();

  // Fetch question stack from the API when the component mounts

  const handleAnswerClick = (selectedAnswer) => {
    if (answered) return;
    const currentStrikes = strikedOptions[currentQuestionIndex + 1] || [];
    if (currentStrikes.includes(selectedAnswer)) {
      return;
    }

    const isCorrect =
      selectedAnswer === questionStack[currentQuestionIndex].correctAnswer;
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

  const handleRightClick = (questionId, option) => {
    setStrikedOptions(prev => {
      const strikesForQuestion = new Set(prev[questionId] || []);
      if (strikesForQuestion.has(option)) {
        strikesForQuestion.delete(option);
      } else {
        strikesForQuestion.add(option);
      }
      return { ...prev, [questionId]: Array.from(strikesForQuestion) };
    });
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

  const handleSubmitTest = async () => {
    const token = localStorage.getItem("token");
    const endpoint = "http://3.217.124.119/submit-test";
    const payload = {
      userAnswers,
      ratings,
      bookmarks,
      deckId,
    };
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Test submitted successfully:', responseData);
        navigate("/review", { state: { correctCount, wrongCount, deckId } });
      } else {
        throw new Error('Failed to submit test');
      }
    } catch (error) {
      console.error('Error submitting test:', error);
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

  return (
    <div className={styles.pageContainer}>
      <QuestionNavbar
        toggleReference={toggleReference}
        isReferenceVisible={isReferenceVisible}
        handleSubmitTest={handleSubmitTest}
        className={styles.navBar}
        allQuestionsRated={allQuestionsRated}
      />
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
          strikedOptions={strikedOptions[currentQuestion.id] || []}
          handleRightClick={(option) => handleRightClick(currentQuestion.id, option)}
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
