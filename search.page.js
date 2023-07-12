const LINK = 'http://zero.webappsecurity.com/index.html';
const URLL = 'index.html';
const SEARCH = '#searchTerm';

class SearchPage {
    static visit() {
        cy.visit(LINK);
    }
    
    static verifyUrl() {
        cy.url(URLL);
    }

    static fillSearch(funds) {
        cy.get(SEARCH).type(funds, {enter});
    }
}