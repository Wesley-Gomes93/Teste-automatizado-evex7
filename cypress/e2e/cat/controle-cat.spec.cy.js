describe('EVEX7 test', () => {
    beforeEach(() => {
        // funcao pra ser inicializada sempre antes de todos os testes, 
        cy.clearLocalStorage()
        cy.viewport(1440, 900);
        cy.visit('/')
        cy.get('#loginForm h4').should('have.text', 'Seja bem-vindo ao EVEX7!')
        cy.login(Cypress.env('loginInpt'), Cypress.env('pwd'))
        cy.url().should('eq', 'http://localhost:8080/sav-web-1.0/inicio.faces')
        cy.wait(200)
        cy.get('.menu-button').should('be.visible').click()
    })


    it.skip('Menu Assistência - Condição Assistência', () => {
        cy.get('li [id="menuform:btnMenuCat"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuCat"]').click()
        cy.wait(500)
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuControleCat"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuControleCat"]').click()
        cy.wait(500)

        cy.wait(500)
        cy.get('label[id="tipoSindicancia_label"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="tipoSindicancia_label"]').click()
        cy.wait(450)
        cy.get('li[data-label="Colisões"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[data-label="Colisões"]').click()
        cy.wait(450)

        cy.wait(500)
        cy.get('button[id="pesquisar"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="pesquisar"]').click()
        cy.wait(450)

        cy.wait(450).get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').should('be.visible').then(() => { cy.wait(500) });
        cy.wait(450).get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
        cy.wait(500)
        cy.get('button[id="outrasAcoes_button"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="outrasAcoes_button"]').click()
        cy.wait(500)
        cy.get('a[id="btnAbrirSinistroAcompanhamentoContato"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[id="btnAbrirSinistroAcompanhamentoContato"]').click()
        cy.wait(500)
        cy.get('button[id="acompanhamentoContatoForm:acoes_button"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="acompanhamentoContatoForm:acoes_button"]').click()
        cy.wait(500)
        cy.get('a[id="acompanhamentoContatoForm:incluirAcompanhamentoContato"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[id="acompanhamentoContatoForm:incluirAcompanhamentoContato"]').click()
        cy.wait(500)
        cy.get('label[id="acompanhamentoContatoForm:situacaoAlteracaoContatoModal_label"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="acompanhamentoContatoForm:situacaoAlteracaoContatoModal_label"]').click()
        cy.wait(500)
        cy.get('li[data-label="REGULAGEM – AUTORIZADO - SOLICITADO COMPLEMENTO"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[data-label="REGULAGEM – AUTORIZADO - SOLICITADO COMPLEMENTO"]').click()
        cy.wait(500)

        cy.wait(250).get('textarea[name="acompanhamentoContatoForm:j_idt2231"]').type('kasljfasdkfalsd fasd jfasdkhfajsdfh asdljkfhaljks h1209652349657234 65 237456 2 73465 92435 872654987234562 TESTE FINAL CYPRESS')
        cy.wait(500)

        cy.get('button[id="acompanhamentoContatoForm:btnSalvarSAContatoModal"]').click()

        cy.get('button[id="enviarTermoConfirmar"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="enviarTermoConfirmar"]').click()
        cy.wait(500)
        cy.get('button[id="acompanhamentoContatoForm:voltaPesquisa"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="acompanhamentoContatoForm:voltaPesquisa"]').click()
        cy.wait(500)

        cy.get("#acompanhamentoContatoModalDialog > div.ui-dialog-titlebar.ui-widget-header.ui-helper-clearfix.ui-corner-top > a").click()

    })

    it('Menu Assistência - Condição Assistência - Historico', () => {
        cy.get('li [id="menuform:btnMenuCat"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuCat"]').click()
        cy.wait(500)
        cy.wait(450)
        cy.get('li[id="menuform:btnMenuControleCat"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuControleCat"]').click()
        cy.wait(500)

        cy.wait(500)
        cy.get('label[id="tipoSindicancia_label"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('label[id="tipoSindicancia_label"]').click()
        cy.wait(450)
        cy.get('li[data-label="Colisões"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[data-label="Colisões"]').click()
        cy.wait(450)

        cy.wait(500)
        cy.get('button[id="pesquisar"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="pesquisar"]').click()
        cy.wait(450)

        cy.wait(450).get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').should('be.visible').then(() => { cy.wait(500) });
        cy.wait(450).get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
        cy.wait(500)
        cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('button[id="tabelaResultadoPesquisa:0:btnAnalisar"]').click()
        cy.wait(500)
        cy.get('a[id="btnHistorico"]').scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get('a[id="btnHistorico"]').click()
        cy.wait(500)
        cy.get("#formHistorico\\:j_idt2362\\:j_idt2363_header").should('be.visible').then(() => { cy.wait(500) });
        cy.get("#formHistorico\\:j_idt2362\\:j_idt2363_header").click()
        cy.wait(500)
        cy.get("#formHistorico\\:j_idt2362\\:j_idt2408_header").should('be.visible').then(() => { cy.wait(500) });
        cy.get("#formHistorico\\:j_idt2362\\:j_idt2408_header").click()
        cy.wait(500)
        cy.get("#formHistorico\\:j_idt2362\\:j_idt2444_header").should('be.visible').then(() => { cy.wait(500) });
        cy.get("#formHistorico\\:j_idt2362\\:j_idt2444_header").click()
        cy.wait(500)
        cy.get("#formHistorico\\:j_idt2362\\:j_idt2478_header").should('be.visible').then(() => { cy.wait(500) });
        cy.get("#formHistorico\\:j_idt2362\\:j_idt2478_header").click()
        cy.wait(500)
        cy.get("#historicoDialog > div.ui-dialog-titlebar.ui-widget-header.ui-helper-clearfix.ui-corner-top > a > span").scrollIntoView({ duration: 250 }).should('be.visible').then(() => { cy.wait(500) });
        cy.get("#historicoDialog > div.ui-dialog-titlebar.ui-widget-header.ui-helper-clearfix.ui-corner-top > a > span").click()
        cy.wait(500)
    })
})