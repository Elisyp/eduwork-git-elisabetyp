const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the website page', () => {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.url().should('include', 'index.html')
})

When('I submit text into field Search', () => {
    cy.get('#searchTerm').type('funds{enter}');

    cy.wait(2000);
})

Then('I should see the Search Results', () => {
    cy.get('h2').should('be.visible','Search Results:');
})
