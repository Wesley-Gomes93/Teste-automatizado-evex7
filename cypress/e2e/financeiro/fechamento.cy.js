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

    describe('Ações Basica', () => {
        it('Fechamento - Pesquisar', () => {
            cy.acaoFechamentoPesquisar()
        })

    })

    describe('Fechamneto Cadastro', () => {
        it.only('Novo', () => {
            cy.acaoFechamentoNovo()
            cy.get('label[id="comboEmpresa_label"]').click()
            cy.get('li[id="comboEmpresa_2"]').click()
            cy.get('label[id="comboContaBancaria_label"]').click()
            cy.get('li[id="comboContaBancaria_2"]').click()
            cy.get("#dVenc > div.ui-selectlistbox-listcontainer > ul > li:nth-child(1) > div > div").click()
            cy.get("#dVenc > div.ui-selectlistbox-listcontainer > ul > li:nth-child(3) > div > div").click()
        })

    })
})
