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

    context('Tela negativa veiculo', () => {
        it('Negativa veiculo - Pesquisar', () => {
            cy.acaoNegativaVeiculo()
        })
        it('Negativa veiculo - Limpar', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="limparPesquisa"]').click()

        })
    })

    context('Tela negativa veiculo - Menu - Açoes', () => {
        it('Negativa veiculo - Consultar solicitacao', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:j_idt467"]').click
        })
    })

    context('Tela negativa veiculo - Menu - Açoes', () => {
        it('Negativa veiculo - Editar veiculo', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:j_idt468"]').click()
        })
    })

    context('Tela negativa veiculo - Menu - Açoes', () => {
        it('Negativa veiculo - Troca de situacao negativa', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:j_idt471"]').click()
        })
    })

    context('Tela negativa veiculo - Menu - Açoes', () => {
        it('Negativa veiculo - Imprimir carta negativa', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:imprimirCartaNegativa"]').click()
        })
    })
    
    context('Tela negativa veiculo - Menu - Historico', () => {
        it('Negativa veiculo - Comunicaco', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnComunicacaoMensagem"]').click()
        })

        it('Negativa veiculo - Mensalidade', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnMensalidadeLog"]').click()
        })
        
        it('Negativa veiculo - Situações', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnSituacoesLog"]').click( )
        })
        
        it('Negativa veiculo - Propriedade', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnPropriedadeLog"]').click()
        })
        
        it('Negativa veiculo - Evento', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnSinistroLog"]').click()
        })

        it('Negativa veiculo - Desconto', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnDescontoLog"]').click()
        })
        
        it('Negativa veiculo - Alteracao dados', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnEventosAlteracaoLog"]').click()
        })
        
        it('Negativa veiculo - Atendimento', () => {
            cy.acaoNegativaVeiculo()
            cy.get('button[id="tabelaSolicitacao:0:historico_button"]').click()
            cy.get('a[id="tabelaSolicitacao:0:btnSolicitacaoAtendimento"]').click()
        })
    })
})