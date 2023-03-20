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

    context('Acao Cadastrar Novo Aniversario', () => {
        it('Novo', () => {
            cy.acaoAniversario()
            cy.get('button[id="novoBotao"]').click()
            cy.get('input[id="j_idt381_input"]').type('3')
            cy.get('input[id="assunto"]').type('Email evniado via cypress')
            cy.get('.ui-toggleswitch-slider').click()
            cy.get('.ql-editor').type('Teste teste teste')
            cy.get('button[id="j_idt395"]').click()
        })
    })

    context('Edicao de dados', () => {
        it('Editar', () => {
            cy.acaoAniversario()
            cy.get('button[id="associadoEmailAniversario:0:j_idt372"]').click()
            cy.get('input[id="j_idt381_input"]').clear().type('3')
            cy.get('button[id="j_idt395"]').click()

        })
    })
})