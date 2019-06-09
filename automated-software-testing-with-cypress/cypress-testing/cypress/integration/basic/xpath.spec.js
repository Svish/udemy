describe('XPath examples', () => {
  beforeEach(() => {
    cy.visit('https://example.com');
  });

  it('should work', () => {
    cy.xpath('//a[@href]').should('contain', 'More information');
  });
});
