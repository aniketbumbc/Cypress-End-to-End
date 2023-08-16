describe('Xpath locator test', () => {
  it('visist and grab title', () => {
    cy.visit('https://www.cricbuzz.com/');
    cy.xpath(
      "//img[@title='Why BCCI, ICC opted for staggered sale of World Cup tickets']"
    ).should('have.length', 1);

    cy.xpath("//span[normalize-space()='IN THE BIG LEAGUE NOW']").should(
      'have.length',
      1
    );
  });
});
