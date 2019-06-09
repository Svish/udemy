describe('Basic test', () => {
  it('should load example webpage', () => {
    // Go to page
    cy.visit('/');

    // Check url and title
    cy.url().should('contain', 'example.com');
    cy.title().should('equal', 'Example Domain');

    // Check h1
    cy.get('h1').should('contain', 'Example Domain');

    // Check h1 multiple times via alias
    cy.get('h1').as('header');
    cy.get('@header').should('be.visible');
    cy.get('@header').should('contain', 'Example Domain');
  });
});
