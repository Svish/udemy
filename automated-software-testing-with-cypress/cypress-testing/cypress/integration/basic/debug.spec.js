describe('Debug help', () => {
  it('should wait', () => {
    // Go to page
    cy.visit('/');

    // Wait (not recommended)
    cy.wait(500);
  });

  it('should pause', () => {
    cy.visit('/');

    // Pause (to manually continue)
    cy.pause();
  });
});
