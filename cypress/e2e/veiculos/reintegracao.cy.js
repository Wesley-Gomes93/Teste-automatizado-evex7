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

    context('Tela reintegracao', ()=> {
        it('Reintegracao - Pesquisar', ()=>{
            cy.acaoReservaPreferencia()
        })
    })

    context('Tela reintegracao - Historico', {retries: 3 }, ()=> {
        it('Reintegracao - Historico - Mensalidade', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnMensalidadeLog"]').click()
            cy.wait(800)
            cy.get('a[href="#formModalMens:mensalidades:j_idt998"]').click()
            cy.wait(800)
        })

        it('Reintegracao - Historico - Situacao', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnSituacoesLog"]').click()
            cy.wait(800)
        })

        it('Reintegracao - Historico - Propriedade', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnPropriedadeLog"]').click()
            cy.wait(800)
        })

        it('Reintegracao - Historico - Evento', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnSinistroLog"]').click()
            cy.wait(800)
        })

        it('Reintegracao - Historico - Desconto', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnDescontoLog"]').click()
            cy.wait(800)
        })

        it('Reintegracao - Historico - Alteracao dados', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnEventosAlteracaoLog"]').click()
            cy.wait(800)
        })

        it('Reintegracao - Historico - Comunicacao', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnComunicacaoMensagem"]').click()
            cy.wait(800)
        })

        it('Reintegracao - Historico - Atendimentos', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnSolicitacaoAtendimento"]').click()
            cy.wait(800)
        })
    })
    
    context('Tela reintegracao - Ações', ()=> {
        it.only('Reintegracao - Ações - Visualizar', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:j_idt469_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:j_idt470"]').click()
            cy.wait(800)
            cy.get('a[href="#j_idt516:j_idt531"]').click()
            cy.wait(800)
            cy.get('a[href="#j_idt516:j_idt546"]').click()
            cy.wait(800)
            cy.get('button[id="j_idt493"]').click()
        })

        it.only('Reintegracao - Ações - Editar Veiculo', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:j_idt469_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:j_idt472"]').click()
            cy.wait(800)
            cy.get('button[id="btnCancelarVeiculo"]').click()
        })

        it.only('Reintegracao - Ações - Trocar Situação', ()=>{
            cy.acaoReservaPreferencia()
            cy.wait(3500)
            cy.get('button[id="tabelaSolicitacao:0:j_idt469_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:j_idt476"]').click()
            cy.wait(800)
        })
    })
})