const { defineConfig } = require('cypress');

module.exports = {
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotFailture = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};
