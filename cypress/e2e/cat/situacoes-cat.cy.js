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

    context('Acoes Basicas Tela Situacao Cat', () => {
        it('Situacoes C.A.T - Pesquisar', () => {
            cy.acaoSituacaoCat()
            cy.get('button[id="pesquisarBotao"]').click()
        })

        it('Situacoes C.A.T ', () => {
            cy.acaoSituacaoCat()
        })

        it('Menu Assistência - Condição Assistência - Editar', () => {
            cy.acaoSituacaoCat()
            cy.get('button[id="tabelaResultadoPesquisa:0:j_idt382"]').should('be.visible')
            cy.get('button[id="tabelaResultadoPesquisa:0:j_idt382"]').click()
            cy.wait(500)
            cy.get('input[id="titulo"]').clear().type('TESTE CYPRESS LTDA')
            cy.get('button[id="btnSalvar"]').click()
        })

    })

    context('Acoes Basicas Tela Situacao Cat', () => {
        it.only('Situacoes C.A.T - Cadastrar', () => {
            cy.acaoSituacaoCat()
            cy.get('button[id="j_idt362"]').click()
            cy.get('input[id="titulo"]').type('TESTE CYPRESS')
            cy.get("#j_idt393").click()
            cy.get("#j_idt399").click()
            cy.get("#j_idt403").click()
            cy.get("#j_idt407").click()
            cy.get("#j_idt421").click()
            cy.get("#j_idt423").click()
            cy.get('input[id="qtdeHorasVerde"]').type('500')
            cy.get('input[id="qtdeHorasAmarelo"]').type('350')
            cy.get('li[data-item-label="ANÁLISE EXTERNA SOLICITADA [C] [FR]"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-item-label="ANÁLISE EXTERNA SOLICITADA [C] [FR]"]').dblclick()
            
            cy.get('li[data-item-label="GERAL - ANÁLISE TÉCNICA DEFINITIVA [C]"]').dblclick()
            cy.get('li[data-item-label="SOLICITAÇÕES - REGULADOR CAT [C]"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-item-label="SOLICITAÇÕES - REGULADOR CAT [C]"]').dblclick()
            cy.get('button[id="btnSalvar"]').click()
        })
    })

})