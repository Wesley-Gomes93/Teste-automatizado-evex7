///<reference types="cypress"/>
import 'cypress-file-upload';

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

    context('Tela Simulacao Web', () => {
        it('Nova Simulacao - Pesquisar ', () => {
            cy.acaoSimulacaoWeb()
            cy.get('input[id="nomeCliente2"]').type('ENO2G60')
            cy.get('button[id="j_idt391"]').click()
        })

        it('Nova Simulacao - Limpar ', () => {
            cy.acaoSimulacaoWeb()
            cy.get('input[id="nomeCliente2"]').type('ENO2G60')
            cy.get('button[id="j_idt391"]').click()
            cy.get('button[id="j_idt393"]').should('be.visible').contains("Limpar").click()
        })
    })

    context('Tela Simulacao Web', () => {
        var cotacaoWeb = require('../../fixtures/cotacaoWeb.json')
        cotacaoWeb.forEach(cotacaoWeb => {
            it.only('Nova Simulacao - Pesquisar ', () => {
                cy.acaoSimulacaoWeb()
                cy.get('button[id="j_idt392"]').click()

                cy.get('label[id="regional_label"]').click()
                cy.get('li[data-label="MG.70"]').click()

                cy.get('label[id="consultor_label"]').click()
                cy.get('li[id="consultor_19"]').click()

                cy.get('label[id="estadoCirculacao_label"]').click()
                cy.get('li[data-label="Minas Gerais"]').click()

                cy.get('label[id="municipioCirculacao_label"]').click()
                cy.get('li[data-label="Belo Horizonte"]').click()

                cy.get('input[id="placa"]').type(cotacaoWeb.placa)

                cy.get('input[id="nomeCliente"]').type(cotacaoWeb.nomeProponente)

                cy.get('input[id="email_input"]').type(cotacaoWeb.email)

                cy.get('input[id="telefone"]').type(cotacaoWeb.celular)

                cy.get('label[id="anoM_label"]').click()
                cy.get('li[data-label="2019"]').click()
                cy.get('input[id="fipeModelos_input"]').type('gol')
                cy.get('li[data-item-label="Gol 1.6 MSI Flex 16V 5p Aut. 005502-6 Gasolina - 005502-6"]').should('be.visible').click()
            })
        })
    })
})