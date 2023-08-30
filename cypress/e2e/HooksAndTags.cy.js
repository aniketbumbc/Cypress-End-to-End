describe('MyTestSuite', () => {
  beforeEach(() => {
    cy.log('before each log');
  });

  afterEach(() => {
    cy.log('after each log');
  });

  before(() => {
    cy.log('before log');
  });

  after(() => {
    cy.log('after log');
  });

  it('search', () => {});

  it('Advanced', () => {});

  it('product listing', () => {});
});
