import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const PageWrapper = () => {
    return <>
        <header id="crammer-header">           
             <nav id="crammer-navbar">
             <img src="src/assets/crammer.png" id="logo"/>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/flashcard" className="nav-link">FlashCards</NavLink>
                <NavLink to="/quiz" className="nav-link">Quizzes</NavLink>
                <NavLink to="/leaderboard" className="nav-link">Leaderboard</NavLink>
                <NavLink to="/register" className="nav-link" id="register-nav">Register</NavLink>
                <NavLink to="/login" className="nav-link">Login</NavLink>
            </nav>
        </header>
        <Outlet />
        <footer id="crammer-footer">Copyright 2023 @ Crammer Education </footer>
    </>
};

export default PageWrapper;
