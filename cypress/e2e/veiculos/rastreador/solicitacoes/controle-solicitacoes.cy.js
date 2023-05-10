///<reference types="cypress"/>
import 'cypress-file-upload';
const moment = require("moment/moment");

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

    context('Tela Controle de solicitações', () => {
        it('Controle de solicitações - Pesquisar', () => {
            cy.acaoControleSolicitacoes()
            cy.get('label[id="comboEmpresaFiltro_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="pesquisarBotao"]').click()
        })

        it.only('Controle de solicitações - Ações - Editar', () => {
            cy.acaoControleSolicitacoes()
            cy.get('label[id="comboEmpresaFiltro_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(9990)
            cy.wait(2250)
            cy.get('button[id="tableSolicitacoes:0:historico_button"]').click()
            cy.get('a[id="tableSolicitacoes:0:btnEditar"]').click()
            cy.wait(2250)

        })

        it.only('Controle de solicitações - Ações - Consultar', () => {
            cy.acaoControleSolicitacoes()
            cy.get('label[id="comboEmpresaFiltro_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(9990)
            cy.wait(2250)
            cy.get('button[id="tableSolicitacoes:0:historico_button"]').click()
            cy.get('a[id="tableSolicitacoes:0:btnConsultar"]').click()
            cy.wait(2250)

        })

        it.only('Controle de solicitações - Ações - Agendamento', () => {
            cy.acaoControleSolicitacoes()
            cy.get('label[id="comboEmpresaFiltro_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(9990)
            cy.wait(2250)
            cy.get('button[id="tableSolicitacoes:0:historico_button"]').click()
            cy.get('a[id="tableSolicitacoes:0:btnAgendamento"]').click()
            cy.wait(2250)

        })

        it.only('Controle de solicitações - Ações - Definir operador', () => {
            cy.acaoControleSolicitacoes()
            cy.get('label[id="comboEmpresaFiltro_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(9990)
            cy.wait(2250)
            cy.get('button[id="tableSolicitacoes:0:historico_button"]').click()
            cy.get('a[id="tableSolicitacoes:0:btnDefinirOperador"]').click()
            cy.wait(2250)

        })

        it.only('Controle de solicitações - Ações - Enviar comunicado', () => {
            cy.acaoControleSolicitacoes()
            cy.get('label[id="comboEmpresaFiltro_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(9990)
            cy.wait(2250)
            cy.get('button[id="tableSolicitacoes:0:historico_button"]').click()
            cy.get('a[id="tableSolicitacoes:0:enviarComunicado"]').click()
            cy.wait(2250)

        })

        it.only('Controle de solicitações - Ações - Vistoria e docs', () => {
            cy.acaoControleSolicitacoes()
            cy.get('label[id="comboEmpresaFiltro_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(9990)
            cy.wait(2250)
            cy.get('button[id="tableSolicitacoes:0:historico_button"]').click()
            cy.get('a[id="tableSolicitacoes:0:btnVistoriaDocs"]').click()            
            cy.wait(2250)

        })

        it.only('Controle de solicitações - Ações - Acompanhamento', () => {
            cy.acaoControleSolicitacoes()
            cy.get('label[id="comboEmpresaFiltro_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(9990)
            cy.wait(2250)
            cy.get('button[id="tableSolicitacoes:0:historico_button"]').click()
            cy.get('a[id="tableSolicitacoes:0:btnAbrirAcompanharAndamento"]').click()
            cy.wait(2250)

        })

        it.only('Controle de solicitações - Ações - Registrar contato', () => {
            cy.acaoControleSolicitacoes()
            cy.get('label[id="comboEmpresaFiltro_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(9990)
            cy.wait(2250)
            cy.get('button[id="tableSolicitacoes:0:historico_button"]').click()
            cy.get('a[id="tableSolicitacoes:0:btnRegistrarContato"]').click()
            cy.wait(2250)

        })
    })

})