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

    it('Juridico - Denúncia contratual', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
        cy.wait(500)
    })

    it('Juridico - Denúncia contratual - Pesquisar', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
    })

    it('Juridico - Denúncia contratual - Limpar ', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="limparPesquisa"]').click()
    })

    it('Juridico - Denúncia contratual - Acoes - Confirmar ', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()
        // cy.get('button[id="formEnvioDenunciaContratual:enviar"]').click()
    })

    it('Juridico - Denúncia contratual - Acoes - Enviar Pra Analise ', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()
        cy.get('a[id="tabelaSolicitacao:0:confirmarAnalise"]').click()
        cy.wait(500)
        // cy.get('button[id="formAnaliseEnvioDenunciaContratual:analisar"]').click()
    })

    it('Juridico - Denúncia contratual - Acoes - Recusar ', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()
        cy.get('a[id="tabelaSolicitacao:0:negarEnvio"]').click()
        cy.wait(500)
        cy.get('button[id="formRecusaEnvioDenunciaContratual:j_idt476"]').click()
    })

    it('Juridico - Denúncia contratual - Acoes - Relatorio Titulos Emitidos ', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()
        cy.get('a[id="tabelaSolicitacao:0:relatorioTitulos"]').click()
    })

    it('Juridico - Denúncia contratual - Acoes - Relatorio Eventos ', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()
        cy.get('a[id="tabelaSolicitacao:0:relatorioEventos"]').click()
    })

    it('Juridico - Denúncia contratual - Acoes - Relatorio Orçamento Assistencia 24hrs ', () => {
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuJuridico"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
        cy.wait(500)
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaSolicitacao:0:outrasAcoes_button"]').click()
        cy.get('a[id="tabelaSolicitacao:0:relatorioAssistencia"]').click()
    })
})