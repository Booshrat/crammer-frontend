import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent, waitFor } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import FlashCard from '.';
import axios from "axios";


describe('Flashcard Page', () => {
   
    afterEach(() => {
        cleanup();
    });

    const mockFlashcards = [
        { _id: '1', question: 'Question 1', answer: 'Answer 1' },
        { _id: '2', question: 'Question 2', answer: 'Answer 2' },
      ]

    it("has a button for creating a flashcard", ()=>{
        render(<FlashCard />)
        const create = screen.getByRole("button")
        expect(create).toBeInTheDocument();
        expect(create.textContent).toBe("Create Flashcard")
    })

    it("notifies the user that no flashcards have been created", ()=>{
        render(<FlashCard />)

        const message = screen.getByRole("notify")
        expect(message).toBeInTheDocument();
        expect(message.textContent).toBe("No Flashcards Created!")
    })

    it("renders a flashcard after fetching", async () =>{
        vi.spyOn(axios, "get").mockResolvedValueOnce({
            data: mockFlashcards
          });

          render(<FlashCard />)

            await vi.waitFor(() => {
    mockFlashcards.forEach(async (flashcard) => {
      const foundElements = await screen.findAllByText(flashcard.question);
      expect(foundElements.length).toBeGreaterThan(0);
     
    })
  });


    })


});
