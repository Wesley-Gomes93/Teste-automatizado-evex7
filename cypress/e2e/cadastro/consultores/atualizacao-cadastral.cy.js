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
        cy.wait(500)
        cy.get('.menu-button > .pi').click()
        cy.wait(500)
    })


    context('Ações basicas', () => {
        it('Atualizacao Cadastral - Pesquisar', () => {
            cy.acaoPesquisarAtualizacaoCadastral()
        })

        it('Atualizacao Cadastral - Limpar', () => {
            cy.acaoLimparAtualizacaoCadastral()
        })     
    })

    context('Menu Ações', () => {
        it('Atualizacao Cadastral - Atualizar', () => {
            cy.acaoAtualizarAtualizacaoCadastral()
        })  

        it('Atualizacao Cadastral - Atualizar - Editar/Aprovar', () => {
            cy.acaoAtualizarAtualizacaoCadastral()
            cy.wait(500)
            cy.get('button[id="j_idt391"]').click()
            cy.wait(500)
            cy.get('input[id="fone1Edicao"]').type('31999885547').click()
            cy.wait(500)
            cy.get('button[id="acoes_button"]').click()
            cy.wait(500)
            // cy.get('a[id="btnAprovar"]').click()
        })    

        it('Atualizacao Cadastral - Atualizar - Editar/Negar', () => {
            cy.acaoAtualizarAtualizacaoCadastral()
            cy.wait(500)
            cy.get('button[id="j_idt391"]').click()
            cy.wait(500)
            cy.get('input[id="fone1Edicao"]').type('31999885547').click()
            cy.wait(500)
            cy.get('button[id="acoes_button"]').click()
            cy.wait(500)
            // cy.get('a[id="btnReprovar"]').click()
        })    
    })
})