///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[id="loginInpt"]').type(nome)
    cy.get('input[id="pwd"]').type(senha, { log: false })
    cy.get('#j_idt28 > .ui-button-text').click()
})

Cypress.Commands.add('acaoPesquisarRegional', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuRegional"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarRegional"]').click()
})

Cypress.Commands.add('acaoPesquisarAtualizacaoCadastral', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultores"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuAtualizacaoCadastral"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarAtualizacaoConsultor"]').click()
})

Cypress.Commands.add('acaoLimparAtualizacaoCadastral', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultores"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuAtualizacaoCadastral"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarAtualizacaoConsultor"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoAtualizarAtualizacaoCadastral', () => {
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultores"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuAtualizacaoCadastral"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarAtualizacaoConsultor"]').click()
    cy.wait(500)
    cy.get('button[id="tabelaConsultor:0:acoes_button"]').click()
    cy.wait(500)
    cy.get('a[id="tabelaConsultor:0:btnAnalisar"]').click()
})

Cypress.Commands.add('acaoGerenciarConsultoresPesquisar', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultores"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuGerenciarConsultores"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarConsultor"]').click()
})

Cypress.Commands.add('acaoGerenciarConsultoresLimpar', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultores"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuGerenciarConsultores"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarConsultor"]').click()
    cy.wait(1500)
    cy.get('button[id="limparPesquisa"]').click()

})

Cypress.Commands.add('acaoMetaComercialPesquisar', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultores"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMetaComercial"]').click()
    cy.wait(500)
    cy.get('button[id="Pesquisar"]').click()
})

Cypress.Commands.add('acaoMetaComercialLimpar', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultores"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMetaComercial"]').click()
    cy.wait(500)
    cy.get('button[id="Pesquisar"]').click()
    cy.wait(500)
    cy.get('button[id="limpar"]').click()
})

Cypress.Commands.add('acaoMetaComercialNovo', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultores"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMetaComercial"]').click()
    cy.wait(500)
    cy.get('button[id="Novo"]').click()
})

Cypress.Commands.add('acaoDashboardMetaComercialPesquisar', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultores"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMetaComercialDashboard"]').click()
    cy.wait(800)
    cy.get('button[id="j_idt358:Pesquisar"]').click()
})

Cypress.Commands.add('acaoFornecedoresPesquisar', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuFornecedores"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
})

Cypress.Commands.add('acaoFornecedoresLimpar', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuFornecedores"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:limparPesquisa"]').click()
})

Cypress.Commands.add('acaoFornecedoresConsultar', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuFornecedores"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:tabelaFornecedor:0:acoes_button"]').click()
    cy.wait(500)
    cy.get("#tabFiltros\\:tabelaFornecedor\\:0\\:acoes_menu > ul > li:nth-child(1) > a").click()
})

Cypress.Commands.add('acaoFornecedoresEditar', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuFornecedores"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:tabelaFornecedor:0:acoes_button"]').click()
    cy.wait(500)
    cy.get("#tabFiltros\\:tabelaFornecedor\\:0\\:acoes_menu > ul > li:nth-child(2) > a").click()
})

Cypress.Commands.add('acaoFornecedoresContasBancarias', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuFornecedores"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:tabelaFornecedor:0:acoes_button"]').click()
    cy.wait(500)
    cy.get('a[id="tabFiltros:tabelaFornecedor:0:contasBancarias"]').click()
})

Cypress.Commands.add('acaoFornecedoresExcluir', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuFornecedores"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:tabelaFornecedor:0:acoes_button"]').click()
    cy.wait(500)
    cy.get("#tabFiltros\\:tabelaFornecedor\\:0\\:acoes_menu > ul > li:nth-child(4) > a").click()
})

Cypress.Commands.add('acaoFornecedoresArquivos', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuFornecedores"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:tabelaFornecedor:0:acoes_button"]').click()
    cy.wait(500)
    cy.get("#tabFiltros\\:tabelaFornecedor\\:0\\:acoes_menu > ul > li:nth-child(5) > a").click()
})

Cypress.Commands.add('acaoFornecedoresPendencias', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuFornecedores"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:tabelaFornecedor:0:acoes_button"]').click()
    cy.wait(500)
    cy.get("#tabFiltros\\:tabelaFornecedor\\:0\\:acoes_menu > ul > li:nth-child(6) > a").click()
})

Cypress.Commands.add('acaoFornecedoresAlterarClassificacao', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuFornecedores"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
    cy.wait(500)
    cy.get('button[id="tabFiltros:tabelaFornecedor:0:acoes_button"]').click()
    cy.wait(500)
    cy.get('a[id="tabFiltros:tabelaFornecedor:0:btnAbrirModalAlterarClassificacao"]').click()
})

Cypress.Commands.add('acaoPesquisarCompradores', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCompradores"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarComprador"]').click()
})

Cypress.Commands.add('acaoLimparCompradores', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCompradores"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarComprador"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoExportarCompradores', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCompradores"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarComprador"]').click()
    cy.wait(500)
    cy.get('button[id="exportarComprador"]').click()
})

Cypress.Commands.add('acaoCadastrarCompradores', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCompradores"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarComprador"]').click()
    cy.wait(500)
    cy.get('button[id="incluirComprador"]').click()
})

Cypress.Commands.add('acaoPesquisarUsuarioAtivo', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnUsuarios"]').click()
    cy.wait(500)
    cy.get('label[id="ativoPesquisa_label"]').click()
    cy.get('li[data-label="Ativo"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarUsuario"]').click()
})

Cypress.Commands.add('acaoPesquisarUsuarioInativo', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnUsuarios"]').click()
    cy.wait(500)
    cy.get('label[id="ativoPesquisa_label"]').click()
    cy.get('li[data-label="Inativo"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarUsuario"]').click()
})

Cypress.Commands.add('acaoUsuarioHistorico', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnUsuarios"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarUsuario"]').click()
    cy.wait(500)
    cy.get("#tabelaUsuario\\:2\\:j_idt417").click()
})

