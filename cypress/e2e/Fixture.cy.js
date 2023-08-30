describe('Fixture Test', () => {
  it('It Fixture demo', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    cy.fixture('example').then((data) => {
      cy.log('test', data.name);
      cy.get("input[placeholder='Username']").type(data.name);

      cy.get("input[placeholder='Password']").type(data.password);

      cy.get("button[type='submit']").click();

      cy.get('.oxd-topbar-header-title').contains(data.expected);
    });
  });
});
