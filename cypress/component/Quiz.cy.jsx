

import React from "react";
import Quiz from "../../client/src/components/Quiz";

describe("Quiz", () => {
    it('should start with a single button', () => {
      // Intercept the API call before mounting the component
      cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
  
      // Mount the Quiz component
      cy.mount(<Quiz />);
  
      // Check that the button contains the text 'Start Quiz'
      cy.get('button').should('contain.text', 'Start Quiz').click();
        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="test-item-1"] button').should('exist');
            cy.get('[data-test="test-item-2"] button').should('exist');
            cy.get('[data-test="test-item-3"] button').should('exist');
            cy.get('[data-test="test-item-0"] button').click();
        }
        cy.get('h2').should('contain.text', 'Quiz Completed');
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i);
        cy.get('button').should('contain.text', 'Take New Quiz');
    });
  });