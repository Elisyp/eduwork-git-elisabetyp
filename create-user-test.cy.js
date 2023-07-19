describe('Create New User', () => {
    it('Succesfully create new user', () => {
        var user = {
            "name": 'Elisabet Yuliana',
            "job": 'QA Engineer'
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
        }).as('testuser')

        cy.get('@testuser').its('status').should('equal', 201)
    })
    });