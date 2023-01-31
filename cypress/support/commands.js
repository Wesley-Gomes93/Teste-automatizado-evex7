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
    cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(500) });
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
