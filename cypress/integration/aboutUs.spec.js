describe('Add a team page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.navbar-nav:nth-child(2)')
      .find('.nav-item:nth-child(1)').click()
  })
  it('show some information about the app', () => {
    cy.get('.vue-title').contains('About Us')
    cy.get('.donation-footer').contains('here')
  })
})