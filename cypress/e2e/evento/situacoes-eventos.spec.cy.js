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
    const situacoesEventos = require('../../../fixtures/situacoesEventos.json')
    situacoesEventos.forEach(situacoesEventos => {
        it.skip(`Situações dos Eventos ${situacoesEventos.descricaoSituacao} - Novo` , () => {
            cy.wait(500)
            cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li [id="menuform:btnMenuEventos"]').click()
            cy.wait(450)
            cy.get('li[id="menuform:btnMenuSituacoesEventos"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuSituacoesEventos"]').click()
            cy.wait(500)
            cy.get('button[id="btnNovo"]').click()
            cy.wait(450)
            cy.get('input[id="dcSituacaoSinistro"]').type('teste cypress teste ')
            cy.wait(500)
            cy.get('label[id="faseAcompanhamentoEdicao_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="faseAcompanhamentoEdicao_label"]').click()
            cy.wait(450)
            cy.get('li[data-label="Final"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-label="Final"]').click()
            cy.wait(500)
            cy.get('label[id="faseExclusivaEventosEdicao_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="faseExclusivaEventosEdicao_label"]').click()
            cy.wait(450)
            cy.get('li[data-label="Sim"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-label="Sim"]').click()
            cy.wait(500)
            cy.get('label[id="processoEvento_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="processoEvento_label"]').click()
            cy.get('li[data-label="ANÁLISE PARCIAL"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-label="ANÁLISE PARCIAL"]').click()
            cy.wait(500)
            cy.get('button[id="btnSalvar"]').click()
            cy.wait(450)

        })

        it(`Situações dos Eventos ${situacoesEventos.descricaoSituacao}`, () => {
            cy.wait(500)
            cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li [id="menuform:btnMenuEventos"]').click()
            cy.wait(450)
            cy.get('li[id="menuform:btnMenuSituacoesEventos"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuSituacoesEventos"]').click()
            cy.wait(500)
            cy.get('button[id="dataTableSituacao:0:j_idt394"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="dataTableSituacao:0:j_idt394"]').click()
            cy.wait(450)
            cy.get('#dcSituacaoSinistro').type(situacoesEventos.descricaoSituacao)
            cy.wait(500)
            cy.get('label[id="mosrtarLinhaTempo_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="mosrtarLinhaTempo_label"]').click()
            cy.wait(500)
            cy.get('li[data-label="Sim"]').click()
            cy.wait(500)
            cy.get('input[id="qtdeDiasVerde"]').type(situacoesEventos.qtdeVerde)
            cy.get('input[id="qtdeDiasAmarelo"]').type(situacoesEventos.qtdeAmarelo)
            cy.wait(500)
            cy.get('button[id="btnSalvar"]').click()
        })
    })
})