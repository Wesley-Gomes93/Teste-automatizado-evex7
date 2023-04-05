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

    context('Acoes basicas da tela Controle de processos', () => {
        it('Controle de processos - Filtro Descricao', () => {
            cy.acaoControleEventoJuridico()
            cy.get('input[id="tabelaResultadoPesquisa:j_idt367:filter"]').type('Acordo')
        })
        it('Controle de processos - Editar', () => {
            cy.acaoControleEventoJuridico()
            cy.get('button[id="tabelaResultadoPesquisa:0:j_idt381"]').click()
        })
    })

    context('Cadastrar novo controle de processos', () => {
        it.only('Cadastrar', () => {
            cy.acaoControleEventoJuridico()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.get("#formModalSituacaoJuridico\\:j_idt388 > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").click()
            cy.get('input[id="formModalSituacaoJuridico:j_idt386"]').type('Cypress.io')
            cy.get('label[id="formModalSituacaoJuridico:processoJuridico_label"]').click().click()
            cy.wait(500)
            cy.get('li[data-label="Ressarcíveis"]').click()
            cy.get('button[id="formModalSituacaoJuridico:j_idt398"]').click()
        })
    })
})