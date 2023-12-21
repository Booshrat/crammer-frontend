import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <>
      <header id="crammer-header">
        <nav id="crammer-navbar">
          <img src="src/assets/crammer.png" id="logo" />
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/flashcard" className="nav-link">
            FlashCards
          </NavLink>
          <NavLink to="/quiz" className="nav-link">
            Quizzes
          </NavLink>
          <NavLink to="/leaderboard" className="nav-link">
            Leaderboard
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-link" id="register-nav">
            Signup
          </NavLink>
        </nav>
      </header>
      <Outlet />
      <footer id="crammer-footer">
        <div className="icon-container">
          <a href="">
            <img
              className="footer-icon"
              src="src/assets/instagram.png"
              alt="instagram-icon"
            />
          </a>
          <a href="">
            <img
              className="footer-icon"
              src="src/assets/facebook.png"
              alt="instagram-icon"
            />
          </a>
          <a href="">
            <img
              className="footer-icon"
              src="src/assets/twitter.png"
              alt="instagram-icon"
            />
          </a>
          <a href="">
            <img
              className="footer-icon"
              src="src/assets/youtube.png"
              alt="instagram-icon"
            />
          </a>
        </div>
        <div className="link-container">
          <a>Contact Us</a>
          <a>Privacy</a>
          <a>Cookies</a>
          <a>Sitemap</a>
        </div>
        <div>
          <p>Copyright 2023 @ Crammer Education</p>
        </div>
      </footer>
    </>
  );
};

export default PageWrapper;
