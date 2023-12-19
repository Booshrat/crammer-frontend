import React from "react";
import { describe, it, expect, beforeEach, afterEach, vitest, vi } from "vitest";
import { screen, render, cleanup, fireEvent, userEvent } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { BrowserRouter as Router, MemoryRouter, useNavigate } from 'react-router-dom';
import { jest } from 'jest'
expect.extend(matchers);

import BackButton from "./index";

vi.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
  
    return {
      __esModule: true,
      ...originalModule,
      useNavigate: vi.fn(),
    };
});

describe("Back Button component", () => {
    beforeEach(() => {
            render(<BackButton />, { wrapper: MemoryRouter })
    });

    afterEach(() => {
        cleanup();
    });

    it("Displays a button with the text: 'Go Back'", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button.textContent).toBe("Go Back");
    });

    it('renders a button', () => {
        const btn = screen.getByRole('button')
        expect(btn.textContent).toContain('Go Back');
        userEvent.click(btn)
        expect(useNavigate).toHaveBeenCalled()
    })

});
