import React, { useEffect } from 'react';
import './index.css';

const AnswerOption = ({ option, handleOptionClick }) => {
  return (
    <li>
      <button className="answer-button" onClick={handleOptionClick}>
        {option}
      </button>
    </li>
  );
};

const QuizCard = ({ question, handleOptionClick }) => {
  useEffect(() => {
    if (!question) {
      // Fetch a new question only if one is not provided
      handleOptionClick();
    }
  }, [question, handleOptionClick]);

  if (!question || !question.incorrectAnswers || !Array.isArray(question.incorrectAnswers)) {
    return <p role="loading">Loading...</p>;
  }

  const { text, category, correctAnswer, incorrectAnswers } = question;
  const options = [correctAnswer, ...incorrectAnswers];

  return (
    <div className="quiz-card-container">
      <div className="question-box">
        <h3>{text}</h3>
        <p role="category">Category: {category}</p>
      </div>
      <div className="quiz-card-content">
        <ul className="answer-options">
          {options.sort((a, b) => 0.5 - Math.random()).map((option, index) => (
            <AnswerOption
              key={index}
              option={option}
              handleOptionClick={() => handleOptionClick(option)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizCard;

