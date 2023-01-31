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

    it('RH - Controle Hora Extra', () => {
        cy.wait(500)
        cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuRh"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuRh"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuConsutaHoraExtra"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuConsutaHoraExtra"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="pesquisarBotao"]').click()
        cy.wait(500)
    })
    it('RH - Controle Hora Extra - Limpar', () => {
        cy.wait(500)
        cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuRh"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuRh"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuConsutaHoraExtra"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuConsutaHoraExtra"]').click()
        cy.wait(500)
        cy.get('input[id="filtroPesquisa"]').type('teste')
        cy.wait(500)
        cy.get('label[id="SetorFiltro_label"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="SetorFiltro_label"]').click()
        cy.wait(500)
        cy.get('li[data-label="ADMINISTRATIVO"]').click()
        cy.wait(500)
        cy.get('button[id="limparBotao"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="limparBotao"]').click()
        cy.wait(500)
    })
})
