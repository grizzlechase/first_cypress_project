describe('Login to CompanyCam', () => {
  it('login to the app', () => {
    // Visit CompanyCam website to login properly
    cy.visit('app.companycam.com')
    cy.get("input[id=user_email_address]").type(email)
    cy.get("input[id=user_password]").type(password).type("{enter}")

    // Validates the URL is redirected to the proper page after login
    cy.url().should('include', 'app.companycam.com/projects')
  })
})