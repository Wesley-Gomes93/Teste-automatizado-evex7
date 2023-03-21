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
    it('Menu Assistência - Condição Assistência', () => {
        cy.wait(450)
        cy.get('li [id="menuform:btnMenuCat"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('li [id="menuform:btnMenuCat"]').click()
        cy.wait(450)
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuControleAnalistaCat"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('li[id="menuform:btnMenuControleAnalistaCat"]').click()
        cy.wait(450)

        cy.wait(450)
        cy.get('button[id="pesquisar"]').should('be.visible').then(() => { cy.wait(450) });
        cy.get('button[id="pesquisar"]').click()
        cy.wait(450)
    })
})