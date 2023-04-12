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

    context('Tela depreciacao salvados', () => {
        it('Ações basica depreciacao - Pesquisar', () => {
            cy.acaoControleSalvadosDepreciacao()
            cy.get('button[id="j_idt376"]').click()
        })
    })
    context('Cadastrar depreciacao salvados', () => {
        it('Ações basica depreciacao - Novo', () => {
            cy.acaoControleSalvadosDepreciacao()
            cy.get('button[id="j_idt377"]').click()
            cy.get('input[id="formEditarDepreciacao:descricao"]').type('cypress.io')
            cy.get('input[id="formEditarDepreciacao:porcentagemMinima"]').type('50')
            cy.get('input[id="formEditarDepreciacao:porcentagemMaxima"]').type('50')
        })
    })

})