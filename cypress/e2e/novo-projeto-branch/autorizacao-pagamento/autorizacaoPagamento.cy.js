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

    context('Tela Autorização de Pagamento', () => {
        it('Autorização de Pagamento - Pesquisar', () => {
            cy.acaoAutorizacaoPagamento()
            cy.get('button[id="pesquisarVeiculo"]').click()
        })

        it('Autorização de Pagamento - Limpar', () => {
            cy.acaoAutorizacaoPagamento()
            cy.get('button[id="pesquisarVeiculo"]').click()
            cy.get('button[id="limparPesquisa"]').click()
        })
        
        it('Autorização de Pagamento - Negar', () => {
            cy.acaoAutorizacaoPagamento()
            cy.get('button[id="pesquisarVeiculo"]').click()
            cy.get('button[id="tabelaVeiculoAnalitico:0:btnNegar"]').click()
            cy.get('textarea[id="j_idt596:justificativa"]').type('teste teste teste teste teste teste')
            cy.get('button[id="j_idt596:btnFechar"]').click()
        })
    })
})