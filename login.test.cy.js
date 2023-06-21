/// <reference types="cypress" />

describe('Login / Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
    });
    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('abc123')
        cy.contains('Sign in').click()
    });
    it('Should display error messages', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'login and/or password are wrong.')
    });
    it('Should login to application with custom command and valid data', () => {
        cy.login('username', 'password')
        /*
        cy.fixture('userlogin').then(userlogin => {
            const username = userlogin.username
            const password = userlogin.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type (password)
            cy.contains('Sign in').click()
        }) */
        cy.get('ul.nav-tabs').should('be.visible')
    });
    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
    });
});