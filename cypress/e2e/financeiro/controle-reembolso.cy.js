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
        it('Controle de Reembolso - Pesquisar', () => {
            cy.acaoPesquisarControleReembolso()
        })
        it('Controle de Reembolso - Limpar', () => {
            cy.acaoLimparControleReembolso()
        })
    })
    describe('Menu Ações', () => {
        it.only('Controle de Reembolso - Ações - Enviar Reprogramação', () => {
            cy.acaoEditarControleReembolso()
            cy.get('a[id="tabelaSolicitacao:0:reintegrar"]').click()
        })
        it.only('Controle de Reembolso - Ações - Reintegrar', () => {
            cy.acaoEditarControleReembolso()
            cy.get('a[id="tabelaSolicitacao:0:reintegrar"]').click()
        })
        it.only('Controle de Reembolso - Ações - Cancelar Reembolso', () => {
            cy.acaoEditarControleReembolso()
            cy.get('a[id="tabelaSolicitacao:0:cancelar"]').click()
        })
        it.only('Controle de Reembolso - Ações - Informar Recebimento', () => {
            cy.acaoEditarControleReembolso()
            cy.get('a[id="tabelaSolicitacao:0:infoRecebto"]').click()
        })
        it.only('Controle de Reembolso - Ações - Download Exemplo', () => {
            cy.acaoEditarControleReembolso()
            cy.get('a[id="tabelaSolicitacao:0:imprimirTermo"]').click()
        })
        it.only('Controle de Reembolso - Ações - Consultar', () => {
            cy.acaoEditarControleReembolso()
           cy.get("#tabelaSolicitacao\\:0\\:outrasAcoes_menu > ul > li:nth-child(6) > a").click()
        })
        it.only('Controle de Reembolso - Ações - Historico Veiculo', () => {
            cy.acaoEditarControleReembolso()
            cy.get('a[id="tabelaSolicitacao:0:btnHistorico"]').click()
        })
        
    })

})