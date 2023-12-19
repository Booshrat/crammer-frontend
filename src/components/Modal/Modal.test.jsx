import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, userEvent, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios"; 

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Modal from "./index";

import { BrowserRouter as Router } from 'react-router-dom';


describe("Modal component", () => {
    beforeEach(() => {
      render(
        <Router>
          <Modal />
        </Router>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it("displays a button for creating a flashcard", () => {
      const create = screen.getByRole("button");
      expect(create).toBeInTheDocument();
      expect(create.textContent).toBe("Create Flashcard")
      
    });

    it("opens the modal when the create button is clicked", () => {
        const create = screen.getByRole("button");
        fireEvent.click(create);

        const modal = screen.getByText("Add Flashcard");
        expect(modal).toBeInTheDocument();
    });

    it("closes the modal when the close button is clicked", ()=>{
        const create = screen.getByRole("button");
        fireEvent.click(create);

        const modal = screen.getByText("Add Flashcard");

        const close = screen.getByText("×")
        fireEvent.click(close)

        expect(modal).not.toBeInTheDocument();
    })

    it("displays a success message after adding a flashcard", async ()=>{
        const create = screen.getByRole("button");
        fireEvent.click(create);

        vi.spyOn(axios, "post").mockResolvedValueOnce({})

        const saveFlashcard = screen.getByText("Save")
        fireEvent.click(saveFlashcard)

        await waitFor(()=>{
            const addedMessage = screen.getByText("Flashcard added")
            expect(addedMessage).toBeInTheDocument();
        })

       

    })






  });
