const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '893mc8',
  e2e: {
    /*setupNodeEvents(on, config) {
      // implement node event listeners here
    },*/
    baseUrl: 'https://demowebshop.tricentis.com'
  },
});
