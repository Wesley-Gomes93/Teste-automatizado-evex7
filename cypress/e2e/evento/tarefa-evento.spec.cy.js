
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

        describe('Incluir noa tarefa', () => {
             it.skip('Analisar Evento - Incluir ', () => {
            cy.acaoCadastrarNovaTarefaEvento()
        })

        })
   
       
        it.skip('Analisar Evento ', () => {
            cy.wait(500)
            cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li [id="menuform:btnMenuEventos"]').click()
            cy.wait(450)
            cy.get('li[id="menuform:btnMenuTarefaEvento"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuTarefaEvento"]').click()
            cy.wait(500)
            cy.get('button[id="pesquisar"]').click()
            cy.wait(450)
            cy.get('input[id="tabelaResultadoPesquisa:j_idt363:filter"]').type('CYPRESS TEST')
            cy.get('button[id="pesquisar"]').click()
            cy.wait(500)
            cy.wait(2450)
            cy.get('button[id="tabelaResultadoPesquisa:0:j_idt372"]').click()
            cy.wait(450)
            cy.get('input[id="descricaoTipotarefa"]').clear().type('CYPRESS TEST LTDA')
            cy.get('button[id="btnSalvar"]').click()

        })
    })
