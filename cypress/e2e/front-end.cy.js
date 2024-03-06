describe('Front-End testing', () => {
  it('Visits the main page', () => {
    cy.visit('/')
  })
}  )

describe('Finds 404 page', () => {
  it('Visits the 404 page', () => {
    cy.visit('/not-a-real-page')
    cy.contains('Oops!')
  })
  it('returns to the home page', () => {
    cy.visit('/not-a-real-page')
    cy.contains('Go Home').click()
    cy.url().should('include', '/')
  })

})

describe('Checks for the login page', () => {
  it('Visits the login page', () => {
    cy.visit('/login')
    cy.contains('Login')
  })
})

describe('Checks for the register page', () => {
  it('Visits the signup page', () => {
    cy.visit('/register')
    cy.contains('Register')
  })
})

describe('Checks for the about us page', () => {
  it('Visits the about us page', () => {
    cy.visit('/about')
    cy.contains('About Us')
  })
  it('checks for the names in the about us page', () => {
    cy.visit('/about')
    cy.contains('Keyondre')
    cy.contains('Jaylin')
    cy.contains('Oscar')

  })
} )


describe('Checks for the contact page', () => {
  it('Visits the contact page', () => {
    cy.visit('/contact')
    cy.contains('Send Us a Message')
  })
})

describe('Checks the forum page', () => {
  it('Visits the forum page', () => {
    cy.visit('/forum')
    cy.contains('Forum')
  })
})