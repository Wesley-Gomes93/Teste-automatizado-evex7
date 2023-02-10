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
        it('Termos de Expansão - Pesquisar', () => {
            cy.acaoTermoExpansaoPesquisar()
        })

        it('Termos de Expansão - Limpar', () => {
            cy.acaoTermoExpansaoLimpar()
        })
    })

    describe('Cadastrar Novo Termo Expansão', () => {
        it('Termos de Expansão - Novo', () => {
            cy.acaoTermoExpansaoNovo()
            cy.get('input[id="gestor_input"]').should('be.visible')
            cy.get('input[id="gestor_input"]').click().type('123')
            cy.get('li[data-item-label="ADRIANA FRANCIELY JESUS DE PINHO - 049.151.231-70"]').should('be.visible').click()
            cy.get('button[id="btnSalvar"]').click()
        })
    })

    describe('', () => {
        it.only('Escolha Aleatória', () => {
            cy.acaoTermoExpansaoNovo()
            cy.get('input[id="gestor_input"]').as('gestorInput').click().type('123').then(() => {
                cy.get("#gestor_panel").as('gestorPanel').then(($gestorPanel) => {
                    let options = $gestorPanel.find('option').map((option) => option.innerText).get();
                    let randomIndex = Math.floor(Math.random() * options.length);
                    let randomOption = options[randomIndex];
                    cy.get('@gestorPanel').click(randomOption);
                });
            });
        });
    })

})