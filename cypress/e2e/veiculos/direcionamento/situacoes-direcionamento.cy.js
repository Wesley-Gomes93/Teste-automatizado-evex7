///<reference types="cypress"/>
import 'cypress-file-upload';
const moment = require("moment/moment");


describe('EVEX7 test', () => {

    beforeEach(() => {
        // funcao pra ser inicializada sempre antes de todos os testes, 
        cy.clearLocalStorage()
        cy.viewport(1440, 900);
        cy.visit('/')
        cy.get('#loginForm h4').should('have.text', 'Seja bem-vindo ao EVEX7!')
        cy.login(Cypress.env('loginInpt'), Cypress.env('pwd'))
        cy.url().should('eq', 'http://localhost:8080/sav-web-1.0/inicio.faces')
        cy.get('.menu-button > .pi').should('be.visible').then(() => { cy.wait(500) });
        cy.get('.menu-button > .pi').click()
        cy.wait(500)
    })

    context('Tela situações direcionamento', () => {
        
        it('situações direcionamento - Pesquisar', () => {
            cy.acaoSituacoesDirecionamento()
            cy.get('button[id="pesquisar"]').click()            
        })
        
        it.only('situações direcionamento - Novo', () => {
            const currentDate = moment().format("DD/MM");
            cy.acaoSituacoesDirecionamento()
            cy.get('button[id="incluir"]').click()      
            cy.get("#j_idt406 > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").click()    
            cy.get("#j_idt411 > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").click()  
            cy.get('input[id="titulo"]').type(currentDate + 'teste cypress')
        })

    })
})