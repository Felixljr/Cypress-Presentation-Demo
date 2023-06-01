/// <reference types="cypress" />

// add the line above to get intellisense for cypress commands

/// <reference types="cypress" />

describe('Account Page', () => {

  describe('All cards on the account page should be functional', () => {
    beforeEach(() => {
      cy.visit('/account')
    })

    it('SignIn/Reg button should change to Sign Out', () => {
      cy.get('[data-cy="SignOut"]').contains('Sign Out')
    })
  })

  describe('Dropdown', () => {
    beforeEach(() => {
      cy.visit('/account')
    })

    it('Should have a dropdown 3 options, select the last one, should say License', () => {
      cy.get('[data-cy="Dropdown"]').find('button').click()
      cy.get('[data-cy="Dropdown"]').find('a').as('options')
      cy.get('@options').last().click()
      cy.get('[data-cy="Selection"]').contains('License')
    })
  })

  describe('Attributes', () => {
    beforeEach(() => {
      cy.visit('/account')
    })

    it('Should have one active and one disabled button', () => {
      cy.cyId('active').should('be.enabled')
      cy.get('[data-cy="notActive"]').should('have.attr', 'disabled')
      cy.cyId('active')
        .parent()
        .should((el) => {
          expect(el)
            .to.have.class('flex')
            .and.have.class('flex-row')
            .and.have.class('justify-evenly')
        })
    })
  })

  describe('Intercepting data from database', () => {
    beforeEach(() => {
      cy.visit('/account')
    })

    it('Should be able to retrieve data from the database and intercept it', () => {
      cy.get('[data-cy="GetRealData"]').click()
      cy.get('[data-cy="DataDisplay"]').should('contain', 'I made it!')
      cy.intercept('GET', 'http://localhost:3000/posts/1/messages', (req) => {
        req.reply({
          statusCode: 200,
          body: {
            success: 'Intercepted data',
          },
        })
      }).as('interceptedRequest')
      cy.get('[data-cy="GetRealData"]').click()
      cy.wait('@interceptedRequest')
      cy.get('[data-cy="DataDisplay"]').should('contain', 'Intercepted data')
    })
  })

  describe('Get user geolocation', () => {
    beforeEach(() => {
      cy.task('hello', { greeting: 'Hey', name: 'Felix' })
      cy.visit('/account')
      cy.window().then((win) => {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
          (callback) => {
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

    it('User location should be stubbed with hard coded values', () => {
      cy.get("[data-cy='GetLocation']").click()
      cy.get("[data-cy='LocationDisplay']").should(
        'have.text',
        'Lat: 11.111, Long: -11.111'
      )
    })
  })

  describe('Clipboard Functionality', () => {
    beforeEach(() => {
      cy.visit('/account')
    })

    it('should only be called once when clipbaord button is clicked', () => {
      cy.get('input[type="text"]').type('Copy Me')
      cy.window().then((win) => {
        cy.spy(win.navigator.clipboard, 'writeText').as('writeTextSpy')
      })
      cy.contains('Save to Clipboard').click()
      cy.get('@writeTextSpy').should('be.calledOnce')
    })
  })
})
