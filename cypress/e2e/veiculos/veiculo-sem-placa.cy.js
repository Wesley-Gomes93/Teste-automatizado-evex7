///<reference types="cypress"/>
import 'cypress-file-upload';
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

    context('Tela veiculo sem placa informada', ()=>{
        it('Veiculo sem placa informada - Pesquisar', ()=> {
            cy.acaoVeiculoSemPlaca()
        })

        it('Veiculo sem placa informada - Pesquisar - AGV', ()=> {
            cy.acaoVeiculoSemPlaca()
            cy.get('label[id="empresa_label"]').click()
            cy.get('li[data-label="AGV"]').click()
        })

        it('Veiculo sem placa informada - Pesquisar - UNIVERSO', ()=> {
            cy.acaoVeiculoSemPlaca()
            cy.get('label[id="empresa_label"]').click()
            cy.get('li[data-label="Universo AGV"]').click()
        })
    })

    context('Tela veiculo sem placa informada', ()=> {
          it('Veiculo sem placa informada - Editar', ()=> {
            cy.acaoVeiculoSemPlaca()
            cy.get('label[id="empresa_label"]').click()
            cy.get('li[data-label="AGV"]').click()
            cy.get('button[id="tabelaVeiculo:0:j_idt441"]').click()
        })
    })
})