Cypress.Commands.add('acaoUsuarioVsfone', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnUsuarios"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarUsuario"]').click()
    cy.wait(500)
    cy.get("#tabelaUsuario\\:0\\:j_idt419").click()
})

Cypress.Commands.add('acaoUsuarioConfiguracao', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnUsuarios"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarUsuario"]').click()
    cy.wait(500)
    cy.get("#tabelaUsuario\\:2\\:j_idt421").click()
})

Cypress.Commands.add('acaoUsuarioAcessoSistema', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnUsuarios"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarUsuario"]').click()
    cy.wait(500)
    cy.get("#tabelaUsuario\\:0\\:j_idt423").click()
})

Cypress.Commands.add('acaoUsuarioHoraExtra', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnUsuarios"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarUsuario"]').click()
    cy.wait(500)
    cy.get("#tabelaUsuario\\:0\\:j_idt425").click()
})

Cypress.Commands.add('acaoLimparCupom', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnCupom"]').click()
    cy.wait(500)
    cy.get('button[id="j_idt377"]').click()
})

Cypress.Commands.add('acaoCadastrarCupom', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnCupom"]').click()
    cy.wait(500)
    cy.get('button[id="j_idt376"]').click()
})

Cypress.Commands.add('acaoPesquisarCupom', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnCupom"]').click()
    cy.wait(500)
    cy.get('button[id="j_idt375"]').click()
})

Cypress.Commands.add('acaoEditarCupom', () => {
    cy.wait(500)
    cy.get('.menu-button > .pi').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCadastro"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnCupom"]').click()
    cy.wait(500)
    cy.get('button[id="j_idt375"]').click()
    cy.wait(500)
    cy.get('button[id="tabelaCupom:0:j_idt398"]').click()
})

Cypress.Commands.add('acaoConsultarAssociado', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
})

Cypress.Commands.add('acaoConsultarAssociadoLimpar', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
    cy.wait(900)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoConsultarAssociadoContato', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
    cy.wait(900)
})

Cypress.Commands.add('acaoConsultarAssociadoEditar', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
    cy.wait(900)
    cy.get('button[id="tabelaAssociado:0:botoes_button"]').click()
    cy.wait(900)
    cy.get("#tabelaAssociado\\:0\\:botoes_menu > ul > li:nth-child(1) > a").click()
})

Cypress.Commands.add('acaoConsultarAssociadoAdicionarVeiculo', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
    cy.wait(900)
    cy.get('button[id="tabelaAssociado:0:botoes_button"]').click()
    cy.wait(900)
    cy.get("#tabelaAssociado\\:0\\:botoes_menu > ul > li:nth-child(2) > a").click()
})

Cypress.Commands.add('acaoConsultarAssociadoConsultar', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
    cy.wait(900)
    cy.get('button[id="tabelaAssociado:0:botoes_button"]').click()
    cy.wait(900)
    cy.get("#tabelaAssociado\\:0\\:botoes_menu > ul > li:nth-child(3) > a").click()
})

Cypress.Commands.add('acaoConsultarAssociadoIncluirSpsSerasa', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
    cy.wait(900)
    cy.get('button[id="tabelaAssociado:0:botoes_button"]').click()
    cy.wait(900)
    cy.get("#tabelaAssociado\\:0\\:botoes_menu > ul > li:nth-child(4) > a").click()
    cy.wait(900)
})

Cypress.Commands.add('acaoConsultarAssociadoComunicacaoEmail', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
    cy.wait(900)
    cy.get('button[id="tabelaAssociado:0:botoes_button"]').click()
    cy.wait(900)
    cy.get("#tabelaAssociado\\:0\\:btnComunicacaoMensagem").click()
    cy.wait(900)
})

Cypress.Commands.add('acaoConsultarAssociadoEnviarSms', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
    cy.wait(900)
    cy.get('button[id="tabelaAssociado:0:botoes_button"]').click()
    cy.wait(900)
    cy.get("#tabelaAssociado\\:0\\:btnEnviarMensagem").click()
    cy.wait(900)
})

Cypress.Commands.add('acaoConsultarAssociadoEnviarNotificacao', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuConsultarAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="ADILSON JORGE FERREIRA - FJX9049 - 123.275.608-37 - 11/04/1969"]').click()
    cy.wait(900)
    cy.get('button[id="tabelaAssociado:0:botoes_button"]').click()
    cy.wait(900)
    cy.get("#tabelaAssociado\\:0\\:btnEnviarNotificacao").click()
    cy.wait(900)
})

