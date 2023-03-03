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


    context('Ações basicas', () => {
        it('Regional - Pesquisar', () => {
            cy.acaoPesquisarRegional()
        })

        it('Regional - Limpar', () => {
            cy.acaoPesquisarRegional()
            cy.wait(500)
            cy.get('button[id="limparPesquisa"]').click()
        })

        // it('Regional - Exportar', () => {
        //     cy.wait(500)
        //     cy.get('.menu-button > .pi').click()
        //     cy.wait(500)
        //     cy.get('li[id="menuform:btnMenuCadastro"]').click()
        //     cy.wait(500)
        //     cy.get('li[id="menuform:btnMenuRegional"]').click()
        //     cy.wait(500)
        //     cy.get('button[id="exportarRegional"]').click()
        // })

    })

    context('cadastras uma regional', () => {
        const regional = require('../../fixtures/regional.json')
        regional.forEach(regional => {
            it.only('Regional - Novo', () => {
                cy.acaoPesquisarRegional()
                cy.wait(500)
                cy.get('button[id="incluirRegional"]').click()
                cy.wait(500)
                cy.get('input[id="cnpj"]').type(regional.cnpj)
                cy.get('input[id="razaoSocial"]').type(regional.razaoSocial)
                cy.wait(500)
                cy.get('input[id="dtInicio1_input"]').click()
                cy.get('input[id="dtInicio1_input"]').type('01112022')
                cy.get('#dtInicio1_panel > .ui-datepicker-group > .ui-datepicker-calendar-container > .ui-datepicker-calendar > tbody > :nth-child(1) > :nth-child(2)').click()
                cy.get('input[id="inscEstadual"]').type(regional.inscEstadual)
                cy.get('input[id="contato"]').type(regional.nomeGestor)
                cy.get('input[id="fone1"]').type(regional.telefone)
                cy.get('input[id="emailPJ"]').type(regional.email)
                cy.get('textarea[id="observacaoPJ"]').type(regional.observacao)
                cy.get('input[id="contatoCobranca"]').type(regional.nomeContato)
                cy.get('input[id="foneCelularPendencia"]').type(regional.celularContato)

                cy.get('a[id="j_idt800"]').click()

                cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').should('be.visible').then(() => { cy.wait(750) });
                cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').click()
                cy.get('li[data-label="Comercial"]').click()
                cy.get('input[id="enderecoForm:cep"]').type(regional.cep)
                cy.get('input[id="enderecoForm:numEndereco"]').type(regional.numero)
                cy.get('input[id="enderecoForm:dcComplemento"]').type(regional.complemento)
                cy.wait(300)
                cy.get('button[id="enderecoForm:btnOk"]').click()

                cy.get('a[id="j_idt822"]').click()

                cy.get('label[id="contaBancariaForm:tipoConta_label"]').should('be.visible').then(() => { cy.wait(250) });
                cy.get('label[id="contaBancariaForm:tipoConta_label"]').click()
                cy.get('li[data-label="Conta Corrente"]').click()

                cy.get('label[id="contaBancariaForm:banco_label"]').should('be.visible').then(() => { cy.wait(250) });
                cy.get('label[id="contaBancariaForm:banco_label"]').click()
                cy.get('li[data-label="N/A - FINAMAX S/A CRÉDITO, FINANCIAMENTO E INVESTIMENTO"]').click()

                cy.get('input[id="contaBancariaForm:titular"]').type(regional.titularBanco)
                cy.get('input[id="contaBancariaForm:cpf"]').type(regional.cpfCnpj)
                cy.get('input[id="contaBancariaForm:numeroConta"]').type(regional.numeroConta)
                cy.get('input[id="contaBancariaForm:digitoConta"]').type(regional.numeroDigitoConta)
                cy.get('input[id="contaBancariaForm:numeroAgencia"]').type(regional.numeroAgencia)
                cy.get('input[id="contaBancariaForm:digitoAgencia"]').type(regional.numeroDigitoAgencia)
                cy.get('input[id="contaBancariaForm:operacao"]').type(regional.operacao)
                cy.wait(300)
                cy.get('button[id="contaBancariaForm:btnOk"]').click()

                cy.wait(300)
                cy.get('button[id="btnSalvar"]').click()
            })
        })
    })

    context('Menu ação', () => {
        it.only('Regional - Menu Ações - Consultar', () => {
            cy.acaoPesquisarRegional()
            cy.wait(500)
            cy.get('button[id="tabelaRegional:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaRegional:0:btnConsultar"]').click()
        })

        it.only('Regional - Menu Ações - editar', () => {
            cy.acaoPesquisarRegional()
            cy.wait(500)
            cy.get('button[id="tabelaRegional:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaRegional:0:btnEditar"]').click()
            cy.wait(500)
            cy.get('input[id="docIdentidade"]').type('ABC1234')
            cy.wait(500)
            cy.get('button[id="btnSalvar"]').click()
        })

        it.only('Regional - Menu Ações - Arquivo', () => {
            cy.acaoPesquisarRegional()
            cy.wait(500)
            cy.get('button[id="tabelaRegional:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaRegional:0:btnArquivos"]').click()
        })

        it.only('Regional - Menu Ações - Alterar aumento 5%', () => {
            cy.acaoPesquisarRegional()
            cy.wait(500)
            cy.get('button[id="tabelaRegional:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaRegional:0:btnAlterarAumento"]').click()
            cy.wait(500)
            cy.get('button[id="formAumento:j_idt873"]').click()
        })

        it.only('Regional - Menu Ações - Transferir Carteira', () => {
            cy.acaoPesquisarRegional()
            cy.wait(500)
            cy.get('button[id="tabelaRegional:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaRegional:0:btnTransf"]').click()
            cy.wait(5500)
            cy.get('a[href="#formTransfCarteira:j_idt876:j_idt913"]').click()
            cy.wait(500)
            cy.get('a[href="#formTransfCarteira:j_idt876:j_idt877"]').click()
            cy.wait(500)
            cy.get('button[id="formTransfCarteira:j_idt876:j_idt902"]').click()
        })
    })
})

