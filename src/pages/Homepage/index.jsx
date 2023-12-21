import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const goTo = useNavigate();

    return (
        <div className="home-container">
            <div>
                <img className="home-image" src="src/assets/home-image.png" alt="home-image" />
                <div className="overlay">
                    <div className="welcome-text">
                        <h1>Welcome to the Crammer App - Your Ultimate Study Companion!</h1>
                        <p>Unleash the power of efficient learning with our interactive flashcards and challenging quizzes. Whether you're gearing up for exams or simply eager to expand your knowledge, we've got you covered!</p>
                    </div>
                    <div className='btn-container'>
                        <button role="login-button" className="login-btn" onClick={() => { goTo('/login') }}>Login</button>
                        <span className="or-text">or</span>        
                        <button role="signup-button" className="signup-btn" onClick={() => { goTo('/register') }}>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
