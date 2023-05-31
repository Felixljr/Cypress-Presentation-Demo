# Cypress-Presentation-Demo
A simple site for my tech talk on E2E testing with Cypress. It includes examples of the most common uses.

1. To get started, clone the repo and run `npm i` to install the dependencies. Then run `npm start` to start the servers (Vite and json-server). This project uses Vite so the site should be on `http://127.0.0.1:5173/`. 

Note: Since this poject has no server/database, json-server is used to mock a typical backend (on port 3000).

2. To get cypress up an running, run `npx cypress open` to open the cypress app. 

3. You can also ue the `npx cypress run` command to run the tests in headless mode.

**Note that there are 2 test files for home and account: 
  - `homeForDemo.cy.js` and `accountForDemo.cy.js` are files used for the demo. They are not organized in a way that I would recommend for a real project. They also have a lot of comments to explain what is happening.

  - `homeOrganized.cy.js` and `accountOrganized.cy.js` are the same test files but organized in a way that I would recommend for a real project.