describe('Assertion demo', () => {
  it('Implicit Assertion', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    cy.url().should('include', 'opensource-demo.orangehrmlive.com');
    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    cy.url().should('contain', 'orangehrmlive');
  });
});
