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

    describe('Ações Basicas', () => {
        it('Juridico - Analise de Processos - Pesquisar', () => {
            cy.acaoPesquisarAnaliseProcesso()
        })

        it('Juridico - Analise de Processos - Limpar', () => {
            Cypress.Commands.add('acaoLimparAnaliseProcesso', () => {
                cy.acaoLimparAnaliseProcesso()
            })
        })
        describe('Menu Ações ', () => {
            const analiseProcesso = require('../../fixtures/analiseProcesso.json')
            analiseProcesso.forEach(analiseProcesso => {
                it('Juridico - Analise de Processos - Ações - Consultar', () => {
                    cy.acaoPesquisarAnaliseProcesso()
                    cy.wait(9750)
                    cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
                    cy.wait(500)
                    //pagina2
                    cy.get('a[href="#tabs:j_idt1323"]').click()
                    cy.wait(500)
                    cy.get('input[id="tabs:j_idt1330"]').click()
                    cy.get('input[id="tabs:j_idt1330"]').type(analiseProcesso.nomeAssociado)
                    cy.wait(500)
                    cy.get('input[id="tabs:j_idt1335"]').click().type(analiseProcesso.cpfAssociado)
                    cy.wait(500)
                    cy.get('label[for="tabs:j_idt1347:0"]').dblclick()
                    cy.wait(500)
                    cy.get('label[for="tabs:j_idt1340:0"]').dblclick()
                    cy.wait(500)
                    cy.get('input[id="tabs:nomeCondutor"]').click()
                    cy.get('input[id="tabs:nomeCondutor"]').type(analiseProcesso.nomeCondutor)
                    cy.wait(500)
                    cy.get('input[id="tabs:cpfCondutor"]').click().type(analiseProcesso.cpfCondutor)
                    cy.wait(500)
                    cy.get("#tabs\\:j_idt1364 > tbody > tr > td:nth-child(2) > div > div.ui-radiobutton-box.ui-widget.ui-corner-all.ui-state-default").click()
                    cy.get("#tabs\\:j_idt1371 > tbody > tr > td:nth-child(1) > div > div.ui-radiobutton-box.ui-widget.ui-corner-all.ui-state-default").click()
                    cy.get("#tabs\\:j_idt1378 > tbody > tr > td:nth-child(1) > div > div.ui-radiobutton-box.ui-widget.ui-corner-all.ui-state-default").click()
                    cy.wait(500)
                    cy.get('label[id="tabs:j_idt1391_label"]').click()
                    cy.get('li[data-label="Casado"]').click()
                    cy.wait(500)
                    cy.get('textarea[id="tabs:j_idt1397"]').click().type(analiseProcesso.dutCrlv)
                    //pagina3
                    cy.get('a[href="#tabs:j_idt1480"]').click()
                    cy.wait(500)
                    cy.get("#tabs\\:j_idt1487 > tbody > tr > td:nth-child(1) > div > div.ui-radiobutton-box.ui-widget.ui-corner-all.ui-state-default").click()
                    cy.get("#tabs\\:j_idt1494 > tbody > tr > td:nth-child(1) > div > div.ui-radiobutton-box.ui-widget.ui-corner-all.ui-state-default").click()
                    cy.get("#tabs\\:j_idt1501 > tbody > tr > td:nth-child(2) > div > div.ui-radiobutton-box.ui-widget.ui-corner-all.ui-state-default").click()
                    cy.get("#tabs\\:j_idt1508 > tbody > tr > td:nth-child(1) > div > div.ui-radiobutton-box.ui-widget.ui-corner-all.ui-state-default").click()
                    cy.wait(500)
                    cy.get('button[id="btnVoltar"]').click()
                })
            })

            it.only('Juridico - Analise de Processos - Ações - Consultar - Acompanhar Andamento', () => {
                cy.acaoPesquisarAnaliseProcesso()
                cy.wait(9750)
                cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
                cy.wait(500)
                cy.get('button[id="outrasAcoes_button"]').click()
                cy.wait(500)
                cy.get('a[id="btnAbrirSinistroAcompanhamentoContato"]').click()
            })

            it.only('Juridico - Analise de Processos - Ações - Consultar - Historico Veiculo', () => {
                cy.acaoPesquisarAnaliseProcesso()
                cy.wait(9750)
                cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
                cy.wait(500)
                cy.get('button[id="outrasAcoes_button"]').click()
                cy.wait(500)
                cy.get('a[id="btnHistorico"]').click()
            })

            it.only('Juridico - Analise de Processos - Ações - Consultar - Trocar Situação', () => {
                cy.acaoPesquisarAnaliseProcesso()
                cy.wait(9750)
                cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
                cy.wait(500)
                cy.get('button[id="outrasAcoes_button"]').click()
                cy.wait(500)
                cy.get('a[id="btnSituacao"]').click()
            })

            it.only('Juridico - Analise de Processos - Ações - Consultar - Contrato s/ Assinatura', () => {
                cy.acaoPesquisarAnaliseProcesso()
                cy.wait(9750)
                cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
                cy.wait(500)
                cy.get('button[id="outrasAcoes_button"]').click()
                cy.wait(500)
                cy.get('a[id="btImprimirContratoSemAssinatura"]').click()
            })

            it.only('Juridico - Analise de Processos - Ações - Consultar - Denuncia Contratual', () => {
                cy.acaoPesquisarAnaliseProcesso()
                cy.wait(9750)
                cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
                cy.wait(500)
                cy.get('button[id="outrasAcoes_button"]').click()
                cy.wait(500)
                cy.get('a[id="btnDenunciaContratual"]').click()
            })

            it.only('Juridico - Analise de Processos - Ações - Consultar - Veiculo Associado', () => {
                cy.acaoPesquisarAnaliseProcesso()
                cy.wait(9750)
                cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
                cy.wait(500)
                cy.get('button[id="outrasAcoes_button"]').click()
                cy.wait(500)
                cy.get('a[id="btnVeiculosAssociado"]').click()
            })

            it.only('Juridico - Analise de Processos - Ações - Consultar - Vistoria', () => {
                cy.acaoPesquisarAnaliseProcesso()
                cy.wait(9750)
                cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
                cy.wait(500)
                cy.get('button[id="outrasAcoes_button"]').click()
                cy.wait(500)
                cy.get('a[id="btnVistoria"]').click()
            })
        })
    })
})