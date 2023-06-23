// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('input[name="user_login"]').clear()
    cy.get('input[name="user_login"]').type('username')

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type('password')
    cy.get('input[name="submit"]').click()
}); */

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('input[name="firstName"]').clear()
    cy.get('input[name="firstName"]').type('elisabet')

    cy.get('input[name="lastName"]').clear()
    cy.get('input[name="lastName"]').type('yp')

    cy.get('input[name="postalCode"]').clear()
    cy.get('input[name="postalCode"]').type('77889')

    cy.get('#continue').click()
    //cy.get('.cart_quantity_label').contains('QTY')
    cy.url().should('include', 'checkout-step-two.html')
    
    cy.get('#finish').click()
    cy.url().should('include', 'checkout-complete.html')
    
    cy.get('#back-to-products').click()
});