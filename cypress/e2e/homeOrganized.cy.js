/// <reference types="cypress" />
//This test suite is organized more realistically than homeForDemo.cy.js
//This is a more realistic example of how you might organize your tests into more describe blocks

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  describe('Navbar features: title and sign in button', () => {
    it('Should have a title and button in the navbar', () => {
      cy.get('.shadow').contains("Felix' Cypress Demo")
      cy.get('.bg-black').contains('Sign In /')
    })

    it('Should have a welcome message with credentials on main page', () => {
      cy.get('[data-cy="welcome"]').should('exist')
    })
  })

  describe('SignIn/Registration Modal Tests', () => {
    beforeEach(() => {
      cy.get('[data-cy="SignIn/Reg"]').click()
    })

    it('Modal should switch between Sign in and Registration', () => {
      cy.get('[data-cy="Register"]').click()
      cy.get('input').should('have.length', 3)
      cy.get('[data-cy="SignIn"]').click()
    })

    it('Test invalid Sign In', () => {
      cy.get('[data-cy="email"]').type('felix@felix.com')

      cy.fixture('demoFixture').then((userData) => {
        cy.get('[data-cy="password"]').type(userData.invalid_password)
        cy.get('[data-cy="SignInButton"]').click()
        cy.get('[data-cy="Notification"]').contains('Invalid Credentials')
      })
    })
  })

  describe('Login Functionality Tests', () => {
    beforeEach(() => {
      cy.clock()
      cy.partialLogin()
    })

    it('Should be able to log in successfully', () => {
      cy.fixture('demoFixture').then((userData) => {
        cy.get('[data-cy="password"]').type(userData.password)
        cy.get('[data-cy="SignInButton"]').click()
        cy.get('[data-cy="Notification"]').contains('Sign In Successful')
        cy.getCookie('cookieForFelix')
          .should('exist')
          .should('have.property', 'value', 'thanks')
        cy.tick(10000)
        cy.location('pathname').should('eq', '/account')
      })
    })
  })
})
