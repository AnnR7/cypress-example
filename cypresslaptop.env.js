const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 0,
    setupNodeEvents(on, config) {
    },
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});