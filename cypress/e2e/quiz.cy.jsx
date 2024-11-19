
describe("Quiz e2e test", () => {
    it('Will run through the quiz, testing each button in sequence.', () => {
        cy.visit('/')
        cy.get('button').should('contain.text', 'Start Quiz').click()
        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="test-item-0"] button').click()
        }
        cy.get('h2').should('contain.text', 'Quiz Completed')
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i)
        
        cy.get('button').should('contain.text', 'Take New Quiz').click()
        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="test-item-1"] button').click()
        }
        cy.get('h2').should('contain.text', 'Quiz Completed')
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i)
        
        cy.get('button').should('contain.text', 'Take New Quiz').click()
        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="test-item-2"] button').click()
        }
        cy.get('h2').should('contain.text', 'Quiz Completed')
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i)
        cy.get('button').should('contain.text', 'Take New Quiz').click()

        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="test-item-3"] button').click()
        }
        cy.get('h2').should('contain.text', 'Quiz Completed')
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i)
        cy.get('button').should('contain.text', 'Take New Quiz')
    })
})