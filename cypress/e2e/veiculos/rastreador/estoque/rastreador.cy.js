///<reference types="cypress"/>
import 'cypress-file-upload';
const moment = require("moment/moment");

describe('EVEX7 test', () => {
    beforeEach(() => {
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

    context('Tela Controle estoque - Aba estoque', () => {
        it('Controle estoque - Pesquisar', () => {
            cy.acaoRastreador()
            cy.get('button[id="pesquisar"]').click()
        })
        it('Controle estoque - Editar', () => {
            cy.acaoRastreador()
            cy.get('button[id="pesquisar"]').click()
            cy.get('button[id="tabelaGr:0:j_idt387"]').click()
        })
    })
})