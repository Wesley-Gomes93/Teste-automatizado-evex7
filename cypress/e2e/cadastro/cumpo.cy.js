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
    })

    context('Ações Basicas', () => {
        it('Pesquisar Cupom', () => {
            cy.acaoPesquisarCupom()
        })

        it('Limpar Cupom', () => {
            cy.acaoLimparCupom()
        })
    })

    context('Cadastrar Cupom', () => {
        const cupomDesconto = require('../../fixtures/cupomDesconto.json')
        cupomDesconto.forEach(cupomDesconto => {
            it('Cadastrar Cupom', () => {
                cy.acaoCadastrarCupom()
                cy.wait(800)
                cy.get('label[id="j_idt407_label"]').click()
                cy.get('li[data-label="Percentual de Desconto"]').click()
                cy.wait(500)
                cy.get('input[id="j_idt403"]').type(cupomDesconto.nome)
                cy.get('input[id="j_idt418_input"]').click()
                cy.get('input[id="j_idt418_input"]').type(cupomDesconto.dataLimite)
                cy.get('input[id="valor"]').type(cupomDesconto.valor)
                cy.get('input[id="j_idt422_input"]').click()
                cy.get('input[id="j_idt422_input"]').type(cupomDesconto.dataFinalizacao)
                cy.get('input[id="quantidade"]').type(cupomDesconto.quantidade)
                cy.get('button[id="j_idt428"]')
            })
        })
    })

    context('Ação Editar Cupom', () => {
        it('Limpar Cupom', () => {
            cy.acaoEditarCupom()
            cy.wait(500)
            cy.get('input[id="j_idt403"]').clear().type('Cypress Teste')
            cy.get('input[id="quantidade"]').clear().type('5')
        })
    })
})