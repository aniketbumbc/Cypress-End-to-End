describe('handling frame', () => {
  it.skip('getting into iframe approch 1', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');

    const iframe = cy
      .get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);

    iframe.clear().type('Hello Aniket {cmd+a}');
    cy.get("button[title='Bold']").click();
  });

  it.only('getting into iframe approch 2 custom command', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.getIframe('#mce_0_ifr').clear().type('Hello Aniket {cmd+a}');
    cy.get("button[title='Bold']").click();
  });
});
