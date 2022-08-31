const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 1200,
    chromeWebSecurity: false,
    pageLoadTimeout: 25000,
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});



//I took it here https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/examples/esbuild-cjs/cypress.config.js