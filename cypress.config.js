import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5173/', //use this as the base url for all tests
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
