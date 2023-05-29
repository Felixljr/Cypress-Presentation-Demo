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

  //The next 3 test could be a part of their own test suite, but they are left here to demonstrate the use of beforeEach

  //Dropdowns
  it('Should have a dropdown with options, select the 3rd to display', () => {
    // Click on the Dropdown button to open the menu
    // find is within the scope of the element selected by get
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
  it('Should have one active and one disabled button', () => {
    // Assert that the active button is enabled

    // Use a custom Query (addQuery) to select by cyID; see cypress/support/commands.js
    cy.cyId('active').should('be.enabled')

    // Assert that the notActive button is disabled using 'attr' for the attribute
    cy.get('[data-cy="notActive"]').should('have.attr', 'disabled')

    // Extension using Chai assertions
    // Use DOM traversal/relationships
    cy.cyId('active')
      .parent()
      .should((el) => {
        // Use Chai to assert that the parent element has the correct class
        expect(el)
          .to.have.class('flex')
          .and.have.class('flex-row')
          .and.have.class('justify-evenly')
      })
  })

  //Intercepting  

 it('Should be able to retrieve data from the database and intercept it', () => {
   // Click the button to retrieve real data
   cy.get('[data-cy="GetRealData"]').click()

   // Wait for the real data to be displayed
   cy.get('[data-cy="DataDisplay"]').should('contain', 'I made it!')

   // Intercept the data and use hard-coded data instead
   cy.intercept('GET', 'http://localhost:3000/posts/1/messages', (req) => {
     req.reply({
       statusCode: 200,
       body: {
         success: 'Intercepted data',
       },
     })
   }).as('interceptedRequest')

   // Click the button to retrieve intercepted data
   cy.get('[data-cy="GetInterceptedData"]').click()

   // Wait for the intercepted data to be displayed
   cy.wait('@interceptedRequest')
   cy.get('[data-cy="DataDisplay"]').should('contain', 'Intercepted data')
 })

})


describe('Get User Geolocation', () => {
  beforeEach(() => {
    // see cypress.config.js for the task
    // this would be used to run functions on the server; if needed
    cy.task('hello', { greeting: 'Hey', name: 'Felix' })

    cy.visit('/account')
    //Get the window object and use .then to access the window object
    cy.window().then((win) => {
      //within the window object access navigator.geolocation and the function getCurrentPosition on it
      cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
        //callsFake is a function that takes a callback; this callback is the a fake function that will be called instead of the getCurrentPosition
        (callback) => {
          //hard code the latitude and longitude or any information you want to return
          return callback({
            coords: {
              latitude: 11.111,
              longitude: -11.111,
            },
          })
        }
      )
    })
  })

  it('stubs the user location', () => {
    cy.get("[data-cy='GetLocation']").click()
    cy.get("[data-cy='LocationDisplay']").should(
      'have.text',
      'Lat: 11.111, Long: -11.111'
    )
  })

})

describe('Get check that the clipboard was called once', () => {

  it('should save text to clipboard when button is clicked', () => {
    cy.visit('/account')
    //selecting based on type is okay here because there is only one input on the page
    cy.get('input[type="text"]').type('Copy Me') // Type "Copy Me" into the input field

    cy.window().then((win) => {
      cy.spy(win.navigator.clipboard, 'writeText').as('writeTextSpy') // Spy on the writeText function
    })
    //Another way to get an element
    cy.contains('Save to Clipboard').click() // Click the "Save to Clipboard" button

    cy.get('@writeTextSpy').should('be.calledOnce') // Assert that the writeText function was called once
  })

})