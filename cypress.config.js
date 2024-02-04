const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
//const commonConfig = {
//  baseUrl: "http://localhost:3000",
//  retries: 0,
//  setupNodeEvents(on, config) {
//  },
//};
//
//module.exports = {
//  laptop: defineConfig({
//    ...commonConfig,
//    viewportWidth: 1366,
//    viewportHeight: 768,
//  }),
//
//  mobile: defineConfig({
//    ...commonConfig,
//    viewportWidth: 375,
//    viewportHeight: 667,
//  }),
//};

