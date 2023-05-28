/// <reference types="cypress" />

// add the line above to get intellisense for cypress commands

describe('Account Page', () => {
  //Use beforeEach hook to run code before each test and keep your code DRY
  //afterEach is also available however beforeEach is more common
  //when clean up is needed between tests, use beforeEach
  //https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks
  beforeEach(() => {
    //go to the account page
    cy.visit('/account')
  })

  it('SignIn/Reg button should have changed to Sign Out', () => {
    //Check that the Sign In button changed to Sign Out
    cy.get('[data-cy="SignOut"]').contains('Sign Out')
  })

  //Dropdowns
  it('Should have a dropdown with 3 options', () => {
    // Click on the Dropdown button to open the menu
    cy.get('[data-cy="Dropdown"]').find('button').click()
    // Find all the options in the Dropdown menu; assign them to the alias 'options'
    cy.get('[data-cy="Dropdown"]').find('a').as('options')
    // use the alias starting with @ to reference the options
    // Click on the last (based on DOM) option in the menu
    cy.get('@options').last().click()
    // Check that the selection appears in the adjacent div
    cy.get('[data-cy="Selection"]').contains('License')
  })

  //Attributes
  it('Should have one active and one diabled button', () => {
    // Click on the Dropdown button to open the menu
    cy.get('[data-cy="active"]').should('be.enabled') //assert that the button is enabled 
    cy.get('[data-cy="notActive"]').should('be.disabled') //assert that the button is disabled
  })
})
