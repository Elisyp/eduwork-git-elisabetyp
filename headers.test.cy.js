describe('Validate Header', () => {
    it("Succesfully validate content-type", () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    });

    it("Tugas 43 validate response body", () => {
        var pokemin = {
            "base_experience": 101,
            "name": 'ditto',
        }
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon-form/132/', pokemin).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(pokemin.name)          
        })
    })
})