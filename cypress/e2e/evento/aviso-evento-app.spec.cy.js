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

    it.skip('Menu Evento - Aviso Evento App ', () => {       
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(500)
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuAvisoEventoApp"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuAvisoEventoApp"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarBotao"]').click()
    })

    it('Menu Evento - Aviso Evento App - Editar', () => {       
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(500)
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuAvisoEventoApp"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuAvisoEventoApp"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarBotao"]').click()
        cy.wait(750)
        cy.get('button[id="tabelaObjetos:0:j_idt387"]').click()
        cy.wait(750)        
        cy.get('input[id="dataTratamento_input"]').clear().type('22122022')
        cy.get("#dataTratamento_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(4) > td:nth-child(4) > a").click() 
        cy.get('textarea[id="observacaoTratamento"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('textarea[id="observacaoTratamento"]').click()
        cy.get('textarea[id="observacaoTratamento"]').clear().type('@#$%$¨$¨&¨%&*&*¨%(*%¨&(¨&)*%#$$#%@#!#$!$')
        cy.get('button[id="j_idt400"]').click()
    })
})