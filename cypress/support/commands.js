// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('partialLogin', () => {
  cy.get('[data-cy="SignIn/Reg"]').click()
  cy.get('[data-cy="Register"]').click()
  //select by element and ensure the count is accurate
  cy.get('input').should('have.length', 3)
  cy.get('[data-cy="SignIn"]').click()
  // use .type to enter text into the input
  cy.get('[data-cy="email"]').type('felix@felix.com')
})

//use addQuery to shorten the syntax for selecting by data-cy
Cypress.Commands.addQuery('cyId', (selector) => {
  const getId = cy.now('get', `[data-cy="${selector}"]`)
  return () => {
    const identifyer = getId()
    return identifyer
  }
})