Cypress.Commands.add('acaoLimparHistoricoSpcSerasa', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuSpcSerasa"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuSpcSerasa"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(500)
    cy.get('button[id="limparBotao"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('button[id="limparBotao"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarHistoricoSpcSerasa', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuSpcSerasa"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuSpcSerasa"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarLead', () => {
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(450)
    cy.get('li [id="menuform:btnMenuControleLeads"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuControleLeads"]').click()
    cy.wait(450)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('button[id="pesquisarBotao"]').click()
})

Cypress.Commands.add('acaoLimparLead', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(450)
    cy.get('li [id="menuform:btnMenuControleLeads"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuControleLeads"]').click()
    cy.wait(450)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(450)
    cy.get('button[id="limparBotao"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('button[id="limparBotao"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarLeadSemResponsavel', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(450)
    cy.get('li [id="menuform:btnMenuControleLeads"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuControleLeads"]').click()
    cy.wait(450)
    cy.get('#j_idt378 > .ui-chkbox-box').click()
    cy.wait(450)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarLeadAberto', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(450)
    cy.get('li [id="menuform:btnMenuControleLeads"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuControleLeads"]').click()
    cy.wait(450)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoIniciarAtendimentoLead', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(450)
    cy.get('li [id="menuform:btnMenuControleLeads"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuControleLeads"]').click()
    cy.wait(450)
    cy.get('#j_idt378 > .ui-chkbox-box').click()
    cy.wait(450)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(450)
    cy.get('button[id="listaIndicacao:1:j_idt462"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoIniciarAtribuirAtendente', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(450)
    cy.get('li [id="menuform:btnMenuControleLeads"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuControleLeads"]').click()
    cy.wait(450)
    cy.get('#j_idt378 > .ui-chkbox-box').click()
    cy.wait(450)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(450)
    cy.get('button[id="listaIndicacao:0:j_idt470"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoIndicarNovoLead', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(450)
    cy.get('li [id="menuform:btnMenuControleLeads"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuControleLeads"]').click()
    cy.wait(450)
    cy.get('#j_idt378 > .ui-chkbox-box').click()
    cy.wait(450)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(450)
    cy.get('button[id="listaIndicacao:0:j_idt469"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoIndicarNovoLead', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(450)
    cy.get('li [id="menuform:btnMenuControleLeads"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('li [id="menuform:btnMenuControleLeads"]').click()
    cy.wait(450)
    cy.get('#j_idt378 > .ui-chkbox-box').click()
    cy.wait(450)
    cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(450) });
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(450)
    cy.get('button[id="listaIndicacao:0:j_idt469"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarAtualizacaoCadastral', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAtualizacaoCadastralAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAtualizacaoCadastralAssociado"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarVeiculo"]').click()
})

Cypress.Commands.add('acaoLimparAtualizacaoCadastral', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAtualizacaoCadastralAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAtualizacaoCadastralAssociado"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoConfirmarAtualizacaoCadastral', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAtualizacaoCadastralAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAtualizacaoCadastralAssociado"]').click()
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.wait(500)
    cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()
    cy.get('a[id="tabelaSolicitacao:0:confirmarEnvio"]').click()
})

Cypress.Commands.add('acaoNegarAtualizacaoCadastral', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAssociado"]').click()
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuAtualizacaoCadastralAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuAtualizacaoCadastralAssociado"]').click()
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.wait(500)
    cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()
    cy.get('a[id="tabelaSolicitacao:0:negarEnvio"]').click()
})

Cypress.Commands.add('acaoEntregaColetaPesquisarEntrega', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuEntregaColeta"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuEntregaColeta"]').click()
    cy.wait(500)
    cy.get('label[id="selectTipoFiltro_label"]').click()
    cy.get('li[data-label="Entrega"]').click()
})

Cypress.Commands.add('acaoEntregaColetaPesquisarColeta', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuEntregaColeta"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuEntregaColeta"]').click()
    cy.wait(500)
    cy.get('label[id="selectTipoFiltro_label"]').click()
    cy.get('li[data-label="Coleta"]').click()
})

Cypress.Commands.add('acaoEntregaColetaPesquisarEntregaColeta', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuEntregaColeta"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuEntregaColeta"]').click()
    cy.wait(500)
    cy.get('label[id="selectTipoFiltro_label"]').click()
    cy.get('li[data-label="Entrega com Coleta"]').click()
})

Cypress.Commands.add('acaoPesquisarConsultoriaJuridica', () => {
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuJuridico"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultJuridica"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoLimparConsultoriaJuridica', () => {
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuJuridico"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuConsultJuridica"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoTelaControleAnalista', () => {
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuJuridico"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnControleUsuariosJuridico"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarControleAnalista', () => {
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuJuridico"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnControleUsuariosJuridico"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoLimparControleAnalista', () => {
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuJuridico"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnControleUsuariosJuridico"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoPesquisarAnaliseProcesso', () => {
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuJuridico"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuAnaliProcessos"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoLimparAnaliseProcesso', () => {
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuJuridico"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuAnaliProcessos"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
    cy.get('button[id="limpar"]').click()
})

Cypress.Commands.add('acaoIndicadores', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuIndicadores"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuIndicadores"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoRelatorioAvulso', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuRelatoriosAvulsos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuRelatoriosAvulsos"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarAnaliseMovimentacaoVeiculos', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuAnaliseMovimentoVeiculos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuAnaliseMovimentoVeiculos"]').click()
    cy.wait(500)
    cy.get('input[id="dataInicial_input"]').click()
    cy.get('input[id="dataInicial_input"]').clear().type('01012022')
    cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(6) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarGestaoFinanceiraRegioanl', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuGestaoFinanceiraRegional"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuGestaoFinanceiraRegional"]').click()
    cy.wait(500)
    cy.get('input[id="regionais_input"]').type('mg')
    cy.get('tr[data-item-label="MG.20"]').click()
    cy.get('button[id="pesquisarRegionais"]').click()
})

Cypress.Commands.add('acaoLimparGestaoFinanceiraRegioanl', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuGestaoFinanceiraRegional"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuGestaoFinanceiraRegional"]').click()
    cy.wait(500)
    cy.get('input[id="regionais_input"]').type('mg')
    cy.get('tr[data-item-label="MG.20"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarRegionais"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('gerarEvolucaoRecebimento', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuAnaliseRecebimentos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuAnaliseRecebimentos"]').click()
    cy.wait(500)
    cy.get("#j_idt355\\:mes > div.ui-selectlistbox-listcontainer > ul > li:nth-child(2) > div > div").click()
    cy.get("#j_idt355\\:mes > div.ui-selectlistbox-listcontainer > ul > li:nth-child(3) > div > div").click()
    cy.get('button[id="j_idt355:gerar"]').click()
})

Cypress.Commands.add('acaoPesquisarAnaliseCarteira', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuAnaliseRecebimentos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuAnaliseRecebimentos"]').click()
    cy.wait(500)
    cy.get('a[href="#j_idt355:j_idt389"]').click()
    cy.wait(1000)
    cy.get('button[id="j_idt355:pesquisarAnaliseCarteira"]').click()
})

Cypress.Commands.add('acaoLimparAnaliseCarteira', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuAnaliseRecebimentos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuAnaliseRecebimentos"]').click()
    cy.wait(500)
    cy.get('a[href="#j_idt355:j_idt389"]').click()
    cy.wait(500)
    cy.get('button[id="j_idt355:pesquisarAnaliseCarteira"]').click()
    cy.wait(500)
    cy.get('button[id="j_idt355:limparPesquisaAba2"]').click()
})

