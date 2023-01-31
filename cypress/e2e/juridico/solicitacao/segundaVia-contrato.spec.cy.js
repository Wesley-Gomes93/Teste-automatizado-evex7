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

    it('Juridico - Analise de Processos', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenu2ViaContrato"]').click()       
    })

    it('Juridico - Analise de Processos - Pesquisar', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenu2ViaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()     
    })

    it('Juridico - Analise de Processos - Limpar', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenu2ViaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="limparPesquisa"]').click()       
    })

    it.only('Juridico - Analise de Processos - Acoes - Confirmar Envio', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenu2ViaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()  
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()       
        cy.wait(500)
        cy.get('a[id="tabelaSolicitacao:0:confirmarEnvio"]').click()       
    })

    it.only('Juridico - Analise de Processos - Acoes - Recusar Envio', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenu2ViaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()  
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()       
        cy.wait(500)
        cy.get('a[id="tabelaSolicitacao:0:negarEnvio"]').click()       
    })
})