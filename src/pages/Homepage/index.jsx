import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const goTo = useNavigate();

    return (
        <div className="home-container">
            <img className="home-image" src="src/assets/home-image.png" alt="home-image" />
            <div className="overlay">
                <h1>Welcome to Our Website.</h1>
                <div className='btn-container'>
                    <button className="login-btn" onClick={() => { goTo('/login') }}>Login</button>
                    <span className="or-text">  or  </span>
                
                    <button className="signup-btn" onClick={() => { goTo('/register') }}>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
