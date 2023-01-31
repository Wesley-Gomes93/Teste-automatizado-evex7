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

    it('Juridico - Advogado Correspondente', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuAdvoCorres"]').click()
    })

    it('Juridico - Advogado Correspondente - Pesquisar', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuAdvoCorres"]').click()        
        cy.wait(500)
        cy.get('button[id="pesquisar"]').click()

    })

    it('Juridico - Advogado Correspondente - Limpar ', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuAdvoCorres"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisar"]').click()
        cy.wait(500)
        cy.get('button[id="limpar"]').click()
    })

    it('Juridico - Advogado Correspondente - Acoes - Analisar', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuAdvoCorres"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisar"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
    })

    it('Juridico - Advogado Correspondente - Acoes - Definir Analista', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuAdvoCorres"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisar"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaResultadoPesquisa:0:j_idt482"]').click()
        cy.wait(500)
        cy.get('label[id="processosPorAnalista:formDefinirAnalistaInicio:comboAnalistaDefinir_label"]').click()
        cy.get('li[data-label="(0) MIKE DE OLIVEIRA MIRANDA"]').click()
        cy.wait(500)
        // cy.get('button[id="processosPorAnalista:formDefinirAnalistaInicio:j_idt2771"]').click()
    })
})