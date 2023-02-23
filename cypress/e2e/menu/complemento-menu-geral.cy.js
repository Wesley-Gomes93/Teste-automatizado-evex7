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

    
    
    it(' Menu C.A.T - Motivos negativa', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuCat"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMotivosNegativasSindicancia"]').click()
        cy.wait(500)
    })
    
    it(' Menu Evento - Acompanhamento Oficina', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuEventos"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuAcompanhamentoOficina"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="limparPesquisa"]').click()
        cy.wait(500)
    })
    
    it(' Menu Financeiro - Pendente Vistoria', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:relPendenteVistoria"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisar"]').click()
        cy.wait(500)
    })
    
    it(' Menu Financeiro - Recorrencia - Recorrencia', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:j_idt125"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnRecorrenciaConsultor"]').click()
        cy.wait(500)
        cy.get('button[id="j_idt369"]').click()
        cy.wait(500)
        cy.get('button[id="j_idt370"]').click()
        cy.wait(500)
        cy.get('button[id="btnCancelar"]').click()
        cy.wait(500)
    })
    
    it(' Menu Financeiro - Recorrencia - Importar Recorrencia Rastreador', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:j_idt125"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnImportarRecorrencia"]').click()
    })

    it(' Menu Relatorio - Evento - Inadimplencia Apos Evento', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuRelatorios"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuEventosRelatorios"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:j_idt128"]').click()
        cy.wait(500)
    })

    it(' Menu Solicitações - Solicitar Desligamento', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitacao"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuRh"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitaDesliga"]').click()
        cy.wait(500)
    })




})