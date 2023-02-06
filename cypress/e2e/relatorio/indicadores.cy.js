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

    describe('Entrar na Tela', () => {
        it('Menu Relatorio - Indicadores ', () => {
            cy.acaoIndicadores()
            cy.wait(500)
        })
    })
    describe('Indicador Assistencia', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            
        })
    })
    describe('Indicador Cadastro', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            cy.get('a[href="#tabIndicadores:j_idt374"]').click()
        })
    })
    describe('Indicador CAT', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            cy.get('a[href="#tabIndicadores:j_idt384"]').click()
        })
    })
    describe('Indicador Comercial', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            cy.get('a[href="#tabIndicadores:j_idt403"]').click()
        })
    })
    describe('Indicador Evento', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            cy.get('a[href="#tabIndicadores:j_idt412"]').click()
        })
    })
    describe('Indicador Rastreador', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            cy.get('a[href="#tabIndicadores:j_idt441"]').click()
        })
    })
    describe('Indicador Financeiro', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            cy.get('a[href="#tabIndicadores:j_idt457"]').click()
        })
    })
    describe('Indicador Juridico', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            cy.get('a[href="#tabIndicadores:j_idt461"]').click()
        })
    })
    describe('Indicador T.I', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            cy.get('a[href="#tabIndicadores:j_idt468"]').click()
        })
    })
    describe('Indicador Indicadores Mensais', () => {
        it('Indicadores ', () => {
            cy.acaoIndicadores()
            cy.get('a[href="#tabIndicadores:j_idt471"]').click()
        })
    })

})