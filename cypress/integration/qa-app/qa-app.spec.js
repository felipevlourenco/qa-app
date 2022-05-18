/// <reference types="Cypress" />

describe('Questions and Answers app', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  it('should load the page successfully', () => {
    cy.get('header').should('be.visible').should('have.text', 'Q & A Application')
  })

  it('should answer be visible when question is click', () => {
    cy.get('li > div > span').click()
    cy.get('li > div > span').eq(1).should('be.visible')
  })

  it('should edit a question', () => {
    const editMessage = 'How to edit this question?'
    cy.get('li > div > span').click()
    cy.get('li > button').first().click()
    cy.get('#question').clear().type(editMessage)
    cy.get('form').first().submit()
    cy.get('li > div > span').first().should('be.visible').should('have.text', editMessage)
  })

  it('should add a question', () => {
    const newQuestion = {
      question: 'Are you ready?',
      answer: "Yes, I'm"
    }
    cy.addQuestion(newQuestion)

    cy.get('li').eq(1).should('be.visible').should('have.text', newQuestion.question)
    cy.get('li > div > span').eq(1).click()
    cy.get('li > div > span').eq(2).should('be.visible').should('have.text', newQuestion.answer)
  })

  it('should add a question with delay', () => {
    const newQuestion = {
      question: 'Are you ready?',
      answer: "Yes, I'm"
    }
    cy.addQuestion(newQuestion, true)

    cy.get('li').eq(1).should('be.visible').should('have.text', newQuestion.question)
    cy.get('li > div > span').eq(1).click()
    cy.get('li > div > span').eq(2).should('be.visible').should('have.text', newQuestion.answer)
  })

  it('should sort questions', () => {
    const firstQuestion = 'How to add a question?'
    cy.get('li > div > span').should('have.text', firstQuestion)
    const newQuestion = {
      question: 'Are you ready?',
      answer: "Yes, I'm"
    }
    cy.addQuestion(newQuestion)

    cy.get('button').first().click()
    cy.get('li > div > span').first().should('have.text', newQuestion.question)
    cy.get('li > div > span').eq(1).should('have.text', firstQuestion)
  })

  it('should delete a question', () => {
    cy.get('li > div > span').click()
    cy.get('li > button').eq(1).click()
    cy.get('main > div > span').should('be.visible').should('have.text', 'No questions in the list')
  })

  it('should delete all questions', () => {
    const newQuestion = {
      question: 'Are you ready?',
      answer: "Yes, I'm"
    }
    cy.addQuestion(newQuestion)
    cy.get('button').eq(1).click()
    cy.get('main > div > span').should('be.visible').should('have.text', 'No questions in the list')
  })
})
