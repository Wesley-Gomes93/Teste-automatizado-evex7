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

    describe('Mensagem de boas vindas', () => {
        it('Registrar Contato - Mensagem de boas vindas', () => {
            cy.get('li[id="menuform:btnMenuVeiculo"]').click()
            cy.get('li[id="menuform:btnMenuAplicarQuestionario"]').click()
            cy.get('input[id="tabs:placa"]').type('MYG6337')
            cy.get('input[id="tabs:dataInicial_input"]').click().clear()
            cy.get('input[id="tabs:dataInicial_input"]').click().type('12032020')
            cy.get("#tabs\\:dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(3) > td:nth-child(4) > a").click()
            cy.get('label[id="tabs:situacoesList_label"]').click()
            cy.get('li[data-label="Ativo"]').click()
            cy.get('button[id="tabs:pesquisarVeiculo"]').click()
            cy.wait(900)
            cy.get('button[id="tabs:tabelaVeiculo:0:outrasAcoes_button"]').click()
            cy.wait(900)
            cy.get('a[id="tabs:tabelaVeiculo:0:registrarContato"]').click()
            cy.wait(900)
            cy.get(':nth-child(5) > .p-md-9 > [href="https://agente.ezchat.com.br/chats/add?category=5fd219e232d10b7ce0b36851&autoSign=true&channel=whatsappZAPI%7C3923640ADB18A04CA2D6063733D79699&sender=31996602454&message=Ol%C3%A1+AILTON+ALVES+%21%0A%0ASeja+muito+bem+vindo+%C3%A0+Associa%C3%A7%C3%A3o+Gest%C3%A3o+Veicular+Universo%0A%0APara+garantir+que+sua+jornada+conosco+seja+um+sucesso%2C+solicitamos+gentilmente+confirmar+se+o+consultor+cadastrou+seus+principais+dados+certinhos%3A%0A%0APlaca%3A+MYG6D37+-+RRO1A63%0ANome%3A+AILTON+ALVES+%0AEndere%C3%A7o%3A+AV+Marechal+Rondon+%2C+60+Setor+Leste++%3Cbr%2F%3E+Centro+%2C+Colider%2C+MT%2C+CEP%3A+78.500-000%0AE-mail%3A+wesleygonzaga%40gmail.com%0AMensalidade+Estimada%3A+R%24+1.507%2C45%0AData+de+Vencimento%3A+10%0A%0AE+por+falar+em+consultor%2C+ele+tirou+todas+as+suas+d%C3%BAvidas%3F+Voc%C3%AA+pode+aproveitar+e+perguntar+o+que+quiser%2C+bem+como+dar+uma+nota+de+0+a+10+referente+ao+atendimento+do+seu+consultor+%28a%29.%3F%0AAguardamos+sua+resposta%21%0AAssist%C3%AAncia+24H+0800+222+8000%0Acontato%40universoagv.com.br%0A%2831%29+3010-4444+-+Op%C3%A7%C3%A3o+4"] > .fa').click({ multiple: true })
        })
    })
        
})