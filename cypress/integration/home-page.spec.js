describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'Welcome to NBA website!!')
    cy.get('.lead').should('contain', 'DO you have your favourite teams?')
    cy.get('.lead').contains('DO you have your favourite teams?')
  })

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar').find(':nth-child(1)')
      cy.get('.navbar').contains('Home')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Manage teams')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Add a team')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'About')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Contact')
      })
    })

    it('Redirects when links are clicked', () => {
      cy.get('.navbar').contains('Manage').click()
      cy.url().should('include', '/teams')
      cy.get('.navbar').contains('Add').click()
      cy.url().should('include', '/team')
    })
  })
})
