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

    context('Tela consultar veiculo', () => {
        it('Consultar veiculo', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
        })
        
        it('Registrar contato', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:btnContato"]').click()
            cy.wait(900)
        })

        it('Vistoria | Docs', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:j_idt438"]').click()
            cy.wait(900)
        })

        it('Editar', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:j_idt442"]').click()
            cy.wait(900)
        })

        it('Aplicar questionario', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:btnAplicarQuestionario"]').click()
            cy.wait(900)
        })

        it('Acoes - Historico veiculo', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:dynaButton"]').click()
            cy.get('a[id="tabelaVeiculo:0:btnHistorico"]').click()
            cy.wait(900)
        })
        
        it('Acoes - Detalhar mensalidade', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:dynaButton"]').click()
            cy.get("#tabelaVeiculo\\:0\\:j_idt452 > ul > li:nth-child(2) > a").click()
            cy.wait(900)
        })
        
        it('Acoes - Veiculo - Eviar p/ aprovacai', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:dynaButton"]').click()
            cy.get(':nth-child(3) > .ui-submenu-link').click()
            cy.get("#tabelaVeiculo\\:0\\:j_idt452 > ul > li:nth-child(2) > a").click()
            cy.wait(900)
        })
        
        it.skip('Acoes - Veiculo - Enviar Sms', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:dynaButton"]').click()
            cy.get(':nth-child(3) > .ui-submenu-link').click()
            cy.get('button[id="tabelaVeiculo:0:btnEnviarSms"]').contains("Enviar SMS").click()
            cy.wait(900)
        })
        
        it.skip('Acoes - Veiculo - Ativar veiculo', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:dynaButton"]').click()
            cy.get(':nth-child(3) > .ui-submenu-link').click()
            cy.get('button[id="tabelaVeiculo:0:ativarVeiculo"]').click()
            cy.wait(900)
        })
        
        it.only('Acoes - Assinatura - Enviar assinatura contrato', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:dynaButton"]').click()
            cy.wait(900)
        })
        
        it('Acoes - Assinatura - enviar assinatura cancelamento', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:dynaButton"]').click()
            cy.wait(900)
        })
        
        it('Acoes - Assinatura - Enviar compravante residencia', () => {
            cy.acaoConsultarVeiculo()
            cy.get('input[id="autocompletevar_input"]').click()
            cy.get('input[id="autocompletevar_input"]').type('HKD4493')
            cy.get('li[data-item-label="HKD4493 (HKD4E93) - GILBERT VINICIUS FERREIRA DOS SANTOS - 101.441.756-22 - Ativo"]').click()
            cy.get('button[id="tabelaVeiculo:0:dynaButton"]').click()
            cy.wait(900)
        })
    })

})