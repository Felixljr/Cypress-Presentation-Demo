# Cypress-Presentation-Demo
A simple site for my tech talk on E2E testing with Cypress. It includes examples of the most common uses.

1. To get started, clone the repo and run `npm i` to install the dependencies. Then run `npm start` to start the servers (Vite and json-server). This project uses Vite so the site should be on `http://127.0.0.1:5173/`.
In case it is not, check the terminal to see what port it is on; sometimes it runs on `http://localhost:5173/` instead.

Note: Since this poject has no true server/database, json-server is used to mock a typical backend (on port 3000). If port 3000 is already in use, check the terminal to see what port it is running on; please also note this will affect the application and tests, make the necesary changes in the `AccountPage.jsx `(within the handleInterceptSection function) and the `accountForDemo.cy.js` (within the intercepting Section).

2. To get cypress up an running, run `npx cypress open` to open the cypress app. 

3. You can also ue the `npx cypress run` command to run the tests in headless mode.

**Note that there are 2 test files for home and account: 
  - `homeForDemo.cy.js` and `accountForDemo.cy.js` are files used for the demo. They are not organized in a way that I would recommend for a real project. They also have a lot of comments to explain what is happening.

  - `homeOrganized.cy.js` and `accountOrganized.cy.js` are the same test files as above but organized in a way that is more realistic but still not ideal; for more information visit: https://www.testim.io/blog/test-suite/