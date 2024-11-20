
describe("Quiz e2e test", () => {
    it('Will run through the quiz, testing each button in sequence.', () => {
        cy.visit('/')
        cy.get('button').should('contain.text', 'Start Quiz').click()
        
        //first pass
        for (let i = 0; i < 10; i++) {
            //targets first option in each question
            cy.get('[data-test="test-item-0"] button').click()
        }
        cy.get('h2').should('contain.text', 'Quiz Completed')
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i)
        
        //second pass
        cy.get('button').should('contain.text', 'Take New Quiz').click()
        for (let i = 0; i < 10; i++) {
            //second answer
            cy.get('[data-test="test-item-1"] button').click()
        }
        cy.get('h2').should('contain.text', 'Quiz Completed')
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i)
        
        //third pass
        cy.get('button').should('contain.text', 'Take New Quiz').click()
        for (let i = 0; i < 10; i++) {
            //third answer
            cy.get('[data-test="test-item-2"] button').click()
        }
        cy.get('h2').should('contain.text', 'Quiz Completed')
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i)
        cy.get('button').should('contain.text', 'Take New Quiz').click()

        //fourth/final pass
        for (let i = 0; i < 10; i++) {
            //fourth answer
            cy.get('[data-test="test-item-3"] button').click()
        }
        cy.get('h2').should('contain.text', 'Quiz Completed')
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i)
        cy.get('button').should('contain.text', 'Take New Quiz')
    })
})