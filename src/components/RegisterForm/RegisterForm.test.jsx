import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import RegisterForm from "./index";

import { BrowserRouter as Router } from 'react-router-dom';

describe("Register Form component", () => {
    beforeEach(() => {
      render(
        <Router>
          <RegisterForm />
        </Router>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it("displays a submit button", () => {
      const submit = screen.getByRole("submit");
      expect(submit).toBeInTheDocument;
      expect(submit.value).toBe("REGISTER")
    });

    it("displays a password input with a placeholder of 'example password'", ()=>{
        const passInput = screen.getByRole("password")
        expect(passInput).toBeInTheDocument();
        expect(passInput.placeholder).toBe("example password")
    })

    it("displays a username input with a placeholder of 'example username'", ()=>{
        const userInput = screen.getByRole("username");
        expect(userInput).toBeInTheDocument();
        expect(userInput.placeholder).toBe("example username")
    })

    it("displays a form with username and password inputs", ()=>{
        const form = screen.getByRole("form");
        expect(form).toBeInTheDocument();
    })

    it("updates username and password values on input change", () => {
        const userInput = screen.getByRole("username");
        const passInput = screen.getByRole("password");

        fireEvent.change(userInput, { target: { value: 'testuser' } });
        fireEvent.change(passInput, { target: { value: 'testpassword' } });

        expect(userInput.value).toBe('testuser');
        expect(passInput.value).toBe('testpassword');
    });



   
  });
