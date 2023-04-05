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
        cy.get('.menu-button > .pi').should('be.visible').then(() => { cy.wait(500) });
        cy.get('.menu-button > .pi').click()
        cy.wait(500)
    })

    context('Controle de evento juridico', () => {
        it('Controle evento juridico - pesquisar', () => {
            cy.acaoControleEventoJuridico()
            cy.get('button[id="pesquisarVeiculo"]').click()
        })
        it('Controle evento juridico - limpar', () => {
            cy.acaoControleEventoJuridico()
            cy.get('button[id="pesquisarVeiculo"]').click()
            cy.wait(700)
            cy.get('button[id="limparPesquisa"]').click()
        })
    })
    context('Controle de evento juridico', () => {
        it('Controle evento juridico - acções - analisar', () => {
            cy.acaoControleEventoJuridico()
            cy.get('button[id="pesquisarVeiculo"]').click()
            cy.get('button[id="tabelaEvento:0:acoes_button"]').click()
           cy.get("#tabelaEvento\\:0\\:acoes_menu > ul > li:nth-child(1) > a").click()
        })
        it('Controle evento juridico - acções - acompanhar andamento', () => {
            cy.acaoControleEventoJuridico()
            cy.get('button[id="pesquisarVeiculo"]').click()
            cy.get('button[id="tabelaEvento:0:acoes_button"]').click()
            cy.get('a[id="tabelaEvento:0:btnAbrirEventoAcompanhamentoContato"]').click()
        })
    })
})
