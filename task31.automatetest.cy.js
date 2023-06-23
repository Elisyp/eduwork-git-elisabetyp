/// <reference types="cypress" />

describe('Tugas 31 Automate Test', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo.com')
    });
    it('Should try to login with invalid data', () => {
        cy.get('#user-name').type('invalid username')
        cy.get('#password').type('abc123')
        cy.get('#login-button').click()
    });
    it('Should display error messages invalid user', () => {
        cy.get('.error-button').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
    it('Should try to login with locked out user', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.contains('#login-button').click()
    });
    it('Should display error messages locked out user', () => {
        cy.get('.error-button').should('be.visible').and('contains', 'Epic sadface: Sorry, this user has been locked out.') 
    });
    it('Should login with valid data menggunakan fixture', () => {
        cy.fixture('userlogin').then(userlogin => {
            const username = userlogin.username
            const password = userlogin.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type (password)
            cy.contains('#login-button').click()
        })
        cy.get('.title').should('contain.text', 'Products')
    });
    it('Should sorting data', () => {
        cy.get('.product_sort_container').select('lohi')
    });
    it('Should open details of product and add it to cart', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt').click()
        cy.url().should('include', 'inventory-item.html?id=1')
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        cy.get('#back-to-products').click()
    });
    it('Should add product to cart from homepage', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    });
    it('Should open cart page', () => {
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart.html')
    });
    it('Should remove one of product from the cart page', () => {
        cy.get('#remove-sauce-labs-backpack').click()
    });
    it('Should checkout product with custom commands', () => {
        cy.get('.checkout_button').click()
        cy.url().should('include', 'checkout-step-one.html')
        cy.checkout('firstName', 'lastName', 'postalCode')
    });
    it('Should logout from the application', () => {
        cy.contains('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('.login_logo').should('contain.text', 'Swag Labs')
    });
});