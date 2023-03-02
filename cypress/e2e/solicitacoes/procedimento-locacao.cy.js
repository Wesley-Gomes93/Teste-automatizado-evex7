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
        it(`Menu Solicitações - Consultoria Jurídica`, () => {
            cy.wait(500)
            cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
            cy.wait(450)
            cy.get("#menuform\\:btnMenuProcedimentoLocacao > a > span").should('be.visible').then(() => { cy.wait(500) });
            cy.get("#menuform\\:btnMenuProcedimentoLocacao > a > span").click()
            cy.wait(500)
    })
})




  // cy.wait(700)
    // cy.get('label[id="motivoSinistro_label"]').click().trigger('mouseover')
    // cy.get('label[id="motivoSinistro_label"]').click().invoke('show').click({ force: true })
    // cy.wait(700)
    // cy.get('label[id="motivoSinistro_label"]').trigger('mouseup').click()
    // cy.get('li[idata-label="Colisão"]')