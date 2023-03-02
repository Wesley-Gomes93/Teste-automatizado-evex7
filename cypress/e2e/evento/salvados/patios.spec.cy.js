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

    it('Salvados - Patios', () => {
       
        cy.wait(500)
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuSalvados"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuSalvados"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuPatios"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuPatios"]').click()
        cy.wait(500)
        cy.get('button[id="incluir"]').click()
        cy.wait(750)
        cy.get('input[id="titulo"]').type('TESTE CYPRESS.IO LTDA')
        cy.wait(500)
        cy.get('label[id="estado_label"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="estado_label"]').click()
        cy.get('li[data-label="Minas Gerais"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[data-label="Minas Gerais"]').click()
        cy.wait(500)
        cy.get('label[id="municipio_label"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="municipio_label"]').click()
        cy.get('li[data-label="Belo Horizonte"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[data-label="Belo Horizonte"]').click()
        cy.wait(500)
        cy.get('button[id="btnSalvar"]').click()
        cy.wait(500)
    })
})