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

    context('Ações Basicas ', () => {

        it('Teste Menu - Associado Consultar Associado', () => {
            cy.acaoConsultarAssociado()
        })
        it('Teste Menu - Associado Consultar Associado - Limpar', () => {
            cy.acaoConsultarAssociadoLimpar()
        })
    })

    context('Menu Acoes', () => {
        it('Associado Consultar - consultrar', () => {
            cy.acaoConsultarAssociadoContato()
        })

        it('Associado Consultar - editar', () => {
            cy.acaoConsultarAssociadoEditar()
        })

        it('Associado Consultar - Adicionar Veiculo', () => {
            cy.acaoConsultarAssociadoAdicionarVeiculo()
        })

        it('Associado Consultar - Consultar Veiuclo Associado', () => {
            cy.acaoConsultarAssociadoConsultar()
        })

        it('Associado Consultar - Incluir SPC/Serasa', () => {
            cy.acaoConsultarAssociadoIncluirSpsSerasa()
        })

        it('Associado Consultar - Comunicação e-mail', () => {
            cy.acaoConsultarAssociadoComunicacaoEmail()
        })

        it('Associado Consultar - Enviar SMS', () => {
            cy.acaoConsultarAssociadoEnviarSms()
        })

        it('Associado Consultar - Enviar Notificação', () => {
            cy.acaoConsultarAssociadoEnviarNotificacao()
        })
    })
})