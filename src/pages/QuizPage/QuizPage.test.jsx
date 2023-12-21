import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi} from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import QuizPage from '.';

describe('Quiz Page', () => {
    beforeEach(() => {
        render (
            <BrowserRouter>
                <QuizPage />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('displays a heading with appropriate text', () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Quiz Page");
    });

    it("displays a user score" , () =>{
        const score = screen.getByText("Score: 0")
        expect(score).toBeInTheDocument();
    })


   
    it('displays a question box', async () => {
        const mockQuestion = {
            text: 'Text',
            category: 'Category',
            correctAnswer: 'Correct Answer',
            incorrectAnswers: ['Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3'],
        };

        vi.mock('fetch', () => vi.fn().mockResolvedValueOnce({
            json: vi.fn().mockResolvedValueOnce([mockQuestion]),
        }));

        render(<QuizPage />);

        await vi.waitFor(() =>{

            const question = screen.getByRole("heading", {level:3})
            
            const category = screen.getByRole("category")
            const answers = screen.getAllByRole("button")

            expect(question).toBeInTheDocument();
            expect(category).toBeInTheDocument();
            expect(answers.length).toBe(4)
       
    })
    }); 
    
    

});
