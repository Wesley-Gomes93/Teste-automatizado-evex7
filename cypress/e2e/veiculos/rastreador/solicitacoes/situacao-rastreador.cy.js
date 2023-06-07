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

    context('Tela Situação rastreador', () => {
        it('Situação rastreador - Novo', () => {
            cy.acaoSituacaoRatreador()
            cy.get('button[id="btnNovo"]').click()
            cy.get('input[id="dcSituacao"]').type('teste')
            cy.get('button[id="btnSalvar"]').click()
        })
        
        it('Situação rastreador - Editar', () => {
            cy.acaoSituacaoRatreador()
            cy.get('button[id="dataTableSituacao:0:j_idt401"]').click()
        })
    })
})