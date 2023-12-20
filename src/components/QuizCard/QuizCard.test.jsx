import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent, waitFor } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import QuizCard from '.';
import axios from "axios";


describe('QuizCard Component', () => {

    beforeEach(() =>{
        render(<QuizCard />)
    })
   
    afterEach(() => {
        cleanup();
        vi.restoreAllMocks();
    });

    
    it("lets the user know a question is loading", () =>{

        const loading = screen.getByRole("loading")
        expect(loading).toBeInTheDocument();
        expect(loading.textContent).toBe("Loading...")


    }
    )

    it("displays a question with a category, and 4 answer options", async () => {
        vi.spyOn(axios, 'get').mockResolvedValueOnce({
            data: {
              question: {
                text: 'What is the capital of France?',
              },
              category: 'Geography',
              correctAnswer: 'Paris',
              incorrectAnswers: ['Berlin', 'Madrid', 'Rome'],
            },
          });
      
        
          await waitFor(() => {
            const question = screen.getByRole("heading")
            expect(question).toBeInTheDocument();
            const category = screen.getByRole("category")
            expect(category).toBeInTheDocument();
            const answers = screen.getAllByRole("button")
            expect(answers.length).toEqual(4)
          });
      });


}); 
