describe('Xpath locator test', () => {
  it('visist and grab title', () => {
    cy.visit('https://www.cricbuzz.com/');
    cy.xpath("img[@title=''Baby AB' given a chance to grow up']").should(
      'have.length',
      1
    );
  });
});
