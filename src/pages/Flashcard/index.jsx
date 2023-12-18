import React, { useState } from 'react';
import './index.css';
import { Modal } from '../../components';

const initialFlashcards  = [
    { question: 'What is 2+2?', answer: '4' },
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 5x5?', answer: '25' },
    { question: 'What is 10x10?', answer: '100' },
    { question: 'What is 6x8?', answer: '48' },
];

const FlashCard = () => {
    const [flashcards, setFlashcards] = useState(initialFlashcards);
    const [currentIndex, setCurrentIndex] = useState(0);

    const shuffleFlashcards = () => {
        const shuffled = [...flashcards];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setFlashcards(shuffled);
        setCurrentIndex(0); // Reset to the first card
    };

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const goPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    };

    const addFlashcard = (newCard) => {
        setFlashcards([...flashcards, newCard])
    }

    const currentCard = flashcards[currentIndex];
    console.log(flashcards)

    return (
        <>
            <div className="flashcard-container">
                <button onClick={goPrev}>Prev</button>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1>{currentCard.question}</h1>
                            <span><i>hover to flip card</i></span>
                        </div>
                        <div className="flip-card-back">
                            <h1>{currentCard.answer}</h1>
                        </div>
                    </div>
                </div>
                <button onClick={goNext}>Next</button>
                <br />
                <button onClick={shuffleFlashcards} style={{justifyItems: 'center'}}>Shuffle</button>

            </div>
            <Modal addFlashcard={addFlashcard}/>

        </>
    );
};

export default FlashCard;
