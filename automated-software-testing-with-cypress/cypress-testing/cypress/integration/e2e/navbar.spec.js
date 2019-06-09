describe('Search', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com');
  });

  it('should display online banking content', () => {
    cy.get('#onlineBankingMenu').click();
    cy.get('h1').should('contain', 'Online Banking');
    cy.get('#online_banking_features').should('be.visible');
  });

  it('should display feedback content', () => {
    cy.get('#feedback').click();
    cy.get('#feedback-title').should('be.visible');
  });

  it('should navigate to homepage via logo', () => {
    cy.get('.brand').click();
    cy.location('pathname').should('eq', '/index.html');
  });
});
