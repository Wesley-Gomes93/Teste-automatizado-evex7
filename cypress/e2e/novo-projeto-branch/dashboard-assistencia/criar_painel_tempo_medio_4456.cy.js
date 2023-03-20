const moment = require("moment/moment");
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
    
    context('Dashboard', () => {

        const currentDate = moment().format("DD/MM/YYYY");
        const currentSubtractDate = moment().subtract(90, 'days').format('DD/MM/YYYY');
        

        it('Teste automatizado tela Dashboard', () => {
            cy.acaoPesquisarDashboard()
        })

        it.only('Teste automatizado tela Dashboard - Periodo ', () => {
            cy.acaoPesquisarDashboard()
            cy.get('label[id="selecionePeriodo_label"]').click()
            cy.get('li[data-label="Período"]').click()
            cy.get('input[id="dataInicialFiltro_input"]').type(currentSubtractDate)
            cy.get('input[id="dataFinalFiltro_input"]').should('not.be.disabled')
            cy.get('input[id="dataFinalFiltro_input"]').click()
            cy.get('input[id="dataFinalFiltro_input"]').should('not.be.disabled').click().type(currentDate)
            cy.get('button[id="pesquisar"]').click()
        })

        it('Teste automatizado tela Dashboard - Mes Anterior', () => {
            cy.acaoPesquisarDashboard()
            cy.get('label[id="selecionePeriodo_label"]').click()
            cy.get('li[data-label="Mês Anterior"]').click()
            cy.get('button[id="pesquisar"]').click()
        })

        it('Teste automatizado tela Dashboard - Mes Atual', () => {
            cy.acaoPesquisarDashboard()
            cy.get('label[id="selecionePeriodo_label"]').click()
            cy.get('li[data-label="Mês Atual"]').click()
            cy.get('button[id="pesquisar"]').click()
        })
    })
})