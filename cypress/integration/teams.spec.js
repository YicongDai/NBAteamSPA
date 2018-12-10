
describe('Manage Teams page', () => {
  beforeEach(() => {
    cy.request('https://nbawebtest.herokuapp.com/teams')
      .its('body')
      .then((teams) => {
        teams.forEach((element) => {
          cy.request('DELETE',
            'https://nbawebtest.herokuapp.com/teams/' + element._id)
        })
      })
    // Populate API's datastore
    cy.fixture('teams')
      .then((teams) => {
        teams.forEach((teams) => {
          cy.request('POST',
            'https://nbawebtest.herokuapp.com/teams/', teams)
        })
      })
    cy.visit('/')
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(2)').click()
  })

  it('allows a team to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 4)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(7)').find('.fa').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 3)
  })
  //
  // it("shows and hides a donation's message", () => {
  //   // Click + symbol of 2nd donation in list
  //   cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
  //   cy.get('div.vue-message', {timeout: 5000}).should('contain', 'The message is [ Hope this helps')
  //   // Unclick same + symbol
  //   cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
  //   cy.get('div.vue-message').should('not.exist')
  // })
})
