/// <reference types="cypress" />

// add the line above to get intellisense for cypress commands

describe('Home Page', () => {
  it('Should have a title and button in the navbar', () => {
    //go to the home page
    cy.visit('http://127.0.0.1:5173/')
    //find the div with the class of shadow and check if it contains the text; can also select by id
    cy.get('.shadow').contains("Felix' Cypress Demo")
    //Partial text will match; this is case sensitive!
    cy.get('.bg-black').contains('Sign In /')
  })

  //each test is isolated, so the page needs to be reloaded each time

  it('Should have a welcome message with credentials', () => {
    //go to the home page
    cy.visit('http://127.0.0.1:5173/')
    //classes and DOM elements may change; better to use data-cy
    // https://docs.cypress.io/guides/references/best-practices
    cy.get('[data-cy="welcome"]').should('exist')
  })

  it('Clicking SignIn/Reg should open modal and modal should switch between Sign in and Registration; test invalid Sign In', () => {
    //cy.visit can be simplified by adding the baseUrl to cypress.json; see cypress.config.js
    cy.visit('/')
    //click the button
    // https://docs.cypress.io/guides/references/best-practices
    cy.get('[data-cy="SignIn/Reg"]').click()
    cy.get('[data-cy="Register"]').click()
    //select by element and ensure the count is accurate
    cy.get('input').should('have.length', 3)
    cy.get('[data-cy="SignIn"]').click()
    // use .type to enter text into the input
    cy.get('[data-cy="email"]').type('felix@felix.com')
    // Need to share data between tests? Use Fixtures!
    // follow normal form submission process including invalid data
    // here we are submitting the form with the wrong password
    cy.fixture('demoFixture').then((userData) => {
      cy.get('[data-cy="password"]').type(userData.invalid_password)
      cy.get('[data-cy="SignInButton"]').click()
      cy.get('[data-cy="Notification"]').contains('Invalid Credentials')
    })
  })

  

})