Cypress.Commands.add('acaoPesquisarAssociado', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuAssociados"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuAssociados"]').click()
    cy.wait(500)
    cy.get('input[id="dtInicial_input"]').click()
    cy.get('input[id="dtInicial_input"]').type('01112022')
    cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('input[id="dtFinal_input"]').click()
    cy.get('input[id="dtFinal_input"]').type('31122022')
    cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisarAssociado"]').click()
})

Cypress.Commands.add('acaoLimparAssociado', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuAssociados"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuAssociados"]').click()
    cy.wait(500)
    cy.get('input[id="dtInicial_input"]').click()
    cy.get('input[id="dtInicial_input"]').type('01112022')
    cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('input[id="dtFinal_input"]').click()
    cy.get('input[id="dtFinal_input"]').type('31122022')
    cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisarAssociado"]').click()
    cy.wait(1500)
    cy.get('#limparPesquisa > .ui-button-text').click()
})

Cypress.Commands.add('acaoPesquisarVeiculoRelatorio', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuVeiculos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuVeiculos"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoLimparVeiculoRelatorio', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuVeiculos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuVeiculos"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoPesquisarVeiculoOficina', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuVeiculosOficina"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuVeiculosOficina"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarVeiculo"]').click()
})

Cypress.Commands.add('acaoLimparVeiculoOficina', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuVeiculosOficina"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuVeiculosOficina"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoDirecVeiculosPesquisar', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuDirecVeiculos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuDirecVeiculos"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoDirecVeiculosLimpar', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuDirecVeiculos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuDirecVeiculos"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.wait(4500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoContatoAssociadoPesquisar', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuContatoAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuContatoAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="dataInicialFiltro_input"]').click()
    cy.get('input[id="dataInicialFiltro_input"]').type('01072022')
    cy.get("#dataInicialFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(5) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#dataInicialFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(5) > a").click()
    cy.wait(500)
    cy.get('input[id="dataFinalFiltro_input"]').click()
    cy.get('input[id="dataFinalFiltro_input"]').type('30092022')
    cy.get("#dataFinalFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(5) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#dataFinalFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(5) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoContatoAssociadoLimpar', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuContatoAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuContatoAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="dataInicialFiltro_input"]').click()
    cy.get('input[id="dataInicialFiltro_input"]').type('01072022')
    cy.get("#dataInicialFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(5) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#dataInicialFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(5) > a").click()
    cy.wait(500)
    cy.get('input[id="dataFinalFiltro_input"]').click()
    cy.get('input[id="dataFinalFiltro_input"]').type('30092022')
    cy.get("#dataFinalFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(5) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#dataFinalFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(5) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
    cy.get('button[id="limpar"]').click()

})

Cypress.Commands.add('acaoConsultarAtividadePesquisar', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuConsultarAtividades"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuConsultarAtividades"]').click()
    cy.wait(500)
    cy.get('input[id="dia_input"]').click()
    cy.get('input[id="dia_input"]').type('01082022')
    cy.get("#dia_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(1) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#dia_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(1) > a").click()
    cy.wait(500)
    cy.get('input[id="diaComparar_input"]').click()
    cy.get('input[id="diaComparar_input"]').type('30122022')
    cy.get("#diaComparar_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(5) > a").should('be.visible').then(() => { cy.wait(500) });
    cy.get("#diaComparar_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(5) > a").click()
    cy.wait(500)

    cy.get('label[id="usuario_label"]').click()
    cy.wait(500)
    cy.get('li[data-label="JUCIMAR FERREIRA DE SOUZA"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()

})

Cypress.Commands.add('acaoPesquisarProutosVeiculo', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuProdutos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutos"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuProdutosVeiculo"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutosVeiculo"]').click()
    cy.wait(500)
    cy.get('input[id="dataInicial_input"]').click()
    cy.get('input[id="dataInicial_input"]').type('01012023')
    cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    cy.wait(500)
    cy.get('input[id="dataFinal_input"]').click()
    cy.get('input[id="dataFinal_input"]').type('01022023')
    cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td.ui-datepicker-today > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoLimparProutosVeiculo', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuProdutos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutos"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuProdutosVeiculo"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutosVeiculo"]').click()
    cy.wait(500)
    cy.get('input[id="dataInicial_input"]').click()
    cy.get('input[id="dataInicial_input"]').type('01012023')
    cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    cy.wait(500)
    cy.get('input[id="dataFinal_input"]').click()
    cy.get('input[id="dataFinal_input"]').type('01022023')
    cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td.ui-datepicker-today > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoPesquisarProdutosAssociado', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuProdutos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutos"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuProdutosAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutosAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="dataInicial_input"]').click()
    cy.get('input[id="dataInicial_input"]').type('01112022')
    cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('input[id="dataFinal_input"]').click()
    cy.get('input[id="dataFinal_input"]').type('01012023')
    cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoLimparProdutosAssociado', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuProdutos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutos"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuProdutosAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutosAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="dataInicial_input"]').click()
    cy.get('input[id="dataInicial_input"]').type('01112022')
    cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('input[id="dataFinal_input"]').click()
    cy.get('input[id="dataFinal_input"]').type('01012023')
    cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoLimparProdutosAssociado', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuProdutos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutos"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuProdutosAssociado"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutosAssociado"]').click()
    cy.wait(500)
    cy.get('input[id="dataInicial_input"]').click()
    cy.get('input[id="dataInicial_input"]').type('01112022')
    cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('input[id="dataFinal_input"]').click()
    cy.get('input[id="dataFinal_input"]').type('01012023')
    cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoProdutosPap', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuProdutos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutos"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuProdutosPap"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutosPap"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPrudotoFunerario', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuProdutos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutos"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuProdutosFunerario"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuProdutosFunerario"]').click()
})

