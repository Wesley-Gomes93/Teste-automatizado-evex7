///<reference types="cypress"/>
import 'cypress-file-upload';

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

    
    context('', () => {
        it('colocando imgaem', () => {
            cy.get('li[id="menuform:btnMenuEventos"]').click()
            cy.get('li[id="menuform:btnMenuControleEventos"]').click()
            cy.get('button[id="incluirSinistro"]').click()
            cy.get('button[id="btnCliente"]').click()
            cy.get('input[id="placaCliente"]').type('FFA2645')
            cy.get('button[id="btnPesquisar"]').click()
            cy.wait(3500)
            cy.get('label[id="motivoSinistro_label"]').click()
            cy.get('li[data-label="Colisão"]').click()
            //linha abaxio é para anexar uma imagem 
            cy.get('button[id="j_idt4977"]')
            .contains("Incluir arquivo")
            .click()
            
            cy.get('label[id="listTipoArquivoEditar_label"]').click()
            cy.get('li[data-label="CNH"]').click()

            cy.get('#fileUploadEditar_label')
            .contains("Selecione o Arquivo")
            .click()
            cy.get('[type="file"]')
            .attachFile("alex.png")
        })
    })
})