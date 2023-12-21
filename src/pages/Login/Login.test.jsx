import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Login from '.';
import { UserProvider } from '../../contexts';

describe('Login Page', () => {
    beforeEach(() => {
        render (
            <UserProvider>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
            </UserProvider>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('displays a heading with appropriate text', () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Login");
    });

});
