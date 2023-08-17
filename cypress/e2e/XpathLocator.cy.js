describe('Xpath locator test', () => {
  it('visist and grab title', () => {
    cy.visit('https://www.cricbuzz.com/');
    cy.xpath(
      "//img[@title='Ireland cricket setting sail again, now with Captain Stirling']"
    ).should('have.length', 1);
  });
});
