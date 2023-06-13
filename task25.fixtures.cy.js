/// <reference types="cypress" />

describe('Task fixtures Data', function() {
    it('Should try to login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo.com')

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            cy.get('#user-name').type(username)
            cy.get('input[name="password"]').type(password)
            cy.get('.btn_action').click()
        });

        cy.fixture("user").then(user => {
            const inventory_item_name = user.inventory_item_name
            
            cy.get('.inventory_item_name').contains(inventory_item_name)
            cy.get('#add-to-cart-sauce-labs-backpack').click()
        });
    });
});