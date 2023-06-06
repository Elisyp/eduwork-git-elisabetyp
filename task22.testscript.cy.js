/// <reference types="cypress" />

describe("My first task Test Script with Cypress", () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')
        
        //cy.pause()
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')

        cy.get('.action-email').type('elisyp@fakemail.com')
        cy.get('.action-email').should('have.value','elisyp@fakemail.com')
    });
});
