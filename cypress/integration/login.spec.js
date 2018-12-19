describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.navbar-nav:nth-child(2)')
      .find('.nav-item:nth-child(3)').click()
  })
  it('show some information about the login', () => {
    cy.get('h1').contains('login')
    cy.get('label').contains('username').next().type('admin')
    cy.get('label').contains('password').next().type('123')
    cy.get('button[type=submit]').click()
    cy.url().should('include', '/')
  })
})
