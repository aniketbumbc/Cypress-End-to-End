describe('Custom Commands', () => {
  it('Cutom commands', () => {
    cy.visit('https://demo.nopcommerce.com/');

    // cy.get(
    //   "div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)"
    // ).click();

    cy.clickLink('Apple MacBook Pro 13-inch');

    cy.get("div[class='product-name'] h1").should(
      'have.text',
      'Apple MacBook Pro 13-inch'
    );
  });

  it('Cutom commands', () => {
    cy.visit('https://demo.nopcommerce.com/');

    // cy.get(
    //   "div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)"
    // ).click();

    cy.clickLink('Apple MacBook Pro 13-inch');

    cy.get("div[class='product-name'] h1").should(
      'have.text',
      'Apple MacBook Pro 13-inch'
    );
  });

  it('Screenshot', () => {
    cy.visit('https://demo.nopcommerce.com/');

    cy.screenshot('homepage');
    cy.wait(3000);
    cy.get("img[alt='nopCommerce demo store']").screenshot('logo');
  });

  it.only('Screenshot automatically terminal on fail testing. include video', () => {
    cy.visit('https://demo.nopcommerce.com/');

    cy.clickLink('Apple MacBook Pro 13-inch');

    cy.get("div[class='product-name'] h1").should('have.text', 'Nokia Phone');
  });
});

/**
 *  npx cypress run  --spec cypress/e2e/customCommands.cy.js
 *
 * on terminal command for capture fail test cases and video
 */
