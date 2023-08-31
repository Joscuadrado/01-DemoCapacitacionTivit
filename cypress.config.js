const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
    // Esto es necesario para que el preprocesador pueda generar informes JSON después de cada ejecución, y más.
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin.default(config)],
        })
    );

    // Asegúrese de devolver el objeto de configuración, ya que podría haber sido modificado por el complemento.
    return config;
}

module.exports = defineConfig({
    e2e: {
        //configuraciones iniciales
        specPattern: "cypress/e2e/features/*.feature", // ubicacion de carpeta de cucumbers
        baseUrl: "https://www.saucedemo.com", //url del aplicativo
        chromeWebSecurity: false, //para que no haya fallas con la url al automatizar
        setupNodeEvents,
    },
});