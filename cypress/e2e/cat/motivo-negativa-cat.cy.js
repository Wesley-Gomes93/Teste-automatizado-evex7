///<reference types="cypress"/>

describe('EVEX7 test', () => {
    beforeEach(() => {
        // funcao pra ser inicializada sempre antes de todos os testes, 
        cy.clearLocalStorage()
        cy.viewport(1440, 900);
        cy.visit('/')
        cy.get('#loginForm h4').should('have.text', 'Seja bem-vindo ao EVEX7!')
        cy.login(Cypress.env('loginInpt'), Cypress.env('pwd'))
        cy.url().should('eq', 'http://localhost:8080/sav-web-1.0/inicio.faces')
        cy.wait(200)
        cy.get('.menu-button').should('be.visible').click()
    })

    context('Motivo negativa', () => {
        it('Acoes basica tela motivo negativa', () => {
            cy.acaoMotivoNegativa()
            cy.get('input[id="tabelaResultadoPesquisa:j_idt367:filter"]').type('Cypress.io')
            cy.wait(700)
        })
    })

    context('Cadastrar Motivo negativa', () => {
        it('Acoes basica tela motivo negativa', () => {
            cy.acaoMotivoNegativa()
            cy.get('button[id="novoBotao"]').click()
            cy.get('input[id="modalMotivoNegativa:descMotivo"]').type('Cypress.io')
            cy.get('label[id="modalMotivoNegativa:j_idt400"]').click()
            // cy.get('button[id="modalMotivoNegativa:j_idt409"]').click()
        })
    })

})