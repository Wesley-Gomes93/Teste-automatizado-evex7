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

    context('', () => {
        it('colocando imgaem', () => {
            cy.get('li[id="menuform:btnMenuVeiculo"]').click()
            cy.get('li[id="menuform:btnMenuConsultarVeiculo"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:j_idt437"]').click()
            cy.get('button[id="incluirVistoria"]').click()
            cy.get('#videoAndFileUpload_label').click().click()
        })
    })
})