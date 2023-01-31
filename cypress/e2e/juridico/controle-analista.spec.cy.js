///<reference types="cypress"/>

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

    describe('Ações basicas', () => {
        it('Juridico - Controle de Analista ', () => {
            cy.acaoTelaControleAnalista()
        })

        it('Juridico - Controle de Analista - Pesquisar', () => {
            cy.acaoPesquisarControleAnalista()
        })

        it('Juridico - Controle de Analista - Limpar', () => {
            cy.acaoLimparControleAnalista()
        })
    })

    describe('Cadastrar um novo Analista', () => {
        it('Juridico - Controle de Analista - Novo - Cancelar', () => {
            cy.acaoTelaControleAnalista()
            cy.get('button[id="incluirJuridico"]').click()
            cy.wait(500)
            cy.get('button[id="btCancelar"]').click()
        })

        it('Juridico - Controle de Analista - Novo Analista', () => {
            cy.acaoTelaControleAnalista()
            cy.get('button[id="incluirJuridico"]').click()
            cy.wait(500)
            cy.get('label[id="usuarioSelect_label"]').click()
            cy.get('li[data-label="KENIA HELENA AZEVEDO LIMA"]').click()
            cy.get("#j_idt396 > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default").click()
            cy.get("#j_idt400 > div.ui-selectlistbox-listcontainer > ul > li > div > div").click()
            cy.get('label[id="j_idt405_label"]').click()
            cy.get("#j_idt405_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(2)").click()
            cy.get("#j_idt405_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(3)").click()
            cy.get("#j_idt405_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(5)").click()
            cy.get("#j_idt405_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(6)").click()
            cy.get("#j_idt405_panel > div.ui-selectcheckboxmenu-items-wrapper > ul > li:nth-child(8)").click()
            cy.get('button[id="btSalvar"]').click()
        })

    })
})
