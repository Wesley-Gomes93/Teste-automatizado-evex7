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

    // context('', () => {
    //     // const filePath = '../fixtures/alex.png'
    //     it('colocando imgaem', () => {
    //         cy.get('li[id="menuform:btnMenuEventos"]').click()
    //         cy.get('li[id="menuform:btnMenuControleEventos"]').click()
    //         cy.get('button[id="incluirSinistro"]').click()
    //         cy.get('button[id="btnCliente"]').click()
    //         cy.get('input[id="placaCliente"]').type('FFA2645')
    //         cy.get('button[id="btnPesquisar"]').click()
    //         cy.wait(3500)
    //         cy.get('#j_idt4976 > .ui-button-text').click()
    //         cy.get('label[id="listTipoArquivoEditar_label"]').click()
    //         cy.get('li[data-label="CRLV (Obrigatório)"]').click()
    //         cy.get('#fileUploadEditar_label').click()
    //         cy.get('#fileUploadEditar_label').selectFile('../image/alex.png', {force:true})
    //     })
    // })

    context('', () => {
        it('colocando imgaem', () => {
            cy.get('li[id="menuform:btnMenuEventos"]').click()
            cy.get('li[id="menuform:btnMenuControleEventos"]').click()
            cy.get('button[id="incluirSinistro"]').click()
            cy.get('button[id="btnCliente"]').click()
            cy.get('input[id="placaCliente"]').type('FFA2645')
            cy.get('button[id="btnPesquisar"]').click()
            cy.wait(3500)
            cy.get('#j_idt4976 > .ui-button-text').click()
            cy.get('label[id="listTipoArquivoEditar_label"]').click()
            cy.get('li[data-label="CRLV (Obrigatório)"]').click()
            cy.get('#fileUploadEditar_label').click()
            cy.readFile('images/alex.png', null).then((file) => {
                expect(Cypress.Buffer.isBuffer(file)).to.be.true
                // Do something with `file` Buffer here
              })

        })
    })
})