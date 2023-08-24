describe('Table', () => {
  beforeEach('Login', () => {
    cy.visit('https://demo.opencart.com/admin/index.php');
    cy.get('#input-username').type('demo');
    cy.get('#input-password').type('demo');
    cy.get("button[type='submit']").click();
    cy.get('.btn-close').click();
    cy.get(".parent.collapsed[href='#collapse-5']").click();
    cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();
  });

  it('Check number of rows and columns', () => {
    cy.get('.table.table-bordered.table-hover tbody>tr').should(
      'have.length',
      '10'
    );

    cy.get(
      "table[class='table table-bordered table-hover'] thead>tr>td"
    ).should('have.length', '7');
  });

  it('check cell data from specific row & column', () => {
    cy.get(
      '.table.table-bordered.table-hover tbody>tr:nth-child(5)>td:nth-child(3)'
    ).contains('demo234566@gmail.com');
  });

  it.only('check cell data from specific row & column', () => {
    cy.get(
      '.table.table-bordered.table-hover tbody>tr:nth-child(5)>td:nth-child(3)'
    ).contains('demo234566@gmail.com');
  });
});
