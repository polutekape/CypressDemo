/// <reference types="cypress" />

//const { after } = require("cypress/types/lodash")

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Visit the Demo Web Shop application', () => {
    beforeEach(() => {
      // Cypress starts out with a blank state for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('/')
    })

    it("Login to the application",()=>{
        //Arrange
        cy.get('.ico-login').click();

        //Action
        cy.get('#Email').type('demo12@hotmail.com')
        cy.get('#Password').type('demodemo12!!')
        cy.get('#RememberMe').check();
        cy.get('form > .buttons > .button-1').click();

        //Assert
        cy.get('.header-links > ul > :nth-child(1) > .account').should('have.text', 'demo12@hotmail.com')
    })

    it("Logout to the application",()=>{
        //Arrange
        cy.get('.ico-login').click();
        

        //Action
        cy.get('#Email').type('demo12@hotmail.com')
        cy.get('#Password').type('demodemo12!!')
        cy.get('#RememberMe').check();
        cy.get('form > .buttons > .button-1').click();
        cy.get('.ico-logout').click()
        
        //Assert
        cy.get('.ico-register').should('be.visible')
    })
})