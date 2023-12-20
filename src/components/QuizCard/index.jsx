import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'; // Make sure to adjust the path to your CSS file

const QuizCard = ({ handleOptionClick }) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchRandomQuestion = async () => {
      try {
        const response = await axios.get('https://the-trivia-api.com/v2/questions/');
        const randomQuestion = getRandomQuestion(response.data); // Assuming 'results' is an array in your API response
        setQuestion(randomQuestion);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchRandomQuestion();
  }, []);

  const getRandomQuestion = (questions) => {
    if (questions && questions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      return questions[randomIndex];
    }
    return null;
  };

  if (!question || !question.incorrectAnswers || !Array.isArray(question.incorrectAnswers)) {
    return <p role="loading">Loading...</p>;
  }

  const { question: { text }, category, correctAnswer, incorrectAnswers } = question;
  const options = [correctAnswer, ...incorrectAnswers];

  return (
    <div className="quiz-card-container">
      <div className="question-box">
        <h3>{text}</h3>
        <p role="category">Category: {category}</p>
      </div>
      <div className="quiz-card-content">
        <ul className="answer-options">
          {options.map((option, index) => (
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

const AnswerOption = ({ option, handleOptionClick }) => {
  return (
    <li>
      <button className="answer-button" onClick={handleOptionClick}>
        {option}
      </button>
    </li>
  );
};

export default QuizCard;
