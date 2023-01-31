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

    it('Juridico - Procedimento Locação', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuProcedLocacao"]').click()
        cy.wait(500)
    })

    it('Juridico - Procedimento Locação - Pesquisar', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuProcedLocacao"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
    })

    it('Juridico - Procedimento Locação - Limpar', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuProcedLocacao"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="limparPesquisa"]').click()

    })

    it('Juridico - Procedimento Locação - Acoes - Responder', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuProcedLocacao"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.get('button[id="tabelaSolicitacao:1:outrasAcoes_button"]').click()
        cy.get('a[id="tabelaSolicitacao:0:responder"]').click()
        cy.wait(500)
        cy.get('button[id="formProcedimentoLocacao:j_idt481"]').click()

    })

    it('Juridico - Procedimento Locação - Acoes - Responder', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuProcedLocacao"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:1:outrasAcoes_button"]').click()
        cy.get('a[id="tabelaSolicitacao:1:responder"]').click()
        cy.wait(500)
        cy.get('textarea[id="formProcedimentoLocacao:j_idt473"]').click()
        cy.get('textarea[id="formProcedimentoLocacao:j_idt473"]').type('Nidoking Nidoking Nidoking')
        // cy.get('button[id="formProcedimentoLocacao:responder"]').click()

    })

    it.only('Juridico - Procedimento Locação - Acoes - Negar', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuProcedLocacao"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:2:outrasAcoes_button"]').click()
        cy.get('a[id="tabelaSolicitacao:2:negarPedido"]').click()
        cy.wait(500)
        cy.get('textarea[id="formRecusaProcedimentoLocacao:motivoRecusa"]').click()
        cy.get('textarea[id="formRecusaProcedimentoLocacao:motivoRecusa"]').type('Nidoking Nidoking Nidoking Nidoking')
        // cy.get('button[id="formRecusaProcedimentoLocacao:recusar"]').click()
    })
    






})

