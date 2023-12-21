import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { UserProvider } from '../../contexts';
import Register from '.';

describe('Register Page', () => {
    beforeEach(() => {
        render (
            <UserProvider>
            <BrowserRouter>
                <Register />
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
        expect(heading.textContent).toBe("Register");
    });

});
