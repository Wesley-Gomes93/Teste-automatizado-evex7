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
    
    context('Acoes basicas na tela Motivo Assistencia', () => {
        it('Pesquisar -', () => {
            cy.acaoMotivoAssistencia()
            cy.get('button[id="pesquisar"]').click() 
        })
    })
    
    context('Acoes basicas na tela Motivo Assistencia', () => {
        const currentDate = moment().format("DD/MM");
        it.only('Editar -', () => {
            cy.acaoMotivoAssistencia()
            cy.get('input[id="tabelaResultadoPesquisa:j_idt363:filter"]').type('cypress')
            cy.wait(350)
            cy.get('button[id="tabelaResultadoPesquisa:0:j_idt369"]').click() 
            // cy.get('.ui-chkbox-label').click() 
            cy.get('input[id="titulo"]').clear().type('Cypress '+currentDate)
        })
    })

    context('Cadastrar Motivo Assistencia', () => {
        it('Cadastrar', () => {
            cy.acaoMotivoAssistencia()
            cy.get('button[id="incluir"]').click()
            cy.get('label[id="modeloQuestionario_label"]').should('be.visible').click()
            cy.get('li[data-label="FR RECUPERADO COM REMOÇÃO - Novo Questionário "]').click()
            cy.get('button[id="btnSalvar"]').click()
        })
    })
})