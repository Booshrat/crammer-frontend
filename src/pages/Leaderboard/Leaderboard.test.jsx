import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi} from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Leaderboard from '.';


describe('Leaderboard Page', () => {
    beforeEach(() => {
        render (
            
            <BrowserRouter>
                <Leaderboard />
            </BrowserRouter>
            
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('displays a heading with appropriate text', () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Leaderboard");
    });
    it('displays a loading message while data is being fetched', () => {
        render(<Leaderboard />);
        const loadingMessages = screen.queryAllByText("Loading data ...");
        expect(loadingMessages.length).toBeGreaterThan(0);
    
        loadingMessages.forEach((loadingMessage) => {
            expect(loadingMessage.textContent).toBe("Loading data ...");
        });
    });
   

});