Cypress.Commands.add('acaoPesquisarRelatorioEvento', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuEventosRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuEventosRelatorios"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuEvento"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuEvento"]').click()
    cy.wait(500)
    cy.get('input[id="calendarDataInicio_input"]').click()
    cy.get('input[id="calendarDataInicio_input"]').type('01012023')
    cy.get("#calendarDataInicio_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    cy.wait(500)
    cy.get('input[id="calendarDataFinal_input"]').click()
    cy.get('input[id="calendarDataFinal_input"]').type('01032023')
    cy.get("#calendarDataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisarSinistro"]').click()
})

Cypress.Commands.add('acaoPesquisarRelatorioOrçamento', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuEventosRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuEventosRelatorios"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuOrcamentos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuOrcamentos"]').click()
    cy.wait(500)
    cy.get('input[id="calendarDataInicio_input"]').click()
    cy.get('input[id="calendarDataInicio_input"]').type('01112022')
    cy.get("#calendarDataInicio_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('input[id="calendarDataFinal_input"]').click()
    cy.get('input[id="calendarDataFinal_input"]').type('28022023')
    cy.get("#calendarDataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisarSinistro"]').click()
})

Cypress.Commands.add('acaoPesquisarRelatorioCarroReserva', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuEventosRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuEventosRelatorios"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuCarroReserva"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuCarroReserva"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisarSinistro"]').click()
})

Cypress.Commands.add('acaoPesquisarRelatorioSindicanciaEvento', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuEventosRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuEventosRelatorios"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuSindicanciaEvento"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuSindicanciaEvento"]').click()
    cy.wait(500)
    cy.get('input[id="calendarDataInicio_input"]').click()
    cy.get('input[id="calendarDataInicio_input"]').type('01112022')
    cy.get("#calendarDataInicio_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(4) > a").click()
    cy.wait(500)
    cy.get('input[id="calendarDataFinal_input"]').click()
    cy.get('input[id="calendarDataFinal_input"]').type('28022023')
    cy.get("#calendarDataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisarSinistro"]').click()
})

Cypress.Commands.add('acaoPesquisarRelatorioAssistenciaOrcamento', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuAssistenciaRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuAssistenciaRelatorios"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuAssistenciaOrcamentos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuAssistenciaOrcamentos"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoPesquisarRelatorioAssistenciaSituacao', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuAssistenciaRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuAssistenciaRelatorios"]').click()
    cy.wait(500)
    cy.get('li[id="menuform:btnMenuSituacao"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuSituacao"]').click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoPesquisarRelatorioRastreador', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuRastreadorRelatorio"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuRastreadorRelatorio"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarTitulosEmitidos', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuTitulosEmit"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuTitulosEmit"]').click()
    cy.wait(500)
    cy.get('input[id="dtInicial_input"]').click()
    cy.get('input[id="dtInicial_input"]').type('01112022')
    cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('input[id="dtFinal_input"]').click()
    cy.get('input[id="dtFinal_input"]').type('28022023')
    cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoPesquisarTitulosRecebidos', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuTitulosRecebidos"]').scrollIntoView({ durantion: 200 }).should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuTitulosRecebidos"]').click()
    cy.wait(500)
    cy.get('input[id="dtInicial_input"]').click()
    cy.get('input[id="dtInicial_input"]').type('01112022')
    cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('input[id="dtFinal_input"]').click()
    cy.get('input[id="dtFinal_input"]').type('28022023')
    cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(2) > a").click()
    cy.wait(500)
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoPesquisarEstatisticasGerencial', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuEstatisticasGerencial"]').scrollIntoView({ durantion: 200 }).should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuEstatisticasGerencial"]').click()
})

Cypress.Commands.add('acaoPesquisarRankingConsultores', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuRankingConsultores"]').scrollIntoView({ durantion: 200 }).should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuRankingConsultores"]').click()
})

Cypress.Commands.add('acaoPesquisarCarteira', () => {
    cy.wait(500)
    cy.get('li [id="menuform:btnMenuRelatorios"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuRelatorios"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuCarteira"]').scrollIntoView({ durantion: 200 }).should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuCarteira"]').click()
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoPesquisarTitulosEmitidos', () => {
    cy.wait(950)
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.wait(950)
    cy.get('label[id="empresa_label"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('label[id="empresa_label"]').click()
    cy.get('li[data-label="AGV Brasil"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[data-label="AGV Brasil"]').click()
    cy.wait(950)
    cy.get('input[id="dtInicial_input"]').click()
    cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(6) > a").click()
    cy.get('input[id="dtFinal_input"]').click()
    cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(3) > td:nth-child(6) > a").click()
    cy.wait(950)
    cy.get('button[id="pesquisar"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarTitulosExcluidos', () => {
    cy.wait(950)
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.wait(950)
    cy.get('label[id="empresa_label"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('label[id="empresa_label"]').click()
    cy.get('li[data-label="AGV Brasil"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[data-label="AGV Brasil"]').click()
    cy.wait(950)
    cy.get('input[id="dtInicial_input"]').click()
    cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(6) > a").click()
    cy.get('input[id="dtFinal_input"]').click()
    cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(3) > td:nth-child(6) > a").click()
    cy.wait(950)
    cy.get('button[id="pesquisarExcluidos"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('button[id="pesquisarExcluidos"]').click()
    cy.wait(500)
})

Cypress.Commands.add('acaoPesquisarCadastrarTituloEmitidos', () => {
    cy.wait(950)
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.wait(450)
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible').then(() => { cy.wait(500) });
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.wait(950)
    cy.get('button[id="incluirMensalidade"]').click()
    cy.wait(500)
    cy.get('input[id="autocompletevar_input"]').click().type('hkd4493')
    cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
    cy.wait(500)
    cy.get('label[id="comboContaBancaria_label"]').click()
    cy.get('li[data-label="Universo AGV-Sicoob UNIVERSO - Ag: 40924 - Cc: 182710"]').click()
    cy.wait(500)
    cy.get('input[id="valor"]').click().type('150,11')
    cy.wait(500)
    cy.get('input[id="dataContrato_input"]').click()
    cy.get('input[id="dataContrato_input"]').type('07022023')
    cy.get("#dataContrato_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(2) > td:nth-child(2) > a").click()
    cy.get('button[id="btnSalvarMensalidade"]').click()

})

Cypress.Commands.add('acaoGerarBoleto', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:linkBoletoNovo"]').click()
})

Cypress.Commands.add('acaoRegistrarPagamento', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:addPagamento"]').click()
})

Cypress.Commands.add('acaoEditarValoresBoleto', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:j_idt471"]').click()
})

Cypress.Commands.add('acaoEditar', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:j_idt472"]').click({ force: true });
})

Cypress.Commands.add('acaoVisualizarTitulo', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:botoes_button"]').click({ force: true });
    cy.get('a[id="tabelaMensalidades:0:pesquisarPagamento"]').click({ force: true });
})

