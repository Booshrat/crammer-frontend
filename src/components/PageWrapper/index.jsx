import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useUser } from '../../contexts';

const PageWrapper = () => {

    const { setUser, user } = useUser();
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('token');
        setUser(storedUser)
    }, [user]); 

    return (
        <>
            <header id="crammer-header">
                <nav id="crammer-navbar">
                    <img src="src/assets/crammer.png" id="logo" alt="Crammer Logo" />
                    {user === null ? (<NavLink to="/" className="nav-link">Home</NavLink>) 
                    : null}
                    {user !== null ?(<NavLink to="/flashcard" className="nav-link">FlashCards</NavLink>) :null}
                    {user !== null ? (
                    <NavLink to="/quiz" className="nav-link">Quizzes</NavLink>) : null}
                    {user !== null ? (<NavLink to="/leaderboard" className="nav-link">Leaderboard</NavLink>) : null }
                    {user !== null ? (
                        <NavLink to="/" className="nav-link" onClick={handleLogout}>Logout</NavLink>
                    ) : (
                        <>
                            <NavLink to="/register" className="nav-link" id="register-nav">Register</NavLink>
                            <NavLink to="/login" className="nav-link" >Login</NavLink>
                        </>
                    )}
                </nav>
            </header>
            <Outlet />
           <footer id="crammer-footer">
        <div className="footer-link">
          <div className="footer-elements">
            <a href="">
              <img
                className="footer-icon"
                src="src/assets/instagram.png"
                alt="instagram-icon"
              />
            </a>
            <a>Contact Us</a>
          </div>
          <div className="footer-elements">
          <a href="">
          <img
              className="footer-icon"
              src="src/assets/facebook.png"
              alt="instagram-icon"
            />
            </a>
            <a>Privacy</a>
          </div>
          <div className="footer-elements">
          <a href="">
            <img
              className="footer-icon"
              src="src/assets/twitter.png"
              alt="instagram-icon"
            />
            </a>
            <a>Cookies</a>
          </div>
          <div className="footer-elements">
          <a href="">
            <img
              className="footer-icon"
              src="src/assets/youtube.png"
              alt="instagram-icon"
            />
            </a>
            <a>Sitemap</a>
          </div>
        </div>
          <p>Copyright 2023 @ Crammer Education</p>
      </footer>
    </>
  );
};

export default PageWrapper;
