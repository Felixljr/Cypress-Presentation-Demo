/// <reference types="cypress" />

describe('Home Page', () => {
  it('Should have two options in navbar', () => {
    cy.visit('http://127.0.0.1:5173/')
  })
})