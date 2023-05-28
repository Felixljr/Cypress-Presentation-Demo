/// <reference types="cypress" />

describe('Home Page', () => {
  it('Should have a title and button in the navbar', () => {
    //go to the home page
    cy.visit('http://127.0.0.1:5173/')
    //find the div with the class of shadow and check if it contains the text
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
    cy.get('[data-cy=welcome]').should('exist')
  })

    it('Should have a welcome message with credentials', () => {
      //go to the home page
      cy.visit('http://127.0.0.1:5173/')
      //classes and DOM elements may change; better to use data-cy
      // https://docs.cypress.io/guides/references/best-practices
      cy.get('[data-cy=welcome]').should('exist')
    })

    //cy.visit can be simplified by adding the baseUrl to cypress.json; see cypress.config.js



})
