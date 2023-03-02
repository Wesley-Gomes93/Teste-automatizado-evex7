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

    it.only('Menu Evento - Controle de Analista', () => {
        cy.wait(950)
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(950)
        cy.get('li[id="menuform:btnMenuSalvados"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuSalvados"]').click()
        cy.get('li[id="menuform:btnMenuControleSalvados"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuControleSalvados"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarSalvado"]').click()
    })

    it('Menu Evento - Controle de Analista', () => {
        cy.wait(950)
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(950)
        cy.get('li[id="menuform:btnMenuSalvados"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuSalvados"]').click()
        cy.wait(950)
        cy.get('li[id="menuform:btnMenuControleSalvados"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuControleSalvados"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarSalvado"]').click()
        cy.wait(750)
        cy.get("#tabelaSalvado\\:0\\:outrasAcoes").click()
        cy.wait(750)
        cy.get("#tabelaSalvado\\:0\\:outrasAcoes_menu > ul > li:nth-child(1) > a").click()
        cy.get("#tabs > ul > li:nth-child(2)").click()
        cy.wait(450)
        cy.get('a[href="#tabs:j_idt688"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt688"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt812"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt1134"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt1162"]').click()
        cy.wait(500)
    })
})