import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent, waitFor } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import QuizCard from '.';
import axios from 'axios';

describe('QuizCard Component', () => {


  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("lets the user know a question is loading", () => {
    render(
        <BrowserRouter>
          <QuizCard
            question={null}
            handleOptionClick={() => {}}
          />
        </BrowserRouter>
      );
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
    expect(loading.textContent).toBe('Loading...');
  });

  it("displays a question with a category, and 4 answer options", async () => {
    render(
        <BrowserRouter>
          <QuizCard
            question={{
              text: 'What is the capital of France?',
              category: 'Geography',
              correctAnswer: 'Paris',
              incorrectAnswers: ['Berlin', 'Madrid', 'Rome'],
            }}
            handleOptionClick={() => {}}
          />
        </BrowserRouter>
      );

    await waitFor(() => {
      const question = screen.getByRole('heading');
      expect(question).toBeInTheDocument();
      const category = screen.getByRole('category');
      expect(category).toBeInTheDocument();
      const answers = screen.getAllByRole('button');
      expect(answers.length).toEqual(4);
    });
  });
});