Cypress.Commands.add('acaoEditarMensagens', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:botoes_button"]').click({ force: true });
    cy.get('a[id="tabelaMensalidades:0:editarMensagensBoleto"]').click({ force: true });
})

Cypress.Commands.add('acaoExcluirBoleto', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:botoes_button"]').click({ force: true });
    cy.get("#tabelaMensalidades\\:0\\:botoes_menu > ul > li:nth-child(3) > a").click({ force: true });
})

Cypress.Commands.add('acaoDetalharMensalidade', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:botoes_button"]').click({ force: true });
    cy.get("#tabelaMensalidades\\:0\\:botoes_menu > ul > li:nth-child(4) > a").click({ force: true });
})

Cypress.Commands.add('acaoHistoricoVeiculo', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:botoes_button"]').click({ force: true });
    cy.get("#tabelaMensalidades\\:0\\:btnHistorico").click({ force: true });
})

Cypress.Commands.add('acaoEnviarBoletoEmail', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:botoes_button"]').click({ force: true });
    cy.get('button[id="tabelaMensalidades:0:emailBoleto"]').click({ force: true });
})

Cypress.Commands.add('acaoEnviarAprovção', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:botoes_button"]').click({ force: true });
    cy.get('a[id="tabelaMensalidades:0:btEnviarAprovacao"]').click({ force: true });
})

Cypress.Commands.add('acaoDownloadBoleto', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:botoes_button"]').click({ force: true });
    cy.get('a[id="tabelaMensalidades:0:linkBoletoNovoPermanente"]').click({ force: true });
})

Cypress.Commands.add('acaoEnviarSMS', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    cy.get('input[id="placa"]').click()
    cy.get('input[id="placa"]').type('HKD4493')
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaMensalidades:0:botoes_button"]').click({ force: true });
    cy.get('a[id="tabelaMensalidades:0:btnEnviarSms"]').click({ force: true });
})

Cypress.Commands.add('acaoPesquisarCobranca', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuCobranca"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuCobranca"]').click()
    cy.get('button[id="pesquisarContato"]').click()
})

Cypress.Commands.add('acaoTelaDesconto', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuDesconto"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuDesconto"]').click()
})

Cypress.Commands.add('acaoPesquisarDesconto', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuDesconto"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuDesconto"]').click()
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoLimparDesconto', () => {
    cy.get('li[id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuDesconto"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuDesconto"]').click()
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoEditarDesconto', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuDesconto"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuDesconto"]').click()
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaGr:0:j_idt425"]').click()
})

Cypress.Commands.add('acaoExcluirDesconto', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuDesconto"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuDesconto"]').click()
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="tabelaGr:0:j_idt426"]').click()
})

Cypress.Commands.add('acaoPesquisarPromocao', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuPromocao"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuPromocao"]').click()
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoLimparPromocao', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuPromocao"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuPromocao"]').click()
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="limparPesquisa"]').should('be.visible').click()
})

Cypress.Commands.add('acaoIncluirPromocao', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuPromocao"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuPromocao"]').click()
    cy.get('button[id="incluirPromocao"]').should('be.visible').click()
})

Cypress.Commands.add('acaoPesquisarRateio', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuLancamentoRateio"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuLancamentoRateio"]').click()
    cy.get('button[id="pesquisarLancamento"]').click()
})

Cypress.Commands.add('acaoCadastrarRateio', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuLancamentoRateio"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuLancamentoRateio"]').click()
    cy.get('button[id="incluirLancamento"]').click()
})

Cypress.Commands.add('acaoEditarRateio', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuLancamentoRateio"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuLancamentoRateio"]').click()
    cy.get('button[id="tabelaLancamentos:0:j_idt365"]').click()
})

Cypress.Commands.add('acaoPesquisarArquivoRemessa', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuArquivosBancarios"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuArquivosBancarios"]').click()
    cy.get('li[id="menuform:btnMenuArquivoRemessa"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuArquivoRemessa"]').click()
    cy.get('input[id="dtInicial_input"]').click().type('09102022')
    cy.get('input[id="dtFinal_input"]').click().type('09112022')
    cy.get('label[id="empresaRemessa_label"]').click()
    cy.get('li[data-label="Universo AGV"]').click()
    cy.get('label[id="comboContaBancaria_label"]').click()
    cy.get('li[id="comboContaBancaria_9"]').click()
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoLimparArquivoRemessa', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuArquivosBancarios"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuArquivosBancarios"]').click()
    cy.get('li[id="menuform:btnMenuArquivoRemessa"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuArquivoRemessa"]').click()
    cy.get('input[id="dtInicial_input"]').click().type('09102022')
    cy.get('input[id="dtFinal_input"]').click().type('09112022')
    cy.get('label[id="empresaRemessa_label"]').click()
    cy.get('li[data-label="Universo AGV"]').click()
    cy.get('label[id="comboContaBancaria_label"]').click()
    cy.get('li[id="comboContaBancaria_9"]').click()
    cy.get('button[id="pesquisar"]').click()
    cy.get('button[id="limparPesquisa"]').should('not.have.class', 'hidden').click()
})

Cypress.Commands.add('acaoFechamentoPesquisar', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuFechamento"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFechamento"]').click()
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoFechamentoNovo', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuFechamento"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuFechamento"]').click()
    cy.get('button[id="novo"]').click()
})

