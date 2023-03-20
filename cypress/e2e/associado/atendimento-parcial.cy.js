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

    context('Acao Basica', () => {
        it('Pesquisar', () => {
            cy.acaoPesquisarAtendimentoParcial()
            cy.get('button[id="pesquisarBtn"]').click()
        })
        it('Limpar', () => {
            cy.acaoLimparAtendimentoParcial()
            cy.get('button[id="limparPesquisa"]').click()
        })
    })


})
