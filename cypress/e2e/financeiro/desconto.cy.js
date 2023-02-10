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
        it('Menu Financeiro - Desconto - Entrar na Tela', () => {
            cy.acaoTelaDesconto()
        })

        it('Menu Financeiro - Desconto - Pesquisar', () => {
            cy.acaoPesquisarDesconto()
        })

        it('Menu Financeiro - Desconto - Limpar', () => {
            cy.acaoLimparDesconto()
        })
    })

    describe('Cadastrar Novo Desconto', () => {
        it('Menu Financeiro - Desconto - Novo ', () => {
            cy.acaoPesquisarDesconto()
            cy.get('button[id="incluirDesconto"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').should('be.visible')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('input[id="dtInicioDesconto"]').type('20022022')
            cy.get('input[id="dtFimDesconto"]').type('21022022')
            cy.get('label[id="tipo_label"]').should('be.visible')
            cy.get('label[id="tipo_label"]').click()
            cy.get('li[data-label="Valor em Desconto R$"]').should('be.visible')
            cy.get('li[data-label="Valor em Desconto R$"]').click()
            cy.get('input[id="valorDesconto"]').should('be.visible')
            cy.get('input[id="valorDesconto"]').type('565,00')
            cy.get('textarea[id="observacao"]').should('be.visible')
            cy.get('textarea[id="observacao"]').type('teste')
            // cy.get('button[id="btnSalvar"]').click()
        })
    })

    describe('Menu Ações', () => {

        it('Menu Financeiro - Desconto - Editar', () => {
            cy.acaoEditarDesconto()

        })
        it('Menu Financeiro - Desconto - Excluir', () => {
            cy.acaoExcluirDesconto()

        })
    })

})