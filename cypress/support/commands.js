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

Cypress.Commands.add('addQuestion', (question, delay = false) => {
  cy.get('#question').clear().type(question.question)
  cy.get('#answer').clear().type(question.answer)

  if (delay) {
    cy.get('#delay').click()
  }

  cy.get('form').submit()

  if (delay) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(6000)
  }
})
