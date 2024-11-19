import React from "react";
import { describe } from "vitest";

// probably cy.wrap the initial button

describe("Quiz", () => {
    it('should start with a single button', () => {
        cy.visit('/')
        cy.get('button').should('contain.text', 'Start Quiz').click()
    })
})