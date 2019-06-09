describe('Visual regression test', () => {
  before(() => {
    cy.visit('https://example.com');
  });

  it('should make page snapshot', () => {
    cy.matchImageSnapshot();
  });
});
