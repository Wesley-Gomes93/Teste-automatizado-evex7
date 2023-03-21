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

    context('Tipo Atendimento Assistencia', () => {
        it(' Cadastrar Tipo Atendimento Assistencia- CADASTRAR', () => {
            cy.acaoTipoAtendimentoAssistencia()
            cy.get('button[id="incluir"]').click()
            cy.get('input[id="titulo"]').type('Condicao Veiculo CypressLtda')
            cy.get('button[id="btnSalvar"]').click()
        })
    })
    context('Tela Tipo Atendimento Assistencia', () => {
        it('Tipo Atendimento', () => {
            cy.acaoTipoAtendimentoAssistencia()
        })

        it('Tipo Atendimento - Pesquisar', () => {
            cy.acaoTipoAtendimentoAssistencia()
            cy.get('button[id="pesquisar"]').click()
        })
    })

})