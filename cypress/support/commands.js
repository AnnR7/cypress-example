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
Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click()
    if (email)
       cy.get('#mail').type('bropet@mail.ru')
    if (password)
       cy.get('#pass').type('123')
    cy.contains('Submit').click()
})

Cypress.Commands.add('loginAndAddInformBook', (email, password, title, description, authors,) => {
    cy.contains('Log in').click()
    cy.get('#mail').type('bropet@mail.ru')
    cy.get('#pass').type('123')
    cy.contains('Submit').click()
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible')
    cy.contains('Add new').click()
    cy.get('#title').type('Война и мир')
    cy.get('#description').type('о 1812 годе')
    cy.get('#authors').type('Толстой Л.Н.')
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => {
//})
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })