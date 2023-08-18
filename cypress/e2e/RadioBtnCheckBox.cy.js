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
});
