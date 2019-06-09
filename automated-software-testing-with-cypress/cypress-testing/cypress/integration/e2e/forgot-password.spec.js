describe('Search', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com');
    cy.get('#signin_button').click();
  });

  it('should display link', () => {
    cy.contains('Forgot your password')
      .should('be.visible')
      .click();
  });

  it('should display form', () => {
    cy.location('pathname').should('eq', '/forgot-password.html');
    cy.get('#send_password_form').should('be.visible');
  });

  it('should submit form', () => {
    cy.get('#user_email').type('alice@example.com');
    cy.contains('Send Password').click();
  });

  it('should display success message', () => {
    cy.location('pathname').should('eq', '/forgotten-password-send.html');
    cy.contains('Your password will be sent')
      .should('be.visible')
      .should('contain', 'alice@example.com');
  });
});
