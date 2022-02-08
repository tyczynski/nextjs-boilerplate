describe('Homepage', () => {
  it('should contain "Hello World!" title', () => {
    cy.visit('/')
      .findByText(/hello world!/i)
      .should('exist');
  });
});
