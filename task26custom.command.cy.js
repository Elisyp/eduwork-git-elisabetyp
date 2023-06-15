/// <reference types="cypress" />

describe("Custom Command", () => {
    it('Should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.login('username', 'password')

        cy.get('#pay_bills_tab').click()

        cy.bayar('amount', 'date', 'description')
    });
});