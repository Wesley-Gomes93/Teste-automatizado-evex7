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

    context('Tela Controle de Ticket', () => {
        it('Controle de ticket - Pesquisar', () => {
            cy.acaoControleTicketPerformance()
            cy.get('button[id="pesquisarBotao"]').click()
        })

        it('Controle de ticket - Limpar', () => {
            cy.acaoControleTicketPerformance()
            cy.get('button[name="limparBotao"]').click()
        })
    })

    context('Tela Controle de Ticket', () => {
        it.only('Controle de ticket - Pesquisar', () => {
            cy.acaoControleTicketPerformance()
            cy.get('button[id="j_idt419"]').click()
            cy.get('input[id="tabTicket:inputSolicitanteEditar_input"]').type('Marcos Haroldo')
            cy.get('li[data-item-label="MARCOS HAROLDO COSTA JUNIOR"]').click()
            cy.get('label[id="tabTicket:departamentoEditar_label"]').click()
            cy.get('li[data-label="SISTEMAS"]').click()
            cy.get('label[id="tabTicket:projetoEditar_label"]').click()
            cy.get('li[id="tabTicket:projetoEditar_3"]').click()
            cy.get('label[id="tabTicket:destino_label"]').click()
            cy.get('li[id="tabTicket:destino_20"]').click()
            cy.get('label[id="tabTicket:tipoDemanda_label"]').click()
            cy.get('li[data-label="Projetos"]').click()
            cy.get('input[id="tabTicket:assuntoEditar"]').type('TESTE CYPRESS')
            cy.get('textarea[id="tabTicket:descricaoTicketAlterar"]').type('cypress teste')
            cy.get('button[id="btnSalvar"]').click()
        })
    })

})
