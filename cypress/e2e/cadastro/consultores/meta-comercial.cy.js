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
        it('Cadastro - Consultor - Meta Comercial - Pesquisar', () => {
            cy.acaoMetaComercialPesquisar()
        })

        it('Cdastro - Consultor - Meta Comercial - Limpar', () => {
            cy.acaoMetaComercialLimpar()
        })
    })

    context('Cadastrar nova Meta Comercial', () => {
        const metaComercial = require('../../../fixtures/metaComercial.json')
        metaComercial.forEach(metaComercial => {
            it(`Cadastro - Consultor - Meta Comercial - Ação Novo - ${metaComercial.nomeConsultor}`, () => {
                cy.acaoMetaComercialNovo()
                cy.get('input[id="metaComercialAlterarForm:consultor_input"]').click()
                cy.get('input[id="metaComercialAlterarForm:consultor_input"]').type(metaComercial.nomeConsultor)
                cy.get('li[role="option"]').click()
                cy.wait(500)
                cy.get('input[id="metaComercialAlterarForm:pontuacaoMetaComercial_input"]').click()
                cy.get('input[id="metaComercialAlterarForm:pontuacaoMetaComercial_input"]').type(metaComercial.meta)
                cy.wait(500)
                cy.get('input[id="metaComercialAlterarForm:dataMetaComercial_input"]').click()
                cy.get("#metaComercialAlterarForm\\:dataMetaComercial_panel > div.ui-monthpicker > a:nth-child(1)").click()
                cy.wait(500)
                cy.get('button[id="metaComercialAlterarForm:btnSalvar"]').click()
                cy.wait(500)
            })
        })

    })

    context('Menu ações', () => {
        const metaComercial = require('../../../fixtures/metaComercial.json')
        metaComercial.forEach(metaComercial => {
            it(`Cadastro - Consultor - Meta Comercial - Ação Editar - ${metaComercial.nomeConsultor}`, () => {
                cy.acaoMetaComercialPesquisar()
                cy.get('button[id="tabelaMetaComercial:0:j_idt371"]').click()
                cy.wait(500)
                cy.get('input[id="metaComercialAlterarForm:pontuacaoMetaComercial_input"]').click()
                cy.get('input[id="metaComercialAlterarForm:pontuacaoMetaComercial_input"]').clear().type('9')
                cy.wait(500)
                cy.get('button[id="metaComercialAlterarForm:btnSalvar"]').click()
                cy.wait(500)
            })
        })
    })
})