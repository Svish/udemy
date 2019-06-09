describe('Input form', () => {
  beforeEach(() => {
    cy.seedAndVisit([]);
  });

  it('focuses input on load', () => {
    cy.get('.new-todo').should('be.focused');
    cy.focused().should('have.class', 'new-todo');
  });

  it('accepts input', () => {
    const sampleTask = 'Buy milk';
    cy.get('.new-todo')
      .type(sampleTask)
      .should('have.value', sampleTask);
  });

  context('Form submission', () => {
    beforeEach(() => {
      cy.server();
    });

    it('Adds a new todo on submit', () => {
      const itemText = 'Buy eggs';

      cy.route('POST', '/api/todos', {
        id: 1,
        name: itemText,
        isComplete: false,
      });

      cy.get('.new-todo')
        .type(itemText)
        .type('{enter}')
        .should('have.value', '');

      cy.get('.todo-list li')
        .should('have.length', 1)
        .and('contain', itemText);
    });

    it('Shows an error message on failed submission', () => {
      cy.route({
        url: '/api/todos',
        method: 'POST',
        status: 500,
        response: {},
      });

      cy.get('.new-todo').type('test{enter}');

      cy.get('.todo-list li').should('not.exist');

      cy.get('.error').should('be.visible');
    });
  });
});
