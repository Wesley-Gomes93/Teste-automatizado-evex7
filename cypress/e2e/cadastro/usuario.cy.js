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
    })


    context('Ações Basicas', () => {
        it('Cadastro - Consultor - Usuario Inativo - Pesquisar', () => {
            cy.acaoPesquisarUsuarioInativo()
        })

        it('Cadastro - Consultor - Usuario Ativo - Pesquisar', () => {
            cy.acaoPesquisarUsuarioAtivo()
        })
    })

    context('Menu Ações - Usuario', () => {
        it('Cadastro - Consultor - Usuario - Ações - Historico', () => {
            cy.acaoUsuarioHistorico()
            cy.wait(900)
        })

        it('Cadastro - Consultor - Usuario - Ações - VSFone', () => {
            cy.acaoUsuarioVsfone()
            cy.wait(900)
        })

        it('Cadastro - Consultor - Usuario - Ações - Configuracao', () => {
            cy.acaoUsuarioConfiguracao()
            cy.wait(900)
        })

        it('Cadastro - Consultor - Usuario - Ações - Acesso Sistema', () => {
            cy.acaoUsuarioAcessoSistema()
            cy.wait(900)
        })

        it('Cadastro - Consultor - Usuario - Ações - Hora Extra', () => {
            cy.acaoUsuarioHoraExtra()
            cy.wait(900)
        })
    })
})