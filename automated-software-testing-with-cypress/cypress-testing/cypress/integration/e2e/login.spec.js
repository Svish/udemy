describe('Search', () => {
  beforeEach(() => {
    cy.visit('http://zero.webappsecurity.com');
    cy.get('#signin_button').click();
  });

  it('should display login form', () => {
    cy.get('#login_form').should('be.visible');
  });

  it('should succeed with correct credentials', () => {
    cy.loginToApp('username', 'password');
    cy.location('pathname').should('eq', '/bank/account-summary.html');
  });

  it('should fail with incorrect credentials', () => {
    cy.loginToApp('username', 'wrong password');

    cy.get('.alert-error')
      .should('be.visible')
      .and('contain', 'wrong');
  });
});
