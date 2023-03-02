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

    it('Menu Evento - Dashboard Salvados', () => {
        cy.wait(500)
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuSalvados"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuSalvados"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnDashboardSalvados"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnDashboardSalvados"]').click()
        cy.wait(500)
        cy.get('button[id="j_idt374"]').click()
        cy.wait(750)
    })

    it('Menu Evento - Dashboard Salvados - Limpar', () => {
        cy.wait(500)
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuSalvados"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuSalvados"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnDashboardSalvados"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnDashboardSalvados"]').click()
        cy.wait(500)
        cy.get('button[id="j_idt374"]').click()
        cy.wait(750)
        cy.get('button[id="j_idt375"]').click()
        cy.wait(750)
    })
})