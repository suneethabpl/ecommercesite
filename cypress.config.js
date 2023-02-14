const { defineConfig } = require('cypress')

module.exports = defineConfig({
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 1000000,
    chromeWebSecurity: false,
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
        specPattern: 'cypress/integration/**/*.{feature,features,js}',
    },
})