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

    describe('Ações Basicas - Aba - Produção Adesão Live', () => {
        it('Relatorio - Estatisticas Gerencial - Pesquisar', () => {
            cy.acaoPesquisarEstatisticasGerencial()
            cy.wait(900)
            cy.get('button[id="tab:pesquisarLive"]').click()
        })
    })
    
    describe('Ações Basicas - Aba - Relação de Itens da Base', () => {
        it('Relatorio - Estatisticas Gerencial - Pesquisar', () => {
            cy.acaoPesquisarEstatisticasGerencial()
            cy.get('a[href="#tab:tab1Estatistica"]').click()
            cy.wait(500)            
            cy.get('button[id="tab:executaItensEstatisticas"]').click()
        })
    })
    
    describe('Ações Basicas - Analise de Recebimento Geral', () => {
        it('Relatorio - Estatisticas Gerencial - Pesquisar', () => {
            cy.acaoPesquisarEstatisticasGerencial()
            cy.get('a[href="#tab:estatisticaRecebimento"]').click()
            cy.wait(500)            
            cy.get('button[id="tab:executaItensEstatisticasRecebimento"]').click()
        })
    })
})