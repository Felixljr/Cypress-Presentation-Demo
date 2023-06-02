import { defineConfig } from 'cypress'
// chalk is only used to make the output easier to spot in the console
import chalk from 'chalk'
//default config is fine for most use cases****

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5173/', //use this as the base url for all tests
    video: true, //record video of tests
    screenshotOnRunFailure: true, //take a screenshot on test failure
    // defaultCommandTimeout: 10000, //default is 4 seconds can also be used locally with ({timout: 10000})
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        hello({ greeting, name }) {
          // chalk is only used to make the output easier to spot in the console
          console.log(chalk.magenta(`${greeting}, how are you ${name}`))
          return null
        },
      })
    },
  },
})
