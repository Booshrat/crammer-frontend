import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const goTo = useNavigate();

    return (
        <div>
            <img className="home-image" src="src/assets/home-image.png" alt="home-image" />
            <br />
            <button onClick={() => { goTo('/login') }}> LOGIN </button>
            <button onClick={() => { goTo('/register') }}> REGISTER </button>
        </div>
    )
}

export default Homepage;
