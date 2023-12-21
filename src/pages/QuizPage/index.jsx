import React, { useState, useEffect } from 'react';
import QuizCard from '../../components/QuizCard';
import axios from 'axios';
import './index.css';

const QuizPage = () => {
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchRandomQuestion();
  }, []);

  const fetchRandomQuestion = async () => {
    try {
      const response = await fetch('https://the-trivia-api.com/v2/questions/');
      const data = await response.json();

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

  const getRandomQuestion = (questions) => {
    if (questions && questions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      return questions[randomIndex];
    }
    return null;
  };

  const updateDbScore = async () => {
    const storedToken = localStorage.getItem('token')
    let username = ''
    if (storedToken) {
      const tokenParts = storedToken.split(' ')[1].split('.');
      if (tokenParts.length === 3) {
          const payload = tokenParts[1];
          const decodedPayload = atob(payload); // Base64 decode
          const payloadObj = JSON.parse(decodedPayload);
          username = payloadObj.username;
      }
  }
    const obj = {
      username: username,
      score: 1
    }
    try {
      await axios.patch('https://reddy-34-xnzz.onrender.com/user/update', obj)
    } catch (error) {
      console.error('Error fetching flashcards:', error)
    }

  }

  const handleOptionClick = (selectedOption) => {
    // Check if the selected option is correct
    const isCorrect = question.correctAnswer === selectedOption;

    // If the selected option is correct, update the score and fetch a new question
    if (isCorrect) {
      updateDbScore()
      setScore((prevScore) => prevScore + 1);
      fetchRandomQuestion();
    } else {
      // If the selected option is incorrect, fetch a new question without updating the score
      fetchRandomQuestion();
    }
  };

  return (
    <div className='quiz-page'>
      <h1>Educational Quiz</h1>
      <p>Score: {score}</p>
      {question && <QuizCard question={question} handleOptionClick={handleOptionClick} score={score} />}
    </div>
  );
};

export default QuizPage;
