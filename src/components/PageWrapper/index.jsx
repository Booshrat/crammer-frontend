import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const PageWrapper = () => {
    const [user, setUser] = useState(localStorage.getItem('token'));

    return <>
        <header id="crammer-header">
            <nav id="crammer-navbar">
                <img src="src/assets/crammer.png" id="logo" />
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/flashcard" className="nav-link">FlashCards</NavLink>
                <NavLink to="/quiz" className="nav-link">Quizzes</NavLink>
                <NavLink to="/leaderboard" className="nav-link">Leaderboard</NavLink>
                {user != null && <NavLink to="/login" className="nav-link">Logout</NavLink>}
                {user === null && <NavLink to="/register" className="nav-link" id="register-nav">Register</NavLink>}
                {user === null && <NavLink to="/login" className="nav-link">Login</NavLink>}
            </nav>
        </header>
        <Outlet />
        <footer id="crammer-footer">
            <div className='icon-container'>
                <a href="">
                    <img className='footer-icon' src="src/assets/instagram.png" alt="instagram-icon" />
                </a>
                <a href="">
                    <img className='footer-icon' src="src/assets/facebook.png" alt="instagram-icon" />
                </a>
                <a href="">
                    <img className='footer-icon' src="src/assets/twitter.png" alt="instagram-icon" />
                </a>
                <a href="">
                    <img className='footer-icon' src="src/assets/youtube.png" alt="instagram-icon" />
                </a>
            </div>
            <div className='link-container'>
                <span>Contact Us</span>
                <span>Privacy</span>
                <span>Cookies</span>
                <span>Sitemap</span>
            </div>
            <div>
                <p>Copyright 2023 @ Crammer Education</p>
            </div>
        </footer>
    </>
};

export default PageWrapper;
