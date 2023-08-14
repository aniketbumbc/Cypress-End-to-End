describe('css locator ', () => {
  it('visist and grab title', () => {
    cy.visit('http://www.cricbuzz.com/');
    cy.get('#cricbuzz-plus-main-menu').click();
    cy.get('#page-wrapper')
      .parent()
      .within(() => {
        cy.get('.cb-nav-main')
          .parent()
          .within(() => {
            cy.get('h1.cb-nav-hdr').contains('Cricbuzz Plus');
          });
      });
  });

  it('visist and grab video title', () => {
    cy.visit('http://www.cricbuzz.com/');
    cy.get('#cricbuzz-plus-main-menu').click();
    cy.get('.cb-nav-main')
      .parent()
      .within(() => {
        cy.get('a.cb-nav-tab').contains('Videos');
      });
  });
});

//# CSS selector
// tag#id
//tag.class
//tag[attribute='value']
//tag.class[attribute='value']

//https://www.youtube.com/watch?v=1XHGJcBZI_0&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=4
