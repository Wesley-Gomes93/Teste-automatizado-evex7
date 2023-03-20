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

    context('Acoes na tela Serviso Assistencia ', () => {
        it('Acoe Basica - Pesquisar', () => {
            cy.acaoServicoAssistencia()
            cy.get('button[id="pesquisar"]').click()
        })
    })

    context('Acoes na tela Serviso Assistencia ', () => {
        it('Acoe Basica - Editar', () => {
            cy.acaoServicoAssistencia()
            cy.get('button[id="tabelaResultadoPesquisa:0:j_idt368"]').click()
        })
    })

    context('Cadastrar Serviso Assistencia ', () => {
        it('Novo', () => {
            cy.acaoServicoAssistencia()
            cy.get('button[id="incluir"]').click()
            cy.get('input[id="nomeServico"]').click()
            cy.get('input[id="nomeServico"]').type('Cypress teste')
            cy.get('textarea[id="descricaoServico"]').click()
            cy.get('textarea[id="descricaoServico"]').type('Fazendo teste de ponta a ponta')
            cy.get('label[id="tipoServico_label"]').click()
            cy.get('li[data-label="Reembolso"]').click()
            cy.get('button[id="btnSalvar"]').click()
        })
    })
})