import React, { useState, useEffect } from 'react';
import QuizCard from '../../components/QuizCard';

const QuizPage = () => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchRandomQuestion = async () => {
      try {
        const response = await fetch('https://the-trivia-api.com/v2/questions/');
        const data = await response.json();

        // Assuming data is an array of questions
        const randomQuestion = getRandomQuestion(data);

        // Check if the question is valid before setting it
        if (randomQuestion && randomQuestion.question && randomQuestion.incorrectAnswers) {
          setQuestion({
            text: randomQuestion.question.text,
            category: randomQuestion.category,
            correctAnswer: randomQuestion.correctAnswer,
            incorrectAnswers: randomQuestion.incorrectAnswers,
          });
        } else {
          console.error('Invalid question data:', randomQuestion);
        }
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

  const handleOptionClick = (selectedOption) => {
    // Handle the selected option
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div>
      <h1>Quiz Page</h1>
      {question && <QuizCard question={question} handleOptionClick={handleOptionClick} />}
    </div>
  );
};

export default QuizPage;