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

    describe('Ações Basicas', () => {
        it('Promoção - Pesquisar', () => {
            cy.acaoPesquisarPromocao()
        })
        it('Promoção - Limpar', () => {
            cy.acaoLimparPromocao()
        })
    })

    describe('Cadastrar nova Promocao', () => {
        it.only('Promoção - Incluir Promoção ', () => {
            cy.acaoIncluirPromocao()
            cy.get('input[id="nomePromocao"]').should('be.visible').type('Cypress.io Teste')
            cy.get('input[id="dtInicioPromocao"]').should('be.visible').type('08022023')
            cy.get('input[id="dtFimPromocao"]').should('be.visible').type('13022023')
            cy.get('input[id="dtInicioPromocaoDesconto"]').should('be.visible').type('10022023')
            cy.get('input[id="dtFimPromocaoDesconto"]').should('be.visible').type('15022023')
            cy.get('label[id="tipoFaixa_label"]').click()
            cy.get('li[data-label="SUV SEDAN - ROUBO E FURTO"]').should('be.visible').click()
            cy.get('label[id="faixaSelect_label"]').click()
            cy.get('li[data-label="10.00"]').should('be.visible').click()
            cy.get('button[id="btnSalvar"]')
        })
    })


})