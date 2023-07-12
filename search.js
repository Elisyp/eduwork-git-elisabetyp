import SearchPage from './search.page';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the website page', () => {
    SearchPage.visit();
    SearchPage.verifyUrl();
})

When('I submit text into field Search', () => {
    SearchPage.fillSearch('funds{enter}');
})

Then('I should see the Search Results', () => {
    cy.get('h2').should('be.visible','Search Results:');
})
