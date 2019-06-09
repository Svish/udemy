describe('Action test', () => {
  beforeEach(() => {
    cy.visit('https://devexpress.github.io/testcafe/example');
  });

  it('Submit developer name', () => {
    cy.get('#developer-name').type('Alice');
    cy.get('#developer-name').should('have.value', 'Alice');
    cy.get('#submit-button').scrollIntoView();
    cy.get('#submit-button').click();

    cy.url().should('contain', 'thank-you');
    cy.get('.result-content').should('be.visible');
    cy.get('.result-content').should('contain', 'Alice');
  });

  it('Enable slider', () => {
    cy.get('#slider').as('slider');

    cy.get('@slider').should('have.class', 'ui-state-disabled');

    cy.get('#tried-test-cafe').click();
    cy.get('@slider').should('not.have.class', 'ui-state-disabled');
  });

  it('Comment has empty value by default', () => {
    cy.get('#comments').as('textarea');

    cy.get('@textarea').should('be.disabled');

    cy.get('#tried-test-cafe').click();
    cy.get('@textarea').should('be.enabled');
    cy.get('@textarea').should('have.value', '');

    cy.get('@textarea').type('Foobar');
    cy.get('@textarea').should('have.value', 'Foobar');
  });
});
