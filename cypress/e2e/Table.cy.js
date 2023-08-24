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

  it('read data from first page row & column', () => {
    cy.get('.table.table-bordered.table-hover tbody>tr').each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get('td').each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it.only('pagination in table', () => {
    let totalPages = 5;

    // cy.get('.col-sm-6.text-end').then((value) => {
    //   let myText = value.text();
    //   totalPages = myText.substring(
    //     myText.indexOf('(') + 1,
    //     myText.indexOf('Pages') - 1
    //   );
    //   cy.log('totalPages', totalPages);
    // });

    for (let i = 1; i <= totalPages; i++) {
      if (totalPages > 1) {
        cy.get(`.pagination>li:nth-child(${i})`).click();

        cy.wait(400);

        cy.get('.table.table-bordered.table-hover tbody>tr').each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get('td:nth-child(3)').then((e) => {
                cy.log(e.text());
              });
            });
          }
        );
      }
    }
  });
});
