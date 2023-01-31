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

    context('Cadastrar ', () => {
        // const spc = require('../../fixtures/spc.json')
        // spc.forEach(spc => {
        //     it(`Teste Menu Associado - SPC ${spc.associado}`, () => {
        //         cy.wait(500)
        //         cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('li [id="menuform:btnMenuAssociado"]').click()
        //         cy.wait(500)
        //         cy.get('li [id="menuform:btnMenuSpcSerasa"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('li [id="menuform:btnMenuSpcSerasa"]').click()
        //         cy.wait(500)
        //         cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('button[id="pesquisarBotao"]').click()
        //         cy.wait(500)
        //         cy.get('button[id="j_idt373"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('button[id="j_idt373"]').click()
        //         cy.wait(500)
        //         cy.get('input[name="associado_input"]').type(spc.associado)
        //         cy.get('span[id="dataProtocolo"]').type(spc.dataProtocolo)
        //         cy.get('input[id="protocolo"]').type(spc.protocolo)
        //         cy.get('textarea[id="observacao"]').type(spc.novaObservacao)
        //         cy.wait(500)
        //         cy.get('button[id="salvar"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('button[id="salvar"]').click()
        //         cy.wait(500)
        //         cy.get('button[id="j_idt380"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('button[id="j_idt380"]').click()
        //     })
        // })
    })

    context('Ações Basicas', () => {
        it('Pesquisar Historico SPC/Serasa', () => {
            cy.acaoPesquisarHistoricoSpcSerasa()
        })
        it('Limpar Historico SPC/Serasa', () => {
            cy.acaoLimparHistoricoSpcSerasa()
        })
    })
})