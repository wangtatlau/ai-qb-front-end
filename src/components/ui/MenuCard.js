import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MenuCard.module.css';

function MenuCard() {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState('');
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

  const canSubmit = difficulty !== '' && numberOfQuestions !== '' && selectedTopics.length > 0 && selectedTypes.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here

    // Redirect to /dashboard
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.menuCard}>
      <div>
        <p>Topic:</p>
        {['A', 'B', 'C'].map(topic => (
          <button 
            key={topic} 
            type="button" 
            className={selectedTopics.includes(topic) ? styles.selected : ''} 
            onClick={() => toggleSelection(topic, setSelectedTopics, selectedTopics)}
          >
            {topic}
          </button>
        ))}
      </div>
      <div>
        <p>Difficulty:</p>
        {['Easy', 'Medium', 'Hard'].map(level => (
          <button 
            key={level} 
            type="button" 
            className={difficulty === level ? styles.selected : ''} 
            onClick={() => setDifficulty(level)}
          >
            {level}
          </button>
        ))}
      </div>
      <div>
        <p>Number of Questions:</p>
        {['10', '20', '30'].map(number => (
          <button 
            key={number} 
            type="button" 
            className={numberOfQuestions === number ? styles.selected : ''} 
            onClick={() => setNumberOfQuestions(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <p>Question Type:</p>
        {['A', 'B', 'C'].map(type => (
          <button 
            key={type} 
            type="button" 
            className={selectedTypes.includes(type) ? styles.selected : ''} 
            onClick={() => toggleSelection(type, setSelectedTypes, selectedTypes)}
          >
            {type}
          </button>
        ))}
      </div>
      <button type="submit" disabled={!canSubmit}>Submit</button>
    </form>
  );
}

export default MenuCard;