Cypress.Commands.add('acaoPesquisarInadimplente', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuInadimplentes"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuInadimplentes"]').click()
    cy.get('input[id="dataInicial_input"]').should('be.visible')
    cy.get('input[id="dataInicial_input"]').click().type('01112022')
    cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.get('input[id="dataFinal_input"').should('be.visible')
    cy.get('input[id="dataFinal_input"').click().type('31122022')
    cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoCobrancaTerceirizadaPesquisar', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuCobrancaTerceirizada"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuCobrancaTerceirizada"]').click()
    cy.get('input[id="dataInicial_input"]').should('be.visible')
    cy.get('input[id="dataInicial_input"]').click().type('01112022')
    cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").click()
    cy.get('input[id="dataFinal_input"]').should('be.visible')
    cy.get('input[id="dataFinal_input"]').click().type('01022023')
    cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").click()
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoTermoExpansaoPesquisar', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTermosExpansao"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTermosExpansao"]').click()
    cy.get('button[id="pesquisarBotao"]').click()
})

Cypress.Commands.add('acaoTermoExpansaoLimpar', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTermosExpansao"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTermosExpansao"]').click()
    cy.get('button[id="pesquisarBotao"]').click()
    cy.get('button[id="limparBotao"]').click()
})

Cypress.Commands.add('acaoTermoExpansaoNovo', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:btnMenuTermosExpansao"]').should('be.visible')
    cy.get('li[id="menuform:btnMenuTermosExpansao"]').click()
    cy.get('button[id="j_idt365"]').click()
})

Cypress.Commands.add('acaoPesquisarDevolucaoBoleto', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:devBoleto"]').should('be.visible')
    cy.get('li[id="menuform:devBoleto"]').click()
    cy.get('button[id="pesquisarBotao"]').click()
})

Cypress.Commands.add('acaoLimparDevolucaoBoleto', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:devBoleto"]').should('be.visible')
    cy.get('li[id="menuform:devBoleto"]').click()
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(4060)
    cy.get('button[id="limparBotao"]').click()
})

Cypress.Commands.add('acaoEditarDevolucaoBoleto', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:devBoleto"]').should('be.visible')
    cy.get('li[id="menuform:devBoleto"]').click()
    cy.get('button[id="pesquisarBotao"]').click()
    cy.wait(4060)
    cy.get('button[id="tabelaDevolucoes:0:j_idt413"]').click()
})

Cypress.Commands.add('acaoCadastrarDevolucaoBoleto', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:devBoleto"]').should('be.visible')
    cy.get('li[id="menuform:devBoleto"]').click()
    cy.get('button[id="j_idt390"]').click()
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="EZO9873 (EZO9I73) - ADRIANA SANCHES RIBEIRO COSTA - 123.127.698-32 - Ativo"]').click()
})

Cypress.Commands.add('acaoCadastrarDevolucaoBoleto', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get('li[id="menuform:devBoleto"]').should('be.visible')
    cy.get('li[id="menuform:devBoleto"]').click()
    cy.get('button[id="j_idt390"]').click()
    cy.get('input[id="autocompletevar_input"]').click().type('123')
    cy.get('li[data-item-label="EZO9873 (EZO9I73) - ADRIANA SANCHES RIBEIRO COSTA - 123.127.698-32 - Ativo"]').click()
})

Cypress.Commands.add('acaoPesquisarControleReembolso', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get("#menuform\\:controleDocs").scrollIntoView({ duration: 250 }).should('be.visible')
    cy.get("#menuform\\:controleDocs").click()
    cy.get('label[id="empresa_label"]').should('be.visible')
    cy.get('label[id="empresa_label"]').click()
    cy.get('li[data-label="Universo AGV"]').should('be.visible')
    cy.get('li[data-label="Universo AGV"]').click()
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoLimparControleReembolso', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get("#menuform\\:controleDocs").scrollIntoView({ duration: 250 }).should('be.visible')
    cy.get("#menuform\\:controleDocs").click()
    cy.get('label[id="empresa_label"]').should('be.visible')
    cy.get('label[id="empresa_label"]').click()
    cy.get('li[data-label="Universo AGV"]').should('be.visible')
    cy.get('li[data-label="Universo AGV"]').click()
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoEditarControleReembolso', () => {
    cy.get('li [id="menuform:btnMenuFinanceiro"]').should('be.visible')
    cy.get('li [id="menuform:btnMenuFinanceiro"]').click()
    cy.get("#menuform\\:controleDocs").scrollIntoView({ duration: 250 }).should('be.visible')
    cy.get("#menuform\\:controleDocs").click()
    cy.get('label[id="empresa_label"]').should('be.visible')
    cy.get('label[id="empresa_label"]').click()
    cy.get('li[data-label="Universo AGV"]').should('be.visible')
    cy.get('li[data-label="Universo AGV"]').click()
    cy.get('button[id="pesquisar"]').click()
    cy.wait(500)
    cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()
})

Cypress.Commands.add('acaoPesquisarEvento', () => {
    cy.get('li[id="menuform:btnMenuEventos"]').click()
    cy.get('li[id="menuform:btnMenuControleEventos"]').click()
    cy.get('input[id="placaFiltro"]').type('HKD1909')
    cy.get('button[id="pesquisarVeiculo"]').click()
})

Cypress.Commands.add('acaoNovoEvento', () => {
    cy.get('li[id="menuform:btnMenuEventos"]').click()
    cy.get('li[id="menuform:btnMenuControleEventos"]').click()
    cy.get('button[id="incluirSinistro"]').click()
    cy.get('button[id="btnCliente"]').click()
    cy.get('input[id="placaCliente"]').type('QHO4217')
    cy.get('button[id="btnPesquisar"]').click()
    cy.get('label[id="motivoSinistro_label"]').click()
    cy.wait(900)
    cy.get('li[data-label="Colisão"]').click()
    cy.get('label[id="j_idt4283"]').click()
    cy.get('li[data-label="Sim"]').click()
    cy.get('label[id="carroReservaCombo_label"]').click()
    cy.get('li[id="carroReservaCombo_2"]').click()
    cy.get('button[id="btnSalvarSinistro"]').click()
})

