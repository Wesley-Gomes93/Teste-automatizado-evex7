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
        cy.wait(200)
        cy.get('.menu-button').should('be.visible').click()
    })
    it(' Supervisão Leads', () => {
        cy.wait(450)
        cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('li [id="menuform:btnMenuAssociado"]').click()
        cy.wait(450)
        cy.get('li [id="menuform:btnMenuSupervisaoLeads"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('li [id="menuform:btnMenuSupervisaoLeads"]').click()
        cy.wait(450)
        cy.get('a[href="#tabs:j_idt384"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('a[href="#tabs:j_idt384"]').click()
        cy.wait(450)
        cy.get('a[href="#tabs:j_idt413"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('a[href="#tabs:j_idt413"]').click()
        cy.wait(450)
        cy.get('a[href="#tabs:j_idt440"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('a[href="#tabs:j_idt440"]').click()
        // cy.wait(450)
        // cy.get('a[href="#tabs:relatorioDashboardLeads"]').should('be.visible').then(() => { cy.wait(450) });
        // cy.get('a[href="#tabs:relatorioDashboardLeads"]').click()
        cy.wait(450)
        cy.get('a[href="#tabs:distPerdidos"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('a[href="#tabs:distPerdidos"]').click()
        cy.wait(450)
        cy.get('a[href="#tabs:origemLead"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('a[href="#tabs:origemLead"]').click()
        cy.wait(450)
        cy.get('a[href="#tabs:relatorioLead"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('a[href="#tabs:relatorioLead"]').click()
        cy.wait(450)
        cy.get('a[href="#tabs:relatorioLead"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('a[href="#tabs:relatorioLead"]').click()
    })
})
