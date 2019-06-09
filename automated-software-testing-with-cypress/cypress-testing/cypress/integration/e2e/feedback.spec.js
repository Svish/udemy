describe('Search', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/feedback.html');
  });

  it('should display feedback form', () => {
    cy.get('#feedback-title').should('be.visible');
    cy.get('form').should('be.visible');
  });

  it('should submit feedback form', () => {
    cy.get('#name').type('Alice');
    cy.get('#email').type('alice@example.com');
    cy.get('#subject').type('Test');
    cy.get('#comment').type('Just testing');
    cy.get('.btn-signin').click();
  });

  it('should display success message', () => {
    cy.get('#feedback-title').should('be.visible');
    cy.contains('Thank you').should('exist');
  });
});
