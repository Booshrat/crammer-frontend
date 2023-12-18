import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import PageWrapper from "./index";

import { BrowserRouter as Router } from 'react-router-dom';

describe("PageWrapper component", () => {
    beforeEach(() => {
      render(
        <Router>
          <PageWrapper />
        </Router>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it("displays the nav bar with 6 links and one image", () => {
      const nav = screen.getByRole("navigation");
      expect(nav).toBeInTheDocument;
      expect(nav.childNodes.length).toBe(7);
    });

    it("displays a footer at the bottom of each page", () =>{
        const footer =screen.getByRole("contentinfo");
        expect(footer).toBeInTheDocument;

    })
  });

