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

    context('Ações Basicas na tela Controle C.A.T ', () => {
        it('Controle C.A.T - Tela', () => {
            cy.acaoControleCat()
        })

        it('Controle C.A.T - Pesquisar', () => {
            cy.acaoControleCat()
            cy.get('label[id="j_idt362"]').click()
            cy.get('li[data-label="Universo AGV"]').click()
            cy.get('label[id="tipoSindicancia_label"]').click()
            cy.get('li[data-label="Colisões"]').click()
            cy.get('button[id="pesquisar"]').click()
        })
        
        it('Controle C.A.T - Limpar', () => {
            cy.acaoControleCat() 
            cy.get('label[id="empresa_label"]').click()
            cy.get('li[data-label="Universo AGV"]').click()
            cy.get('label[id="tipoSindicancia_label"]').click()
            cy.get('li[data-label="Colisões"]').click()
            cy.get('button[id="pesquisar"]').click()
            cy.wait(7500)
            cy.get('button[id="limpar"]').click()

        })
    })

    context('Ações Controle C.A.T - ', () => {
        it('ontrole C.A.T - Analisar', () => {
            cy.acaoControleCat() 
            cy.get('label[id="empresa_label"]').click()
            cy.get('li[data-label="AGV Brasil"]').click()
            cy.get('label[id="tipoSindicancia_label"]').click()
            cy.get('li[data-label="Colisões"]').click()
            cy.get('button[id="pesquisar"]').click()
            cy.wait(8500)
            cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
            //pag 2
            cy.get('a[href="#tabs:j_idt1366"]').click()
            cy.get('textarea[id="tabs:j_idt1440"]').type('8743958723495209347952')
            //pag 3
            cy.get('a[href="#tabs:j_idt1523"]').click()
            cy.get('label[for="tabs:j_idt1530:0"]').click()
            cy.get('label[for="tabs:j_idt1537:0"]').click()
            cy.get('label[for="tabs:j_idt1544:1"]').click()
            cy.get('label[for="tabs:j_idt1551:0"]').click()
            //pag 4
            cy.get('a[href="#tabs:j_idt1643"]').click()
            //pag 5
            cy.get('a[href="#tabs:j_idt1933"]').click()
            cy.get('textarea[id="tabs:j_idt1937"]').type('çdlkjasçkldjaç ashdçasdhjkals 21738412 teste')     
        })

        it.only('ontrole C.A.T - Analisar - Acompanhar Andamento ', () => {
            cy.acaoControleCat() 
            cy.get('label[id="empresa_label"]').click()
            cy.get('li[data-label="AGV Brasil"]').click()
            cy.get('label[id="tipoSindicancia_label"]').click()
            cy.get('li[data-label="Colisões"]').click()
            cy.get('button[id="pesquisar"]').click()
            cy.wait(15000)
            cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
            cy.wait(500)
            cy.get('a[href="#tabs:j_idt1643"]').click()
            cy.get('button[id="outrasAcoes_button"]').click()
            cy.get('a[id="btnAbrirSinistroAcompanhamentoContato"]').click()
            cy.get('button[id="acompanhamentoContatoForm:acoes_button"]').click()
            cy.get('a[id="acompanhamentoContatoForm:incluirAcompanhamentoContato"]').click()
            cy.get('label[id="acompanhamentoContatoForm:situacaoAlteracaoContatoModal_label"]').click()
            cy.get('button[id="acompanhamentoContatoForm:voltaPesquisa"]').click()
        })
    })

   
})