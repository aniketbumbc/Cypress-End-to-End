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
    cy.title().should('include', 'OrangeHRM').and('eq', 'OrangeHRM');
    cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist');
    cy.xpath('//a').should('have.length', '5'); // Number of link

    cy.get("input[placeholder='Username']").type('Admin'); // value to inputbox
    cy.get("input[placeholder='Username']").should('have.value', 'Admin');

    cy.get("input[placeholder='Username']").type('Mike'); // value to inputbox
    cy.get("input[placeholder='Username']").should('not.have.value', 'Admin');
  });

  it('Explict Assertion', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    cy.get("input[placeholder='Username']").type('Admin');
    cy.get("input[placeholder='Password']").type('admin123');

    cy.get("button[type='submit']").click();

    let expectedName = 'sivabalaji A';
    cy.get('.oxd-userdropdown-name').then((value) => {
      let actualName = value.text();

      expect(actualName).to.equal(expectedName);
    });
  });
});
