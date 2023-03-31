///<reference types="cypress"/>

const moment = require("moment/moment");

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

    context('teste', () => {
  

        it('Ações Basicas', () => {
            cy.acaoPesquisarCupom()
           
        })

        it('Limpar Cupom', () => {
            cy.acaoLimparCupom()
        })
    })


    context('Cadastrar Cupom', () => {
        const cupomDesconto = require('../../fixtures/cupomDesconto.json')
        cupomDesconto.forEach(cupomDesconto => {

            const currentDate = moment().format("DD/MM/YYYY");
            const currentSubtractDate = moment().subtract(50, 'days').format("DD/MM/YYYY");

            it('Cadastrar Cupom', () => {
                cy.acaoCadastrarCupom()
                cy.get('input[id="j_idt425_input"]').type(currentDate)
                cy.get('input[id="j_idt410"]').type(cupomDesconto.nome)
                cy.get('input[id="j_idt429_input"]').type(currentSubtractDate)                
                cy.get('input[id="valor"]').type(cupomDesconto.valor)
                cy.get('input[id="quantidade"]').type(cupomDesconto.quantidade)
                cy.get('#j_idt433').click()
                // cy.get('button[id="j_idt428"]')
            })
        })
    })

    context('Ação Editar Cupom', () => {
        it.only('Limpar Cupom', () => {
            cy.acaoEditarCupom()
            cy.wait(500)
            cy.get('input[id="j_idt403"]').clear().type('Cypress Teste')
            cy.get('input[id="quantidade"]').clear().type('5')
        })
    })
})