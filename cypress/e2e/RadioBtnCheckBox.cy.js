describe('Check UI Element on websites ', () => {
  it('Check radio buttotn', () => {
    cy.visit('https://7rdspt.csb.app/');

    //visibility of radio button
    cy.get('#html').should('be.visible');
    cy.get('#css').should('be.visible');
    cy.get('#javascript').should('be.visible');

    //selection radio button
    cy.get('#html').check().should('be.checked');
    cy.get('#css').should('not.be.checked');
    cy.get('#javascript').should('not.be.checked');

    cy.get('#css').check().should('be.checked');
    cy.get('#html').should('not.be.checked');
    cy.get('#javascript').should('not.be.checked');

    cy.get('#javascript').check().should('be.checked');
    cy.get('#html').should('not.be.checked');
    cy.get('#css').should('not.be.checked');
  });

  it('Checking checkbox', () => {
    cy.visit('https://7rdspt.csb.app/');

    //visibility of checkbox
    cy.get('#vehicle1').should('be.visible');
    cy.get('#vehicle2').should('be.visible');
    cy.get('#vehicle3').should('be.visible');
    cy.get('#vehicle33').should('not.exist');

    cy.get('#vehicle2').check().should('be.checked');
    cy.get('#vehicle1').should('not.be.checked');
    cy.get('#vehicle3').should('not.be.checked');

    cy.get('#vehicle2').uncheck().should('not.be.checked');

    //selecting all checkbox

    cy.get("input.test-checkbox[type$='checkbox']")
      .check()
      .should('be.checked');

    cy.get("input.test-checkbox[type$='checkbox']")
      .uncheck()
      .should('not.be.checked');

    cy.get("input.test-checkbox[type$='checkbox']")
      .first()
      .check()
      .should('be.checked');

    cy.get("input.test-checkbox[type$='checkbox']")
      .last()
      .check()
      .should('be.checked');

    cy.get("input.test-checkbox[type$='checkbox']")
      .first()
      .uncheck()
      .should('not.be.checked');
  });
});
