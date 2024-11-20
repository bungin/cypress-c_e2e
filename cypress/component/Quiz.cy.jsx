import React from "react";
import Quiz from "../../client/src/components/Quiz";

//use snapshot?
//mocking the API call
//hardcode mock data
//tehn verify data is rendered properly


describe("Quiz", () => {
    it('should start with a single button', () => {
        cy.mount(<Quiz />)
        cy.get('button').should('contain.text', 'Start Quiz')
    })
})