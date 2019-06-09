describe('Search', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com');
  });

  it('should search for value', () => {
    cy.get('#searchTerm').as('search');
    cy.get('@search').type('bank{enter}');

    cy.location('pathname').should('eq', '/search.html');
    cy.location('search').should('contain', '?searchTerm=bank');
  });

  it('should display result page', () => {
    cy.get('h2').as('header');
    cy.get('@header').should('contain', 'Search Results');
  });

  it('should go back to homepage', () => {
    cy.go('back');
    cy.location('pathname').should('eq', '/');
  });
});
