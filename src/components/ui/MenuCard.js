import React, { useState } from "react";
import styles from "./MenuCard.module.css";

function MenuCard({ handleSubmit }) {
  // const [selectedTopics, setSelectedTopics] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState("");
  // const [selectedTypes, setSelectedTypes] = useState([]);
  const [modelUsed, setModelUsed] = useState("");
  const questionNumbers = ["10", "20", "30"];
  const questionModel = ["Sonic", "Yoda"];

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

  const canSubmit = numberOfQuestions !== "" && modelUsed !== "";
  // && selectedTopics.length > 0 &&
  // selectedTypes.length > 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(numberOfQuestions, modelUsed);
      }}
      className={styles.menuCard}
    >
      {/* <div className={styles.menuSection}>
        <h3 className={styles.menuLabel}>Topic:</h3>
        {topics.map((topic) => (
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
      </div> */}
      <div className={styles.menuSection}>
        <h3 className={styles.menuLabel}>Number of Questions:</h3>
        {questionNumbers.map((number) => (
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
        <h3 className={styles.menuLabel}>AI Model:</h3>
        {questionModel.map((model) => (
          <span
            key={model}
            className={`${styles.modelButton} ${
              modelUsed === model ? styles.selected : ""
            }`}
            onClick={() => setModelUsed(model)}
            data-tooltip={
              model === "Sonic" ? "Fast but Reckless" : "Slow but Wiser"
            }
          >
            {model}
          </span>
        ))}
      </div>

      {/* <div className={styles.menuSection}>
        <h3 className={styles.menuLabel}>Question Type:</h3>
        {questionTypes.map((type) => (
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
      </div> */}
      {canSubmit && (
        <button type="submit" className={styles.submitButton}>
          Generate
        </button>
      )}
    </form>
  );
}

export default MenuCard;
