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

    describe('Ações basicas', () => {
        it('Juridico - Consultoria Juridica - Entrar na Tela', () => {
            cy.acaoPesquisarConsultoriaJuridica()
        })

        it('Juridico - Consultoria Juridica - Pesquisar', () => {
            cy.acaoPesquisarConsultoriaJuridica()
            cy.get('button[id="pesquisarVeiculo"]').click()
        })

        it('Juridico - Consultoria Juridica - Limpar', () => {
            cy.acaoLimparConsultoriaJuridica()
        })
    })

    describe('Menu Ações', () => {
        it('Juridico - Consultoria Juridica - Ações ', () => {
            cy.acaoPesquisarConsultoriaJuridica()
            cy.get('button[id="pesquisarVeiculo"]').click()
            cy.get('button[id="tabelaSolicitacao:0:btnAnalisar"]').click()
            cy.wait(500)
        })

        it.skip('Juridico - Consultoria Juridica - Ações - Incluir Resposta ', () => {
            cy.acaoPesquisarConsultoriaJuridica()
            cy.get('button[id="pesquisarVeiculo"]').click()
            cy.get('button[id="tabelaSolicitacao:0:btnAnalisar"]').click()
            cy.wait(500)
            cy.get('button[id="formConsultoria:j_idt572"]').click()
            cy.wait(500)
            cy.get('textarea[id="formConsultoria:j_idt577"]').type('textarea cypress.io')
            cy.wait(500)
            cy.get('button[id="formConsultoria:responder"]').click()
        })
    })
})