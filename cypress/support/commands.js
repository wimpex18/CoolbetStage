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

const initials = 
{
    english: 'en',
    estonian: 'et',
    finnish: 'fi',
    norwegian: 'no',
    swedish: 'sv',
    island: 'is',
    chile: 'cl',
    danish: 'da',
    russian: 'ru'
}

    Cypress.Commands.add('login',(userId,password)=>{

        cy.get('[data-test="logi-sisse"]').click()
        // Enter user id
        cy.get('[data-test="input-email"]').type(userId)
        // Enter password
        cy.get('[data-test="input-password"]').type(password)
        cy.get('[data-test="button-submit"]').click()

    })

    Cypress.Commands.add('setLanguage', (lang) => {

        let langInitials = initials[lang.toLowerCase()]
        cy.get('.ui-language-select-mini-text').then(($el) => {
        if($el.text() !== langInitials) {
            cy.get('.ui-language-select-mini-board-language-text').contains(langInitials).click({ force: true });
        }

    });

    Cypress.Commands.add('sportsInformation',()=>{

        cy.get('[url="/en/sports"] > .sc-htpNat').click()
        cy.get('.sport-matches').should('be.visible')
    }) 
    
    
    Cypress.Commands.add('casinoMenus',()=>{
        
        cy.get('[url="/en/casino/slots/lobby"] > .sc-htpNat').click()
        cy.get('.casino-shell-content-container').should('be.visible')
    })  

    
    


    })