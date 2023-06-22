/// <reference types="cypress" />

describe ('Navbar Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        // login with custom command
        cy.get('#signin_button').click()
        cy.login('username', 'password')

    });
    it('Should display online banking content', () => {        
        /*cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible') */
        
        // Tugas 30 - membuat assertion lain di halaman online banking 
        cy.contains('Account Activity').click()
        cy.url().should('include', 'account-activity.html')
        cy.get('#aa_accountId').select('Checking')

        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });
    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.wait (2000)
    });
    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')

        cy.get(':nth-child(2) > .dropdown-toggle').click()
        cy.get('#help_link').click()
        cy.url().should('include', 'help.html')
    });
})