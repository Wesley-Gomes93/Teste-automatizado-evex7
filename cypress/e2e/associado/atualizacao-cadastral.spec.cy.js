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
        cy.get('.menu-button > .pi').click()
        cy.wait(500)
    })

    context('Ações Basicas', () => {
        it('Teste Menu Atualizacao Cadastral - Pesquisar', () => {
            cy.acaoPesquisarAtualizacaoCadastral()
        })

        it('Teste Menu Atualizacao Cadastral - Limpar', () => {
            cy.acaoLimparAtualizacaoCadastral()
        })
    })

    context('Menu Ação', () => {
        it('Teste Menu - Atualizacao Cadastral - Ações - Confirmar', () => {
            cy.acaoConfirmarAtualizacaoCadastral()
        })

        it('Teste Menu - Atualizacao Cadastral - Ações - Negar', () => {
            cy.acaoNegarAtualizacaoCadastral()
        })
    })
})