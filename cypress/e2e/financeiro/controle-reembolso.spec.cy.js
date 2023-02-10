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

    it('Controle de Reembolso ', () => {
        cy.wait(500)
        cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
        cy.wait(450)
        cy.get("#menuform\\:controleDocs").scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get("#menuform\\:controleDocs").click()
        cy.wait(500)
        cy.wait(450)
        cy.get('label[id="empresa_label"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="empresa_label"]').click()
        cy.wait(500)
        cy.wait(450)
        cy.get('li[data-label="Universo AGV"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[data-label="Universo AGV"]').click()
        cy.wait(450)
        cy.get('button[id="pesquisar"]').click()
        cy.wait(500)

    })
})