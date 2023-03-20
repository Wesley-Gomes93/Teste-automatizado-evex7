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
    
    context('Acoes basicas na tela Situacoes Assistencia', () => {
        it('Pesquisar -', () => {
            cy.acaoSituacoesAssistencia()
            cy.get('button[id="pesquisar"]').click()
        })
    })
    
    context('Acoes basicas na tela Situacoes Assistencia', () => {
        it.only('Editar', () => {
            cy.acaoSituacoesAssistencia()
            cy.get('button[id="tabelaResultadoPesquisa:0:j_idt386"]').click()
            cy.get('li[data-item-label="8 - COMENTÁRIO"]').dblclick()
            cy.wait(999)
        })
    })
    
    context('Acoes basicas na tela Situacoes Assistencia', () => {
        it('Novo', () => {
            cy.acaoSituacoesAssistencia()
            cy.get('button[id="incluir"]').click()
            cy.get('label[id="j_idt393"]').click()
            cy.get('label[id="j_idt397"]').click()
            cy.get('label[id="j_idt405"]').click()
            cy.get('label[id="j_idt410"]').click()
            cy.get('input[id="titulo"]').type('TESTE CYPRESS23/03')
            cy.get('input[id="qtdeHorasVerde"]').type('33')
            cy.get('input[id="qtdeHorasAmarelo"]').type('23')
            // cy.get('button[id="btnSalvar"]').click()
        })
    })
    
})
