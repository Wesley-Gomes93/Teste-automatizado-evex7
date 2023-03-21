///<reference types="cypress"/>
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
        cy.wait(200)
        cy.get('.menu-button').should('be.visible').click()
    })

    context('Acoes basicas na tela Condicao Assistencia', () => {
        const currentDate = moment().format("DD/MM");

        it('Condição Assistência ', () => {
            cy.acaoCondicoesAssistencia()
        })

        it('Condição Assistência - Pesquisar', () => {
            cy.acaoCondicoesAssistencia()
            cy.get('button[id="pesquisar"]').click()
        })

        it('Condição Assistência - Editar', () => {
            cy.acaoCondicoesAssistencia()
            cy.get('button[id="tabelaResultadoPesquisa:4:j_idt369"]').should('be.visible')
            cy.get('button[id="tabelaResultadoPesquisa:4:j_idt369"]').click()
            cy.get("#ativo").click()
            cy.get('input[id="titulo"]').clear().type('Test CypressIO ' + currentDate)
            cy.get('button[id="btnSalvar"]').click()
        })
    })

    context('Cadastrar Condicao Assistencia', () => {
        it('Condição Assistência - CADASTRAR', () => {
            cy.acaoCondicoesAssistencia()
            cy.get('button[id="incluir"]').click()
            cy.get("#ativo").click()
            cy.get('input[id="titulo"]').type('Test CypressIO')
            cy.get('button[id="btnSalvar"]').click()
        })
    })
})