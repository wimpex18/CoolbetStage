/// <reference types = "cypress" />


describe ('CoolBet Assignment',()=>{
    let initialRoute=Cypress.config('initialRoute')

    beforeEach(function(){
        cy.viewport(1300, 850)
    })

    before(function() {
       
        cy.visit(initialRoute)
      
    })
    
    let userId = Cypress.config('userId')
    let password = Cypress.config('password')
    let lang=Cypress.config('lang')
    let e_lang=Cypress.config('e_lang')

    
    it('User is able to Login ',()=>{

        cy.login(userId,password)
        
    
    })

    
    it('User should be able to change the lanuguage back to English',()=>{
 
        cy.setLanguage(e_lang)

    })



    it('User should be able to change the lanuguage',()=>{

        
        cy.setLanguage(lang)

    })

    it('User should be able to change the lanuguage back to English',()=>{
 
        cy.setLanguage(e_lang)

    })
    
    it('User is able to Navigate in Sports and Casino section',()=>{

        // Navigate to Sports Section
        cy.sportsInformation()
        
        // Navigate to Casino Section
        cy.casinoMenus()
    })




    })
