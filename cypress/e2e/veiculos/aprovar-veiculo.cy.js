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

    context('Tela Aprovar Veiculo', () => {
        it('Nova Simulacao - Pesquisar ', () => {
            cy.acaoAprovarVeiculo()
            cy.get('input[id="placa"]').type('JJJ9090')
            cy.get('label[id="stBusca_label"]').click()
            cy.get('li[id="stBusca_5"]').click()
            cy.get('button[id="pesquisarVeiculo"]').click()
            cy.get('button[id="tabelaVeiculo:0:j_idt492"]').click()
            cy.wait(500)
            cy.get('a[id="tabView:dataTableChecklistAssociado:0:j_idt1139"]').click()
        })
    })
})