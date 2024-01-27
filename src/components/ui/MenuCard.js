import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuCard.module.css";

function MenuCard() {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleSelection = (item, setFunction, array, multiple = true) => {
    const currentIndex = array.indexOf(item);
    let newSelection = [...array];

    if (currentIndex === -1) {
      newSelection = multiple ? [...array, item] : [item];
    } else if (multiple) {
      newSelection.splice(currentIndex, 1);
    }

    setFunction(newSelection);
  };

  const canSubmit =
    difficulty !== "" &&
    numberOfQuestions !== "" &&
    selectedTopics.length > 0 &&
    selectedTypes.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    // Redirect to /dashboard
    navigate("/question");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.menuCard}>
      <div className={styles.menuSection}>
        <h3 className={styles.menuLabel}>Topic:</h3>
        {["A", "B", "C"].map((topic) => (
          <span
            key={topic}
            className={`${styles.menuButton} ${
              selectedTopics.includes(topic) ? styles.selected : ""
            }`}
            onClick={() =>
              toggleSelection(topic, setSelectedTopics, selectedTopics)
            }
          >
            {topic}
          </span>
        ))}
      </div>
      <div className={styles.menuSection}>
        <h3 className={styles.menuLabel}>Difficulty:</h3>
        {["Easy", "Medium", "Hard"].map((level) => (
          <span
            key={level}
            className={`${styles.menuButton} ${
              difficulty === level ? styles.selected : ""
            }`}
            onClick={() => setDifficulty(level)}
          >
            {level}
          </span>
        ))}
      </div>
      <div className={styles.menuSection}>
        <h3 className={styles.menuLabel}>Number of Questions:</h3>
        {["10", "20", "30"].map((number) => (
          <span
            key={number}
            className={`${styles.menuButton} ${
              numberOfQuestions === number ? styles.selected : ""
            }`}
            onClick={() => setNumberOfQuestions(number)}
          >
            {number}
          </span>
        ))}
      </div>
      <div className={styles.menuSection}>
        <h3 className={styles.menuLabel}>Question Type:</h3>
        {["Type 1", "Type 2", "Type 3"].map((type) => (
          <span
            key={type}
            className={`${styles.menuButton} ${
              selectedTypes.includes(type) ? styles.selected : ""
            }`}
            onClick={() =>
              toggleSelection(type, setSelectedTypes, selectedTypes)
            }
          >
            {type}
          </span>
        ))}
      </div>
      {canSubmit && (
        <button type="submit" className={styles.submitButton}>
          Generate
        </button>
      )}
    </form>
  );
}

export default MenuCard;
