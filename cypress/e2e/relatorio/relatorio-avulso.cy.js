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

    describe('Entrar na Tela - Relatorio Avulso', () => {
        it('Menu Relatorio -  Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(800)
        })
    })

    describe(' Relatorio Avulso Assistencia', () => {
        it(' Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(500)            
        })
    })

    describe(' Relatorio Avulso Cadastro', () => {
        it(' Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(500)
            cy.get('a[href="#tabRelatorios:j_idt368"]').click()
            cy.wait(800)
        })
    })

    describe(' Relatorio Avulso CAT', () => {
        it(' Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(500)
            cy.get('a[href="#tabRelatorios:j_idt371"]').click()
            cy.wait(800)
        })
    })

    describe(' Relatorio Avulso Comercial', () => {
        it(' Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(500)
            cy.get('a[href="#tabRelatorios:j_idt373"]').click()
            cy.wait(800)
        })
    })

    describe(' Relatorio Avulso Evento', () => {
        it(' Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(500)
            cy.get('a[href="#tabRelatorios:j_idt376"]').click()
            cy.wait(800)
        })
    })
     
    describe(' Relatorio Avulso Juridico', () => {
        it(' Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(500)
            cy.get('a[href="#tabRelatorios:j_idt378"]').click()
            cy.wait(800)
        })
    })   
     
    describe(' Relatorio Avulso Rastreador', () => {
        it(' Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(500)
            cy.get('a[href="#tabRelatorios:j_idt381"]').click()
            cy.wait(800)
        })
    })
     
    describe(' Relatorio Avulso Financeiro', () => {
        it(' Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(500)
            cy.get('a[href="#tabRelatorios:j_idt383"]').click()
            cy.wait(800)
        })
    })
     
    describe(' Relatorio Avulso Suporte', () => {
        it(' Relatorio Avulso ', () => {
            cy.acaoRelatorioAvulso()
            cy.wait(500)
            cy.get('a[href="#tabRelatorios:j_idt389"]').click()
            cy.wait(800)
        })
    })
})