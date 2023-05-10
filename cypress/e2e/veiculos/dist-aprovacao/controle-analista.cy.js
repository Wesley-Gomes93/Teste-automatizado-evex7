///<reference types="cypress"/>
import 'cypress-file-upload';

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

    context('Tela Supervisao Aprovacao', () => {
        it('Supervisao Aprovacao - Pesquisar', () => {
            cy.acaoControleAnalista()
            cy.get('button[id="pesquisar"]').click()            
        })

        it('Supervisao Aprovacao - Novo', () => {
            cy.acaoControleAnalista()
            cy.get('button[id="incluirUsuarioEvento"]').click()  
            cy.get('label[id="j_idt402_label"]').click()  
            cy.get('li[id="j_idt402_13"]').click()  
            cy.get("#j_idt408 > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").click() 
            cy.get('button[id="btSalvar"]').click()   
        })
    })
})