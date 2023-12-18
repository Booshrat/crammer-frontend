import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const goTo = useNavigate();

    return (
        <div>
            <h2>Homepage</h2>
            <button onClick={() => { goTo('/login') }}> LOGIN </button>
            <button onClick={() => { goTo('/register') }}> REGISTER </button>
        </div>
    )
}

export default Homepage;
