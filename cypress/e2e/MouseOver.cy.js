import 'cypress-iframe';

describe('Mouse Over', () => {
  it('MouseHover', () => {
    cy.visit('https://demo.opencart.com/');
    cy.get(
      "div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)"
    ).should('not.exist');
    cy.get('.nav > :nth-child(1) > .dropdown-toggle')
      .trigger('mouseover')
      .click();
    cy.get(
      "div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)"
    ).should('be.visible');
  });

  it('MouseRight Click', () => {
    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');

    cy.get('.context-menu-one.btn.btn-neutral').rightclick();
    cy.get(
      '.context-menu-item.context-menu-icon.context-menu-icon-copy'
    ).should('be.visible');
  });

  it.only('Double Click', () => {
    cy.visit(
      'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick'
    );

    cy.frameLoaded('#iframeResult');

    cy.iframe('#iframeResult').find("p[ondblclick='myFunction()']").dblclick();

    cy.iframe('#iframeResult')
      .find('#demo')
      .should('have.value', 'Hello World');
  });
});
