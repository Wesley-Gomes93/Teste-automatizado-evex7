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

    it('Controle Evento - Analisar Evento', () => {
        cy.wait(500)
        cy.get('li [id="menuform:btnMenuEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuEventos"]').click()
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuControleEventos"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuControleEventos"]').click()
        cy.wait(950)
        cy.get('button[id="pesquisarVeiculo"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="pesquisarVeiculo"]').click()
        cy.wait(500)
        cy.wait(1750)
        cy.get('th[id="tabelaEvento:j_idt557"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('th[id="tabelaEvento:j_idt557"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaEvento:0:acoes_button"]').scrollIntoView().should('be.visible').then(() => { cy.wait(500) });
        cy.scrollTo('right', { duration: 2000 })
        cy.get('button[id="tabelaEvento:0:acoes_button"]').click()
        cy.wait(950)
        cy.get("#tabelaEvento\\:0\\:acoes_menu > ul > li:nth-child(1) > a").should('be.visible').then(() => { cy.wait(500) });
        cy.get("#tabelaEvento\\:0\\:acoes_menu > ul > li:nth-child(1) > a").click()
        cy.wait(950)
        cy.get("#tabs > ul > li:nth-child(2) > a").should('be.visible').then(() => { cy.wait(500) });
        cy.get("#tabs > ul > li:nth-child(2) > a").click()
        cy.wait(950)
        cy.get('button[id="j_idt4009"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="j_idt4009"]').click()
        cy.wait(950)
        cy.get('a[href="#tarefasForm:tabTarefas:j_idt5489"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tarefasForm:tabTarefas:j_idt5489"]').click()
        cy.wait(950)
        cy.get('button[id="tarefasForm:btnFecharModalTarefa"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="tarefasForm:btnFecharModalTarefa"]').click()
        cy.wait(950)
        cy.get('button[id="btEventoRessarcivel"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="btEventoRessarcivel"]').click()
        cy.wait(950)
        cy.get('button[id="j_idt6888:btFecharModalRessarcivel"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="j_idt6888:btFecharModalRessarcivel"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt1545"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:j_idt1545"]').click()
        cy.wait(950)
        cy.get('label[id="tabs:tabDadosFinanceiros:avaliacaoAlerar_label"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="tabs:tabDadosFinanceiros:avaliacaoAlerar_label"]').click()
        cy.wait(950)
        cy.get('li[data-label="Perda Parcial"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[data-label="Perda Parcial"]').click()
        cy.wait(950)
        cy.get('label[id="tabs:tabDadosFinanceiros:montaVeiculo_label"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="tabs:tabDadosFinanceiros:montaVeiculo_label"]').click()
        cy.wait(950)
        cy.get("#tabs\\:tabDadosFinanceiros\\:montaVeiculo_2").should('be.visible').then(() => { cy.wait(500) });
        cy.get("#tabs\\:tabDadosFinanceiros\\:montaVeiculo_2").click()
        cy.wait(500)
        cy.wait(950)
        cy.get('a[href="#tabs:tabDadosFinanceiros:orcamento"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:tabDadosFinanceiros:orcamento"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:tabDadosFinanceiros:notaFiscal"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:tabDadosFinanceiros:notaFiscal"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:tabDadosFinanceiros:pagamento"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:tabDadosFinanceiros:pagamento"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt2003"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:j_idt2003"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:tabRessarcimento"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:tabRessarcimento"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt2983"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:j_idt2983"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt3160"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:j_idt3160"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt3407"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:j_idt3407"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt3690"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:j_idt3690"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt3798"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:j_idt3798"]').click()
        cy.wait(950)
        cy.get('a[href="#tabs:j_idt3924"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[href="#tabs:j_idt3924"]').click()
        cy.wait(950)
        cy.get('button[id="j_idt4010"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="j_idt4010"]').click()
        cy.wait(500)
    })
})