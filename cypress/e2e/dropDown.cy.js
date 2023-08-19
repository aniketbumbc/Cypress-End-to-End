describe('handle dropdown', () => {
  it.skip('Dropdown selector', () => {
    cy.visit('https://7rdspt.csb.app/');

    cy.get('#cars').select('Audi').should('have.value', 'audi');
  });

  it.skip('Dropdown selector', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

    cy.get('#select2-billing_country-container').click();

    cy.get("input[role='combobox']").type('Italy').type('{enter}');

    cy.get('#select2-billing_country-container').should('have.text', 'Italy');

    cy.get('#select2-billing_country-container').click();
    cy.get("input[role='combobox']").type('Japan').type('{enter}');
    cy.get('#select2-billing_country-container').should('have.text', 'Japan');
  });

  it.skip('Dropdown auto suggest', () => {
    cy.visit('https://www.wikipedia.org/');

    cy.get('#searchInput').type('Mumbai');

    cy.get('.suggestion-title').contains('Mumbai Metro').click();
    cy.get('.mw-page-title-main').contains('Mumbai Metro');
  });

  it('Dropdown auto suggest', () => {
    cy.visit('https://www.google.com/');

    cy.get('#APjFqb').type('Mumbai');
    cy.get('div.wM6W7d>span').should('have.length', 12);

    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
      if ($el.text() == 'Mumbai') {
        cy.wrap($el).click();
      }
    });

    cy.get('#APjFqb').should('have.value', 'Mumbai');
  });
});

//https://www.youtube.com/watch?v=5SNw69hHuNE&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=9
