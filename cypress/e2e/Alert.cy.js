describe('Alert test cases', () => {
  it('Should show alert correctly', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsAlert()']").click();

    cy.on('window:alert', (value) => {
      console.log(value);
      expect(value).to.contains('I am a JS Alert');
    });

    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  it('Should show alert correctly Ok button click', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm', (value) => {
      console.log(value);
      expect(value).to.contains('I am a JS Confirm');
    });

    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it('Should show alert correctly Cancel button click', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on('window:confirm', () => false); //cypress close alert window if keep false
    cy.get('#result').should('have.text', 'You clicked: Cancel');
  });

  it('Should prompt alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Hello Bunny');
    });

    cy.get("button[onclick='jsPrompt()']").click();
    cy.get('#result').should('have.text', 'You entered: Hello Bunny');
  });

  it('Should prompt cancel click', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    // cy.window().then((win) => {
    //     cy.stub(win, 'prompt').returns('Hello Bunny');
    //   });

    cy.get("button[onclick='jsPrompt()']").click();
    cy.get('#result').should('have.text', 'You entered: null');
  });

  /**
   *  Authentication Alert https://the-internet.herokuapp.com/basic_auth
   */

  it('Authentication Alert using first different method', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: { username: 'admin', password: 'admin' },
    });
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations!');
  });

  it.only('Authentication Alert using second different method', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations!');
  });
});

// https://www.youtube.com/watch?v=TgLRQhw3GDM&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=10

// https://7rdspt.csb.app/
// https://the-internet.herokuapp.com/basic_auth

// https://the-internet.herokuapp.com/windows
