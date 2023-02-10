const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);

      return config;
    },
    projectId: "1d7yqc",
    baseUrl: 'http://localhost:8080/sav-web-1.0/',
  },
});
