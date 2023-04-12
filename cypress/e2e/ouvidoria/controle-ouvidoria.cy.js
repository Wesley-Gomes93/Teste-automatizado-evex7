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

    context('Tela controle ovuidoria', () => {
        it('Pesquisar', () => {
            cy.acaoControleOuvidoria()
            cy.get('button[id="pesquisarBotao"]').click()
        })
        it('Limpar', () => {
            cy.acaoControleOuvidoria()
            cy.get('button[id="limparBotao"]').click()
        })
        it.skip('Exportar', () => {
            cy.acaoControleOuvidoria()
            cy.get('button[id="exportarOuvidoria"]').click()
        })
    })

    context('Tela controle ovuidoria', () => {
        var controleOuvidoria = require('../../fixtures/controleOuvidoria.json')
        controleOuvidoria.forEach(controleOuvidoria => {
            it.only('Cadastrar', () => {
                cy.acaoControleOuvidoria()
                cy.get('button[id="pesquisarBotao"]').click()
                cy.get('button[id="j_idt414"]').click()
                cy.get('label[id="formModalOuvidoria:tabViewOuvidoria:setorSelecionado_label"]').click()
                cy.get('li[data-label="SISTEMAS"]').click()
                cy.get('input[id="formModalOuvidoria:tabViewOuvidoria:placaAssociadoSite"]').type(controleOuvidoria.placa)
                cy.get('input[id="formModalOuvidoria:tabViewOuvidoria:dataReclamacao_input"]').click()
                cy.get("#formModalOuvidoria\\:tabViewOuvidoria\\:dataReclamacao_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(3) > td.ui-datepicker-today > a").click()
                cy.get('input[id="formModalOuvidoria:tabViewOuvidoria:telefoneReclamante"]').type(controleOuvidoria.telefone)
                cy.get('input[id="formModalOuvidoria:tabViewOuvidoria:valorSolicitado_input"]').type(controleOuvidoria.valor)
                cy.get('input[id="formModalOuvidoria:tabViewOuvidoria:motivoReclamacao"]').type(controleOuvidoria.motivo)
                cy.get('textarea[id="formModalOuvidoria:tabViewOuvidoria:textoReclamacao"]').type(controleOuvidoria.textoReclamante)
                // cy.get('button[id="formModalOuvidoria:tabViewOuvidoria:salvarReclame"]').click()
            })
        })
    })
})

