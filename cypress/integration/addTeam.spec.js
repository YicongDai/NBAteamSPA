describe('Add a team page', () => {
  beforeEach(() => {
    cy.visit('/')
    // Click Donate navbar link
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(3)').click()
  })

  it('allows a valid team to be submitted', () => {
    // Fill out web form
    cy.get('#name').type('Houton Rocket')
    cy.get('#city').type('Houston')
    cy.get('label').contains('numPlayer').next().clear()
    cy.get('label').contains('numPlayer').next().type('1')
    cy.get('label').contains('champions').next().clear()
    cy.get('label').contains('champions').next().type('1')
    cy.get('label').contains('rank').next().clear()
    cy.get('label').contains('rank').next().type('1')
    cy.get('label').contains('Message').next().type('Rocket')
    cy.contains('Successful for a team!').should('not.exist')
    cy.get('.error').should('not.exist')
    cy.get('button[type=submit]').click()
    cy.contains('Successful for a team!').should('exist')
  })
  it('shows error messages for incomplete form fields', () => {
    cy.get('button[type=submit]').click()
    cy.get('.error').contains('Name')
    cy.get('.error').contains('rank')
    cy.get('.error').contains('Message')
    cy.get('#name').type('Houton Rocket')
    cy.get('.error').contains('Amount').should('not.exist')
    cy.get('label').contains('rank').next().clear()
    cy.get('label').contains('rank').next().type('1')
    cy.get('label').contains('Message').next().type('Rocket')
    cy.get('.error').should('not.exist')
  })
})
