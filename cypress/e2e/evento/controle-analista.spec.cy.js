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

    it('Menu Evento - Controle de Analista', () => {       
        cy.wait(500)
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuControleAnalistasEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuControleAnalistasEventos"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisar"]').click()
        cy.wait(750)
    })

    it('Menu Evento - Controle de Analista - Novo', () => {
        cy.wait(500)
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuControleAnalistasEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuControleAnalistasEventos"]').click()
        cy.wait(500)
        cy.get('button[id="incluirUsuarioEvento"]').click()
        cy.wait(750)
        cy.get('label[id="usuario_label"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="usuario_label"]').click()
        cy.get('li[data-label="ANA CAROLINA DA SILVA GUILHERME (ativo)"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[data-label="ANA CAROLINA DA SILVA GUILHERME (ativo)"]').click()
        cy.get("#ativo").click()
        cy.get("#processos > div.ui-selectlistbox-listcontainer > ul > li:nth-child(1)").click()
        cy.get('a[id="j_idt422"]').click()
        cy.get('a[id="j_idt429"]').click()
        cy.get('button[id="btSalvar"]').click()
    })
})