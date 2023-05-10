///<reference types="cypress"/>
import "cypress-file-upload";

describe("EVEX7 test", () => {
    beforeEach(() => {
        // funcao pra ser inicializada sempre antes de todos os testes,
        cy.clearLocalStorage();
        cy.viewport(1440, 900);
        cy.visit("/");
        cy.get("#loginForm h4").should("have.text", "Seja bem-vindo ao EVEX7!");
        cy.login(Cypress.env("loginInpt"), Cypress.env("pwd"));
        cy.url().should("eq", "http://localhost:8080/sav-web-1.0/inicio.faces");
        cy.get(".menu-button > .pi")
            .should("be.visible")
            .then(() => {
                cy.wait(500);
            });
        cy.get(".menu-button > .pi").click();
        cy.wait(500);
    });

    context('Tela Negativa Automatica', () => {
        it('Negativa automatica - Pesquisar', () => {
            cy.acaoNegativaAutomatica()
            cy.get('input[id="placaChassi"]').type('FKU3457')
            cy.get('button[id="pesquisarBotao"]').click()
        })
        
        it('Negativa automatica - Pesquisar', () => {
            cy.acaoNegativaAutomatica()
            cy.get('input[id="placaChassi"]').type('FKU3457')
            cy.get('button[id="pesquisarBotao"]').click()
        })

        it('Negativa automatica - Limpar', () => {
            cy.acaoNegativaAutomatica()
            cy.get('button[id="j_idt379"]').click()
        })

        it('Negativa automatica - Cadastrar', () => {
            cy.acaoNegativaAutomatica()
            cy.get('button[id="j_idt378"]').click()
            cy.get('input[id="autocompletevar_input"]').click().type('FKU3457')
            cy.get('li[data-item-label="FKU3457 (FKU3E57) - ADALBERTO PINHEIRO SOUSA  - 342.024.068-69 - Ativo"]').click()
            cy.get('button[id="btnSalvar"]').click()
        })
    })

})
