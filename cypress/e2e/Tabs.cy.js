describe('Tab operations', () => {
  it('Handled tabs approch 1', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');

    cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click();

    cy.url().should(
      'include',
      'https://the-internet.herokuapp.com/windows/new'
    );

    cy.get("div[class='example'] h3").contains('New Window');

    cy.wait(5000);
    cy.go('back');
  });

  it.only('Handled tabs approch 1', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');

    cy.get("a[href='/windows/new']").then((value) => {
      let url = value.prop('href');

      cy.visit(url);
    });

    cy.url().should(
      'include',
      'https://the-internet.herokuapp.com/windows/new'
    );

    cy.get("div[class='example'] h3").contains('New Window');

    cy.wait(5000);
    cy.go('back');
  });
});
