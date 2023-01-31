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

    context('Cadastrar nova Entrega Coleta', () => {
        // const entregaColeta = require('../../../fixtures/entregaColeta.json')
        // entregaColeta.forEach(entregaColeta => {
        //     it(`Entrega Coleta - ${entregaColeta.responsavelReceberEntrega}`, () => {
        //         cy.wait(500)
        //         cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
        //         cy.wait(450)
        //         cy.get('li[id="menuform:btnMenuEntregaColeta"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('li[id="menuform:btnMenuEntregaColeta"]').click()
        //         cy.wait(500)
        //         cy.get('button[id="j_idt388"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('button[id="j_idt388"]').click()
        //         cy.wait(500)
        //         cy.get('label[id="tabSolicitacao:setorEditar_label"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('label[id="tabSolicitacao:setorEditar_label"]').click()
        //         cy.wait(500)
        //         cy.get('li[data-label="SISTEMAS"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('li[data-label="SISTEMAS"]').click()
        //         cy.wait(500)
        //         cy.get('label[id="tabSolicitacao:tipoEditar_label"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('label[id="tabSolicitacao:tipoEditar_label"]').click()
        //         cy.wait(500)
        //         cy.get('li[id="tabSolicitacao:tipoEditar_3"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('li[id="tabSolicitacao:tipoEditar_3"]').click()
        //         cy.wait(500)
        //         cy.get('label[id="tabSolicitacao:empresaLista_label"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('label[id="tabSolicitacao:empresaLista_label"]').click()
        //         cy.wait(500)
        //         cy.get('li[data-label="Instituto 7X +"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('li[data-label="Instituto 7X +"]').click()
        //         cy.wait(500)
        //         cy.get('input[id="tabSolicitacao:inputResponsavelEditar"]').type(entregaColeta.responsavelReceberEntrega)
        //         cy.get('input[id="tabSolicitacao:dataEntregaColeta_input"]').type(entregaColeta.dataColetaEnrega)
        //         cy.get('input[id="tabSolicitacao:cep"]').type(entregaColeta.cep)
        //         cy.get('input[id="tabSolicitacao:dcComplemento"]').type(entregaColeta.complementoEntrega)
        //         cy.get('input[id="tabSolicitacao:produto"]').type(entregaColeta.produto)
        //         cy.get('input[id="tabSolicitacao:numPedido"]').type(entregaColeta.numeroProduto)
        //         cy.get('input[id="tabSolicitacao:valorPedido"]').type(entregaColeta.valor)
        //         cy.get('input[id="tabSolicitacao:numEndereco"]').type(entregaColeta.numeroEntrega)
        //         cy.get('textarea[id="tabSolicitacao:detalhamentoEntregaColeta"]').type(entregaColeta.detalhamento)
        //         cy.wait(500)
        //         cy.get('label[id="tabSolicitacao:formaPagamento_label"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('label[id="tabSolicitacao:formaPagamento_label"]').click()
        //         cy.wait(500)
        //         cy.get('li[id="tabSolicitacao:formaPagamento_4"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('li[id="tabSolicitacao:formaPagamento_4"]').click()
        //         cy.wait(500)
        //         cy.get('label[id="tabSolicitacao:tpVeiculo_label"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('label[id="tabSolicitacao:tpVeiculo_label"]').click()
        //         cy.wait(500)
        //         cy.get('li[id="tabSolicitacao:tpVeiculo_4"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('li[id="tabSolicitacao:tpVeiculo_4"]').click()
        //         cy.wait(500)
        //         cy.get('input[name="tabSolicitacao:dataSaida_input"]').type(entregaColeta.dataSaida)
        //         cy.get('input[id="tabSolicitacao:kmSaida"]').type(entregaColeta.kmSaida)
        //         cy.get('input[id="tabSolicitacao:kmRetorno"]').type(entregaColeta.kmRetorno)
        //         cy.get('input[name="tabSolicitacao:dataRetorno_input"]').type(entregaColeta.dataRetorno)
        //         cy.wait(500)
        //         cy.get('button[id="btnSalvar"]').should('be.visible').then(() => { cy.wait(500) });
        //         cy.get('button[id="btnSalvar"]').click()
        //         cy.wait(500)
        //     })
        // })
    })

    context('Ações Basicas', () => {
        it('Pesquisar Entrega', () => {
            cy.acaoEntregaColetaPesquisarEntrega()
        })

        it('Pesquisar Coleta', () => {
            cy.acaoEntregaColetaPesquisarColeta()
        })

        it('Pesquisar Entrega/Coleta', () => {
            cy.acaoEntregaColetaPesquisarEntregaColeta()
        })
    })

    context('Menu Ações', () => {
        it.only('Menu Solicitações - Entrega Coleta - Ações - Alterar Situação', () => {
            cy.wait(500)
            cy.acaoEntregaColetaPesquisarEntrega()
            cy.wait(750)
            cy.get('button[id="tabelaSolicitacoes:4:j_idt417"]').click()
            cy.wait(500)
            cy.get('label[id="j_idt749:j_idt757:j_idt763_label"]').click()
            cy.get('li[data-label="Aprovado"]').click()
            cy.wait(500)
            cy.get('textarea[id="j_idt749:j_idt757:j_idt769"]').click()
            cy.get('textarea[id="j_idt749:j_idt757:j_idt769"]').type('Aprovado Teste')
            cy.wait(500)
            cy.get('button[id="j_idt749:btnsalvarTrocaSituacao"]').click()
        })

        it('Menu Solicitações - Entrega Coleta - Ações - Inciar', () => {
            cy.wait(500)
            cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
            cy.wait(450)
            cy.get('li[id="menuform:btnMenuEntregaColeta"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuEntregaColeta"]').click()
            cy.wait(500)
            cy.get('button[id="tabelaSolicitacoes:0:j_idt415"]').click()
        })
    })




})
