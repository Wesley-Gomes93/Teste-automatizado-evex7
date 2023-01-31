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
        cy.get('.menu-button > .pi').should('be.visible').then(() => { cy.wait(500) });
        cy.get('.menu-button > .pi').click()
        cy.wait(500)

    })
    const consultoriaJuridica = require('../../../fixtures/consultoriaJuridica.json')
    consultoriaJuridica.forEach(consultoriaJuridica => {

        it(`Menu Solicitações - Consultoria Jurídica ${consultoriaJuridica.detalheChamado}`, () => {
            cy.wait(500)
            cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
            cy.wait(450)
            cy.get('li[id="menuform:btnMenuConsultoriaJuridica"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuConsultoriaJuridica"]').click()
            cy.wait(450)
            cy.get('button[id="btnAbrirNovaSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="btnAbrirNovaSolicitacao"]').click()
            cy.wait(500)
            cy.get('label[id="motivoConsultoria_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="motivoConsultoria_label"]').click()
            cy.wait(500)
            cy.get('li[data-label="Análise de Caso"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-label="Análise de Caso"]').click()
            cy.wait(500)
            cy.get('textarea[id="conteudo"]').type(consultoriaJuridica.detalheChamado)
            cy.wait(500)
            cy.get('button[id="btnSalvarConsultoria"]').click()
            cy.wait(1500)
        })
    })
})