describe('Contract us page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.navbar-nav:nth-child(2)')
  })
  it('show some information about the app', () => {
    cy.get('.navbar').contains('Contact Us')
    cy.get('.vue-title').contains('Contact Us')
    cy.get('.team-footer').contains('here')
  })
})
