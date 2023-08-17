describe('Assertion demo', () => {
  it('Implicit Assertion', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    //should and
    cy.url()
      .should('include', 'opensource-demo.orangehrmlive.com')
      .should(
        'eq',
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      )
      .should('contain', 'orangehrmlive')
      .should('not.contain', 'green');
  });

  it('Should have correct title', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    //should and
    cy.title().should('include', 'OrangeHRM').and('eq', 'OrangeHRM');
  });

  it('Should have correct logo', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    //should and
    cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist');
  });

  it('Should captures correct link a tag', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    //should and
    cy.xpath('//a').should('have.length', '5'); // Number of link
  });

  it('Should correct username input type', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    //should and
    cy.get("input[placeholder='Username']").type('Admin'); // value to inputbox
    cy.get("input[placeholder='Username']").should('have.value', 'Admin');
  });
});
