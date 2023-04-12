///<reference types="cypress"/>
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
        cy.wait(200)
        cy.get('.menu-button').should('be.visible').click()
    })
    
    context('Tela Avisar evento APP', () => {
        const currentDate = moment().format("DD/MM/YYYY");

        it('Acoes basicas na tela Avisar evento APP - Pesquisar', () => {
            cy.acaoAvisarEventoApp()
            cy.get('button[id="pesquisarBotao"]').click()
        })
        it('Acoes basicas na tela Avisar evento APP - Limpar', () => {
            cy.acaoAvisarEventoApp()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.get('button[id="limparBotao"]').click()
        })

        it.only('Acoes basicas na tela Avisar evento APP - Editar', () => {
            cy.acaoAvisarEventoApp()
            cy.get('button[id="pesquisarBotao"]').click()
            cy.get('button[id="tabelaObjetos:0:j_idt394"]').click()
            cy.get('input[id="dataTratamento_input"]').type(currentDate)
            cy.get('.ui-datepicker-today').click()
            cy.get('textarea[id="observacaoTratamento"]').type('deu certo')
        })
    })
    
})