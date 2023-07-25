///<reference types="cypress" />

describe("Tugas 45 Validate Content", () => {
    it.only("Succesfully validate content", () => {
        var hippo = {
            abilities: [{
                ability: {
                    name: 'limber',
                    url: 'https://pokeapi.co/api/v2/ability/7/'
                }
            }]
        }
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', hippo).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.ability).to.eq(hippo.name)
        })
    })
    
    //alternatif lain yang lebih singkat
    it('Succesfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => {
        expect(response.body.abilities[0].ability.name).to.eq('limber')
      })
    });
})
