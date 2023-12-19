import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Homepage from '.';

describe('HomePage', () => {
    beforeEach(() => {
        render (
            <BrowserRouter>
                <Homepage />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('displays a heading with appropriate text', () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Welcome to Our Website.");
    });

    it('renders Login button', () => {
        const loginButton = screen.getByRole("login-button");
        expect(loginButton).toBeInTheDocument();
        expect(loginButton.textContent).toBe("Login");
    });

    it('renders Signup button', () => {
        const loginButton = screen.getByRole("signup-button");
        expect(loginButton).toBeInTheDocument();
        expect(loginButton.textContent).toBe("Signup");
    });

    it('navigates to /login when Login button is clicked', () => {
        const loginButton = screen.getByRole("login-button");
        fireEvent.click(loginButton);
        expect(window.location.pathname).toBe('/login');
    });

    it('navigates to /signup when Signup button is clicked', () => {
        const signupButton = screen.getByRole("signup-button");
        fireEvent.click(signupButton);
        expect(window.location.pathname).toBe('/register');
    });
});
