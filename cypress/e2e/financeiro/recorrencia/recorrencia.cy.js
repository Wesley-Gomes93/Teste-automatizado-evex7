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

    context('Tela recorrencia ', () => {
        it('Acoes basicas na tela recorrencia - Pesquisar', () => {
            cy.acaoRecorrencia()
            cy.get('button[id="j_idt376"]').click()
        })
        it('Acoes basicas na tela recorrencia - Limpar', () => {
            cy.acaoRecorrencia()
            cy.get('button[id="j_idt376"]').click()
            cy.get('button[id="j_idt379"]').click()
        })
    })
    context('Tela recorrencia ', () => {
        var randomNumber = Math.floor(Math.random() * 50) + 1;
        var options = ['MG.70', 'MG.80', 'SP.01', 'AC.01', 'AL.01', 'BA.19', 'CE.01']

        it.only('Cadastrar na tela recorrencia - Novo', () => {
            cy.acaoRecorrencia()
            cy.get('button[id="j_idt377"]').click()
            cy.get('input[id="gestor_input"]').type('daniel')
            cy.get('li[data-item-label="DANIEL DA SILVA KAMI MURA LUZ - 314.926.978-42"]').click()
            for (let i = 3; i < 7; i++) {
                cy.get('button[id="tabs:btnIncluir"]').click()
                cy.get('label[id="tabs:listaRegional_label"]').click()
                cy.get(`li[data-label="${options[i]}"]`).click();
                cy.get('input[id="tabs:j_idt493"]').type(randomNumber)
                cy.wait(500)
                cy.get('button[id="tabs:j_idt500"]').click()
            }
        })
    })
})
