import React, { useEffect, useState } from 'react';
import './index.css';
import { Modal } from '../../components';
import axios from 'axios';

// const initialFlashcards  = [
//     { question: 'What is 2+2?', answer: '4' },
//     { question: 'What is the capital of France?', answer: 'Paris' },
//     { question: 'What is 5x5?', answer: '25' },
//     { question: 'What is 10x10?', answer: '100' },
//     { question: 'What is 6x8?', answer: '48' },
// ];

const FlashCard = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

    const storedToken = localStorage.getItem('token');
    let username = '';

    useEffect(() => {
        const fetchFlashcards = async () => {
            const token = storedToken.split(' ')[1]
            try {
                const response = await axios.get('https://reddy-34-xnzz.onrender.com/flashcard', {
                    headers: { Authorization: `${token}`}
                });
                setFlashcards(response.data);
                setCurrentIndex(0);
                } catch (error) {
                console.error('Error fetching flashcards:', error);
            }
        };

        if (username) {
            fetchFlashcards();
        }
    }, []);


    if (storedToken) {
        const tokenParts = storedToken.split(' ')[1].split('.');
        if (tokenParts.length === 3) {
            const payload = tokenParts[1];
            const decodedPayload = atob(payload); // Base64 decode
            const payloadObj = JSON.parse(decodedPayload);
            username = payloadObj.username;
        }
    }

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

    const deleteFlashcard = async (flashcardId) => {
        const token = storedToken.split(' ')[1]
        try {
            await axios.delete(`https://reddy-34-xnzz.onrender.com/flashcard/${flashcardId}`, {
                headers: { Authorization: `${token}` }
            });

            setFlashcards(flashcards.filter(flashcard => flashcard._id !== flashcardId));

            setShowDeleteSuccess(true);
            setTimeout(() => {
                setShowDeleteSuccess(false);
            }, 2000)

            if (currentIndex >= flashcards.length - 1) {
                setCurrentIndex(0);
            }
        } catch (error) {
            console.log(error.message)
            console.error('Error deleting flashcard:', error);
        }
    }

    const currentCard = flashcards[currentIndex];

    return (
        <div className='flashcard-page'>
            <h1>{username}'s Flashcards</h1>
            <div className="flashcard-container">
                {flashcards.length > 0 ? (
                    <>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                {currentCard && (
                                    <>
                                        <div className="flip-card-front">
                                            <h2>{currentCard.question}</h2>
                                            <span><i>hover to flip card</i></span>
                                        </div>
                                        <div className="flip-card-back">
                                            <h2>{currentCard.answer}</h2>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="flashcard-controls">
                            <button onClick={goPrev} disabled={currentIndex === 0}><i class="fa-solid fa-arrow-left"></i> Prev</button>
                            <button onClick={goNext} disabled={currentIndex === flashcards.length - 1}>Next <i class="fa-solid fa-arrow-right"></i></button>
                            <button onClick={shuffleFlashcards}>Shuffle <i class="fa-solid fa-shuffle"></i></button>
                            <button onClick={() => deleteFlashcard(currentCard._id)}>Delete <i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </>
                ) : (
                    <h2 role="notify">No Flashcards Created!</h2>
                )}
                {showDeleteSuccess && <div className="delete-success-message">Successfully deleted</div>}
            </div>
            <Modal setFlashcards={setFlashcards}/>
        </div>
    );
    
};

export default FlashCard;
