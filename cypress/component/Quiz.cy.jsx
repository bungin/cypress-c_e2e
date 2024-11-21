

import React from "react";
import Quiz from "../../client/src/components/Quiz";

describe("Quiz", () => {
    it('should start with a single button', () => {
      // Intercept the API call before mounting the component
      cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
  
      // Mount the Quiz component
      cy.mount(<Quiz />);
  
      // Check that the button contains the text 'Start Quiz'
      cy.get('button').should('contain.text', 'Start Quiz');
    });
  });