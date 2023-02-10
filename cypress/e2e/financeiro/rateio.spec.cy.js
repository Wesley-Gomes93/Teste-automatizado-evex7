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
        it('Pesquisar um Rateio', () => {
            cy.acaoPesquisarRateio()
        })

        it('Editar um Rateio', () => {
            cy.acaoEditarRateio()
            cy.get('input[id="mes"]').should('be.visible')
            cy.get('input[id="mes"]').clear().type('10')
            cy.get('input[id="ano"]').should('be.visible')
            cy.get('input[id="ano"]').clear().type('2035')
            cy.get('input[id="valor"]').should('be.visible')
            cy.get('input[id="valor"]').clear().type('2')
            cy.get('button[id="btnSalvarLancamento"]').should('be.visible')
            cy.get('button[id="btnSalvarLancamento"]')
        })
    })

    describe('Cadastrar Novo Rateio', () => {
        it('Criar um Rateio', () => {
            cy.acaoCadastrarRateio()
            cy.get('input[id="mes"]').should('be.visible')
            cy.get('input[id="mes"]').clear().type('12')
            cy.get('input[id="ano"]').should('be.visible')
            cy.get('input[id="ano"]').clear().type('2035')
            cy.get('input[id="valor"]').should('be.visible')
            cy.get('input[id="valor"]').clear().type('5')
            cy.get('button[id="btnSalvarLancamento"]').should('be.visible')
            cy.get('button[id="btnSalvarLancamento"]').click()
        })
    })
})