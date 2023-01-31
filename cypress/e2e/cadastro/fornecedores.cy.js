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

    context('Cadastrar novo Fornecedor', () => {
        // const fornecedor = require('../../fixtures/fornecedor.json')
        // fornecedor.forEach(fornecedor => {

        //     it(`Fornecedores - ${fornecedor.titular}`, () => {
        //         cy.get('.menu-button > .pi').click()
        //         cy.wait(200)
        //         cy.get('li [id="menuform:btnMenuCadastro"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li [id="menuform:btnMenuCadastro"]').click()
        //         cy.wait(450)

        //         cy.get('li[id="menuform:btnMenuFornecedores"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[id="menuform:btnMenuFornecedores"]').click();
        //         cy.url().should('eq', 'http://localhost:8080/sav-web-1.0/paginas/fornecedor/fornecedor.faces')

        //         cy.get('button[id="tabFiltros:pesquisarFornecedor"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click();
        //         cy.wait(500)

        //         cy.get('button[id="tabFiltros:incluirFornecedor"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[id="tabFiltros:incluirFornecedor"]').click();
        //         cy.wait(500)

        //         cy.get('input[name="cnpj"]').type(fornecedor.cnpjFornecedor)
        //         cy.get('input[name="razaoSocial"]').type(fornecedor.razaoSocial)
        //         cy.get('input[name="nomeFantasia"]').type(fornecedor.nomeFantasia)
        //         cy.get('input[name="inscEstadual"]').type(fornecedor.inscEstadual)

        //         cy.get('input[name="contato"]').type(fornecedor.contatoFornecedor)
        //         cy.get('input[name="fone1"]').type(fornecedor.telefoneFornecedor)
        //         cy.get('input[name="emailPJ"]').type(fornecedor.emailFornecedor) 
        //         cy.get('label[id="tipoFornecedor_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="tipoFornecedor_label"]').click();
        //         cy.wait(500)

        //         cy.wait(450)
        //         cy.get(("#tipoFornecedor_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(3) > label")).should('be.visible').then(() => { cy.wait(450) });
        //         cy.get(("#tipoFornecedor_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(3) > label")).click();
        //         cy.wait(500)
        //         cy.get('label[id="tipoFornecedor_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="tipoFornecedor_label"]').click();
        //         cy.wait(500)

        //         cy.get('textarea[id="j_idt936"]').type('cypress na area')

        //         cy.get('input[name="dPagamento"]').type('10')

        //         cy.get('div[id="panelConfiguracao:j_idt1141_header"]').dblclick();
        //         cy.wait(500)
        //         cy.get('a[id="panelConfiguracao:j_idt1161"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('a[id="panelConfiguracao:j_idt1161"]').click()
        //         cy.wait(450)

        //         cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').click()
        //         cy.wait(500)
        //         cy.get('li[id="enderecoForm:tpEnderecoCombo_2"]').click()
        //         cy.wait(500)
        //         cy.get('input[name="enderecoForm:cep"]').type(fornecedor.cepFornecedor)
        //         cy.get('input[name="enderecoForm:numEndereco"]').type(fornecedor.numeroFornecedor)
        //         cy.get('input[name="enderecoForm:dcComplemento"]').type(fornecedor.complementoFornecedor) 

        //         cy.get('button[name="enderecoForm:btnOk"]').click()

        //         cy.wait(500)
        //         cy.get('div[id="panelConfiguracao:j_idt1165_header"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('div[id="panelConfiguracao:j_idt1165_header"]').click()
        //         cy.wait(450)

        //         cy.get('a[id="panelConfiguracao:j_idt1182"]').click()

        //         cy.get('label[id="localRecebimentoForm:enderecosCombo_label"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('label[id="localRecebimentoForm:enderecosCombo_label"]').click()
        //         cy.wait(450)

        //         cy.get('li[id="localRecebimentoForm:enderecosCombo_1"]').click()
        //         cy.wait(450)

        //         cy.get('input[id="localRecebimentoForm:capacidadeTotal"]').type('4')
        //         cy.wait(450)

        //         cy.get('a[id="localRecebimentoForm:j_idt1609"]').click()
        //         cy.wait(200)
        //         cy.get('label[id="localRecebimentoForm:tipoVeiculoCombo_label"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('label[id="localRecebimentoForm:tipoVeiculoCombo_label"]').click()
        //         cy.wait(200)
        //         cy.get('li[data-label="Motocicleta"]').click()
        //         cy.get("#localRecebimentoForm\\:incluirTipoVeiculo > i").click()

        //         cy.wait(500)
        //         cy.get('button[id="localRecebimentoForm:btnOk"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('button[id="localRecebimentoForm:btnOk"]').click()

        //         cy.wait(500)
        //         cy.get('div[id="panelConfiguracao:j_idt1185_header"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('div[id="panelConfiguracao:j_idt1185_header"]').click()
        //         cy.wait(450)

        //         cy.wait(500)
        //         cy.get('a[id="panelConfiguracao:j_idt1204"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('a[id="panelConfiguracao:j_idt1204"]').click()
        //         cy.wait(450)

        //         cy.wait(500)
        //         cy.get('label[id="contaBancariaForm:tipoConta_label"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('label[id="contaBancariaForm:tipoConta_label"]').click()
        //         cy.wait(450)
        //         cy.wait(500)
        //         cy.get('li[data-label="Conta Poupança"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('li[data-label="Conta Poupança"]').click()
        //         cy.wait(450)

        //         cy.wait(500)
        //         cy.get('label[id="contaBancariaForm:banco_label"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('label[id="contaBancariaForm:banco_label"]').click()
        //         cy.wait(450)
        //         cy.wait(500)
        //         cy.get('li[data-label="077 - Banco Inter"]').scrollIntoView({ duration: 1000 }).should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('li[data-label="077 - Banco Inter"]').click()
        //         cy.wait(450)

        //         cy.wait(500)
        //         cy.get('input[name="contaBancariaForm:titular"]').type(fornecedor.titular)
        //         cy.get('input[id="contaBancariaForm:cpf"]').type(fornecedor.cnpjCpf)
        //         cy.get('input[name="contaBancariaForm:numeroAgencia"]').type(fornecedor.numeroContaFornecedor)
        //         cy.get('input[name="contaBancariaForm:digitoAgencia"]').type(fornecedor.digitoContaFornecedor)
        //         cy.get('input[name="contaBancariaForm:numeroConta"]').type(fornecedor.numeroAgenciaFornecedor)
        //         cy.get('input[name="contaBancariaForm:digitoConta"]').type(fornecedor.digitoAgenciaFornecedor)

        //         cy.wait(500)
        //         cy.get('button[id="contaBancariaForm:btnOk"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('button[id="contaBancariaForm:btnOk"]').click()
        //         cy.wait(450)

        //         cy.wait(500)
        //         cy.get('div[id="panelConfiguracao:j_idt1207_header"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('div[id="panelConfiguracao:j_idt1207_header"]').click()
        //         cy.wait(450)

        //         cy.wait(500)
        //         cy.get('a[id="panelConfiguracao:j_idt1235"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('a[id="panelConfiguracao:j_idt1235"]').click()
        //         cy.wait(450)

        //         cy.wait(500)
        //         cy.get('input[id="apoliceForm:nomeRegistroSusep"]').type(fornecedor.nomeRegistroSusep)
        //         cy.get('input[id="apoliceForm:numeroCertificado"]').type(fornecedor.numeroCertificado)
        //         cy.get('input[id="apoliceForm:cnpjRegistroSusep"]').type(fornecedor.cnpjRegistroSusep)
        //         cy.get('input[id="apoliceForm:numeroApoliceSusep"]').type(fornecedor.numeroApoliceSusep)

        //         cy.wait(500)
        //         cy.get('button[id="apoliceForm:btnOk"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('button[id="apoliceForm:btnOk"]').click()
        //         cy.wait(450)

        //         cy.wait(500)
        //         cy.get('button[id="btnSalvar"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('button[id="btnSalvar"]').click()
        //         cy.wait(450)
        //         cy.wait(500)
        //         cy.get('button[id="btnSalvar"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('button[id="btnSalvar"]').click()
        //         cy.wait(450)
        //         cy.wait(500)
        //         cy.get('button[id="btnCancelarFornecedor"]').should('be.visible').then(() => { cy.wait(450) })
        //         cy.get('button[id="btnCancelarFornecedor"]').click()
        //         cy.wait(450)

        //         cy.wait(1750)
        //         cy.get('a[href="#tabFiltros:j_idt446"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('a[href="#tabFiltros:j_idt446"]').click();
        //         cy.wait(500)

        //         cy.wait(1750)
        //         cy.get('button[id="tabFiltros:pesquisarFornecedorLoc"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[id="tabFiltros:pesquisarFornecedorLoc"]').click();
        //         cy.wait(450)

        //     })
        // })
    })

    context('Ações Basicas', () => {
        it('Fornecedores - Pesquisar', () => {
            cy.acaoFornecedoresPesquisar()
        })

        it('Fornecedores - Exportar - Lista de Fornecedores', () => {
            cy.acaoFornecedoresPesquisar()
            cy.wait(500)
            cy.get('button[id="tabFiltros:acoesExportar_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabFiltros:excelnovo"]')
        })

        it('Fornecedores - Exportar - Pendencias', () => {
            cy.acaoFornecedoresPesquisar()
            cy.wait(500)
            cy.get('button[id="tabFiltros:acoesExportar_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabFiltros:excelDetalhado"]')
        })

        it('Fornecedores - Exportar - Fornecedor Assistencia', () => {
            cy.acaoFornecedoresPesquisar()
            cy.wait(500)
            cy.get('button[id="tabFiltros:acoesExportar_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabFiltros:excelFornecedor"]')
        })

        it('Fornecedores - Limpar', () => {
            cy.acaoFornecedoresLimpar()
        })
    })

    context('Menu Açoes', () => {
        it('Fornecedores - Ação - Consultar', () => {
            cy.acaoFornecedoresConsultar()
        })

        it('Fornecedores - Ação - Editar', () => {
            cy.acaoFornecedoresEditar()
        })

        it('Fornecedores - Ação - Contas Bancarias', () => {
            cy.acaoFornecedoresContasBancarias()
        })

        it('Fornecedores - Ação - Excluir', () => {
            cy.acaoFornecedoresExcluir()
        })

        it('Fornecedores - Ação - Arquivos', () => {
            cy.acaoFornecedoresArquivos()
        })

        it('Fornecedores - Ação - Pendencias', () => {
            cy.acaoFornecedoresPendencias()
        })

        it('Fornecedores - Ação - Alterar Classificação', () => {
            cy.acaoFornecedoresAlterarClassificacao()
        })
    })
})