Cypress.Commands.add('acaoLimparEvento', () => {
    cy.get('li[id="menuform:btnMenuEventos"]').click()
    cy.get('li[id="menuform:btnMenuControleEventos"]').click()
    cy.get('input[id="placaFiltro"]').type('QHO4217')
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoPesquisar', () => {
    cy.get('li[id="menuform:btnMenuEventos"]').click()
    cy.get('li[id="menuform:btnMenuAcompanhamentoOficina"]').click()
    cy.get('input[id="placaChassi"]').type('OZE0374')
    cy.get('button[id="pesquisarVeiculo"]').click()
    //cy.get('button[id="limparPesquisa"]').click()

})

Cypress.Commands.add('acaoLimpar', () => {
    cy.get('li[id="menuform:btnMenuEventos"]').click()
    cy.get('li[id="menuform:btnMenuAcompanhamentoOficina"]').click()
    cy.get('input[id="placaChassi"]').type('OZE0374')
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.get('button[id="limparPesquisa"]').click()
})

Cypress.Commands.add('acaoAcompanharOficina', () => {
    cy.get('li[id="menuform:btnMenuEventos"]').click()
    cy.get('li[id="menuform:btnMenuAcompanhamentoOficina"]').click()
    cy.get('input[id="placaChassi"]').type('OZE0374')
    cy.get('button[id="pesquisarVeiculo"]').click()
    cy.get('button[id="tabelaVeiculoAnalitico:0:outrasAcoes_button"]').click()
    cy.get('a[id="tabelaVeiculoAnalitico:0:btnAbrirEventoAcompanhamentoContato"]').click()
    cy.get('button[id="formModal:acompanhamentoOficina:novoAcompanhamento"]').click()
    // cy.get('label[id="formModalEventoAcompanhamentoSituacao:situacaoNova_label"]').click()
    // cy.get('li[data-label="Processo jurídico"]').click()
    cy.get('button[id="formModalEventoAcompanhamentoSituacao:btnsalvarTrocaSituacao"]').click()
    //aba inclusao de contato
    cy.get('a[href="#formModal:acompanhamentoOficina:inclusaoContato"]').click()
    cy.get('label[id="formModal:acompanhamentoOficina:tpContatoAcompanhamento_label"]').click()
    cy.get('li[data-label="Evento"]').click()
    cy.get('label[id="formModal:acompanhamentoOficina:tpOrigemContato_label"]').click()
    cy.get('li[data-label="WhatsApp Avulso"]').click()
    cy.get('button[id="formModal:acompanhamentoOficina:btnSalvarContato"]').click()
    //aba inlcusao de arquivo
    cy.get('a[href="#formModal:acompanhamentoOficina:j_idt491"]').click()
})

const tarefaEvento = require('../fixtures/tarefaEvento.json')
tarefaEvento.forEach(tarefaEvento => {
    Cypress.Commands.add('acaoCadastrarNovaTarefaEvento', () => {
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible')
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.get('li[id="menuform:btnMenuTarefaEvento"]').should('be.visible')
        cy.get('li[id="menuform:btnMenuTarefaEvento"]').click()
        cy.get('button[id="pesquisar"]').click()
        cy.get('button[id="incluir"]').click()
        cy.get('input[id="descricaoTipotarefa"]').type(tarefaEvento.descricao)
        cy.get("#ativo").should('be.visible')
        cy.get("#ativo").click()
        cy.get('li[data-item-label="Incêndio"]').should('be.visible')
        cy.get('li[data-item-label="Incêndio"]').dblclick()
        cy.get('li[data-item-label="Roubo"]').should('be.visible')
        cy.get('li[data-item-label="Roubo"]').dblclick()
        cy.get('button[id="btnSalvar"]').click()
    })
})

Cypress.Commands.add('acaoPesquisarDashboard', () => {
    cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    cy.get('li[id="menuform:btnMenuDashboardAssistencia"]').click()
    cy.get('button[id="pesquisar"]').click()
})

Cypress.Commands.add('acaoPesquisarAtendimentoParcial', () => {
    cy.get('li[id="menuform:btnMenuAssociado"]').click()
    cy.get('li[id="menuform:btnMenuAtendimentoParcial"]').click()
})

Cypress.Commands.add('acaoLimparAtendimentoParcial', () => {
    cy.get('li[id="menuform:btnMenuAssociado"]').click()
    cy.get('li[id="menuform:btnMenuAtendimentoParcial"]').click()
})

Cypress.Commands.add('acaoAniversario', () => {
    cy.get('li[id="menuform:btnMenuAssociado"]').click()
    cy.get('li[id="menuform:btnMenuAssociadoEmailAniversario"]').click()
})

Cypress.Commands.add('acaoServicoAssistencia', () => {
    cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    cy.get('li[id="menuform:btnMenuServicoAssist"]').click()
})

Cypress.Commands.add('acaoSituacoesAssistencia', () => {
    cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    cy.get('li[id="menuform:btnMenuSituacaoAssist"]').click()
})

Cypress.Commands.add('acaoMotivoAssistencia', () => {
    cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    cy.get('li[id="menuform:btnMenuMotivoAssist"]').click()
})

Cypress.Commands.add('acaoCondicoesAssistencia', () => {
    cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    cy.get('li[id="menuform:btnMenuCondicaoVeiculo"]').click()
})

Cypress.Commands.add('acaoTipoAtendimentoAssistencia', () => {
    cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    cy.get('li[id="menuform:btnMenuTipoAtendimento"]').click()
})

Cypress.Commands.add('acaoEventoAssistencia', () => {
    cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    cy.get('li[id="menuform:btnMenuEventoAssist"]').click()
})

Cypress.Commands.add('acaoSupervisaoAcionamento', () => {
    cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    cy.get('li[id="menuform:btnMenuSupervisaoAcionamento"]').click()
})

Cypress.Commands.add('acaoSituacaoCat', () => {
    cy.get('li[id="menuform:btnMenuCat"]').click()
    cy.get('li[id="menuform:btnMenuSituacaoCat"]').click()
})






