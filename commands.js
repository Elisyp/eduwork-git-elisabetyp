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

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('input[name="user_login"]').clear()
    cy.get('input[name="user_login"]').type('username')

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type('password')
    cy.get('input[name="submit"]').click()
});

Cypress.Commands.add('bayar', (amount, date, description) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    
    cy.get('#sp_payee').select('Apple')
    cy.get('#sp_account').select('Checking')

    //cy.get('input[name="amount"]').clear()
    cy.get('input[name="amount"]').type('100000')

    cy.get('input[name="date"]').clear()
    cy.get('input[name="date"]').type('2023-06-15')
    cy.wait (2000)

    cy.get('#sp_description').click({force: true})
    cy.get('#sp_description').clear()
    cy.get('#sp_description').type('buying')

    cy.get('#pay_saved_payees').click()
});