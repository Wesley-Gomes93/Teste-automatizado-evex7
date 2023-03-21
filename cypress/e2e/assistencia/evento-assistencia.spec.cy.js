///<reference types="cypress"/>

describe('EVEX7 test', () => {
    beforeEach(() => {
        // funcao pra ser inicializada sempre antes de todos os testes, 
        cy.clearLocalStorage()
        cy.viewport(1440, 900);
        cy.visit('/')
        cy.get('#loginForm h4').should('have.text', 'Seja bem-vindo ao EVEX7!')
        cy.login(Cypress.env('loginInpt'), Cypress.env('pwd'))
        cy.url().should('eq', 'http://localhost:8080/sav-web-1.0/inicio.faces')
        cy.wait(200)
        cy.get('.menu-button').should('be.visible').click()
    })

    const eventoAssistencia = require('../../fixtures/eventoAssistencia.json')
    eventoAssistencia.forEach(eventoAssistencia => {
        it('Menu Assistência - Evento Assistência', () => {
            cy.acaoEventoAssistencia()
            cy.get('button[id="incluir"]').should('be.visible')
            cy.get('button[id="incluir"]').click()            
            cy.get('input[id="veiculo_input"]').should('be.visible')
            cy.get('input[id="veiculo_input"]').click()
            cy.get('input[id="veiculo_input"]').type(eventoAssistencia.placaVeiculo)
            cy.get('li[role="option"]').click()
            cy.get('button[id="btnVoltarPesquisa"]').click()            
            cy.get('a[href="#tabDadosAssistencia:tabVeiculo"]').should('be.visible')
            cy.get('a[href="#tabDadosAssistencia:tabVeiculo"]').click()            
            cy.get('a[href="#tabDadosAssistencia:tabDadosAberturaAssistencia"]').should('be.visible')
            cy.get('a[href="#tabDadosAssistencia:tabDadosAberturaAssistencia"]').click()
            cy.get('input[id="tabDadosAssistencia:nomeSolicitante"]').type(eventoAssistencia.nomeSolicitante)
            cy.get('input[id="tabDadosAssistencia:foneSolicitante"]').type(eventoAssistencia.foneSolicitante)
            cy.get('input[id="tabDadosAssistencia:qtdePessoasVeiculo"]').type('4')            
            cy.get('label[id="tabDadosAssistencia:motivoAssistencia_label"]').should('be.visible')
            cy.get('label[id="tabDadosAssistencia:motivoAssistencia_label"]').click()            
            cy.get('li[data-label="AVISO DE FURTO/ROUBO RECUPERADO COM REMOÇÃO"]').should('be.visible')
            cy.get('li[data-label="AVISO DE FURTO/ROUBO RECUPERADO COM REMOÇÃO"]').click()            
            cy.get("#tabDadosAssistencia\\:selectOneReparo > div.ui-button.ui-widget.ui-state-default.ui-button-text-only.ui-corner-left > span").should('be.visible')
            cy.get("#tabDadosAssistencia\\:selectOneReparo > div.ui-button.ui-widget.ui-state-default.ui-button-text-only.ui-corner-left > span").click()
            cy.get("#tabDadosAssistencia\\:selectOneProcessoRecuperacao > div:nth-child(2) > span").should('be.visible')
            cy.get("#tabDadosAssistencia\\:selectOneProcessoRecuperacao > div:nth-child(2) > span").click()            
            cy.get('label[for="tabDadosAssistencia:j_idt958:0:j_idt963:2"]').should('be.visible')
            cy.get('label[for="tabDadosAssistencia:j_idt958:0:j_idt963:2"]').click()
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:1:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:2:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:3:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:4:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:5:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:6:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:7:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:9:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:10:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:11:j_idt976"]').type(eventoAssistencia.pergunta)
            cy.get('textarea[id="tabDadosAssistencia:j_idt958:12:j_idt976"]').type(eventoAssistencia.pergunta)            
            cy.get("#tabDadosAssistencia\\:j_idt958\\:8\\:j_idt963 > tbody > tr > td:nth-child(1) > div").should('be.visible')
            cy.get("#tabDadosAssistencia\\:j_idt958\\:8\\:j_idt963 > tbody > tr > td:nth-child(1) > div").click()            
            cy.get("#tabDadosAssistencia\\:j_idt958\\:13\\:j_idt963 > tbody > tr > td > div").should('be.visible')
            cy.get("#tabDadosAssistencia\\:j_idt958\\:13\\:j_idt963 > tbody > tr > td > div").click()            
            cy.get('li[data-item-label="REBOQUE PESADO - LANÇA"]').scrollIntoView({ duration: 250 }).should('be.visible')
            cy.get('li[data-item-label="REBOQUE PESADO - LANÇA"]').dblclick()            
            cy.get('li[data-item-label="REBOQUE UTILITÁRIO 400 KM TOTAIS"]').should('be.visible')
            cy.get('li[data-item-label="REBOQUE UTILITÁRIO 400 KM TOTAIS"]').dblclick()            
            cy.get('li[data-item-label="REBOQUE EXTRA PESADO - PLATAFORMA 400 KM TOTAIS"]').should('be.visible')
            cy.get('li[data-item-label="REBOQUE EXTRA PESADO - PLATAFORMA 400 KM TOTAIS"]').dblclick()            
            cy.get('li[data-item-label="CHAVEIRO - ABERTURA DE VEÍCULOS"]').scrollIntoView({ duration: 250 }).should('be.visible')
            cy.get('li[data-item-label="CHAVEIRO - ABERTURA DE VEÍCULOS"]').dblclick()            
            cy.get('a[href="#tabDadosAssistencia:tabLocalizacao"]').scrollIntoView({ duration: 250 }).should('be.visible')
            cy.get('a[href="#tabDadosAssistencia:tabLocalizacao"]').click()            
            cy.get("#tabDadosAssistencia\\:remocaoVeiculo > div.ui-button.ui-widget.ui-state-default.ui-button-text-only.ui-corner-left").scrollIntoView({ duration: 250 }).should('be.visible')
            cy.get("#tabDadosAssistencia\\:remocaoVeiculo > div.ui-button.ui-widget.ui-state-default.ui-button-text-only.ui-corner-left").click()            
            cy.get("#tabDadosAssistencia\\:destinoDefinido > div.ui-button.ui-widget.ui-state-default.ui-button-text-only.ui-corner-right").scrollIntoView({ duration: 250 }).should('be.visible')
            cy.get("#tabDadosAssistencia\\:destinoDefinido > div.ui-button.ui-widget.ui-state-default.ui-button-text-only.ui-corner-right").click()
            cy.get('input[id="tabDadosAssistencia:cepOrigem"]').type(eventoAssistencia.cep).click()
            cy.get('input[id="tabDadosAssistencia:autoCompleteLogradouroOrigem_input"]').click()            
            cy.wait(500).get('input[id="tabDadosAssistencia:numeroEnderecoOrigem"]').type(eventoAssistencia.numero)
            cy.get('button[id="tabDadosAssistencia:btnSalvar"]').should('be.visible')
            cy.get('button[id="tabDadosAssistencia:btnSalvar"]').click()
        })
    })
})
