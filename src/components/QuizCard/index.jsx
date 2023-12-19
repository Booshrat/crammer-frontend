import React, { useState, useEffect } from 'react';

const QuizCard = () => {
  const [question, setQuestion] = useState({
    text: '',
    options: [],
  });
  
  useEffect(() => {
    // Fetch question from your API
    // Update the state with the fetched question
  }, []);
  
  const handleOptionClick = (selectedOption) => {
    // Handle the selected option
  };

  return (
    <div>
      <h3>{question.text}</h3>
      <ul>
        {question.options.map((option, index) => (
          <AnswerOption key={index} option={option} />
        ))}
      </ul>
    </div>
  );
};

const AnswerOption = ({ option }) => {
  return (
    <li>
      <button>{option}</button>
    </li>
  );
};

export default QuizCard;