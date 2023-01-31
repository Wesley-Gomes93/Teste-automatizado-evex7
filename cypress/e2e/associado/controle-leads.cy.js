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

    context('Ações Basicas', () => {

        it('Pesquisar Lead', () => {
            cy.acaoPesquisarLead()
        })

        it('Limpar Lead', () => {
            cy.acaoLimparLead()
        })

        it('Pesquisar Lead Sem Responsavel', () => {
            cy.acaoPesquisarLeadSemResponsavel()
        })

        it('Pesquisar Lead em Aberto', () => {
            cy.acaoPesquisarLeadAberto()
        })

    })

    context('Cadastrar um Novo Lead', () => {
        // const controleLeads = require('../../fixtures/controleLeads.json')
        // controleLeads.forEach(controleLeads => {
        //     it(`Controle Leads - ${controleLeads.nome}`, () => {    
        //         cy.acaoPesquisarLead()
    
        //         cy.wait(450)
        //         cy.get('button[id="novo"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[id="novo"]').click()
        //         cy.wait(450)
    
        //         cy.wait(1750)
        //         cy.get('input[id="acompanhamentoContatoForm:j_idt490:nome"]').type(controleLeads.nome)
        //         cy.get('input[id="acompanhamentoContatoForm:j_idt490:placa"]').type(controleLeads.placa)
        //         cy.get('input[id="acompanhamentoContatoForm:j_idt490:chassi"]').type(controleLeads.chassi)
        //         cy.get('input[id="acompanhamentoContatoForm:j_idt490:email"]').type(controleLeads.email)
        //         cy.get('input[id="acompanhamentoContatoForm:j_idt490:fone1"]').type(controleLeads.telefone)
        //         cy.get('input[id="acompanhamentoContatoForm:j_idt490:dataRetorno_input"]').type(controleLeads.dataRetorno)
        //         cy.get('input[id="acompanhamentoContatoForm:j_idt490:fone2"]').type(controleLeads.telefone2)
    
        //         cy.get('label[id="acompanhamentoContatoForm:j_idt490:estadoCombo_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="acompanhamentoContatoForm:j_idt490:estadoCombo_label"]').click()
        //         cy.wait(450)
        //         cy.get('ul li[data-label="Minas Gerais"]').scrollIntoView({ duration: 50 }).should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('ul li[data-label="Minas Gerais"]').click()
        //         cy.wait(450)
    
        //         cy.get('label[id="acompanhamentoContatoForm:j_idt490:cidadeCombo_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="acompanhamentoContatoForm:j_idt490:cidadeCombo_label"]').click()
        //         cy.wait(450)
        //         cy.get('li[data-label="Belo Horizonte"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[data-label="Belo Horizonte"]').click()
        //         cy.wait(450)
    
        //         cy.get('label[id="acompanhamentoContatoForm:j_idt490:tipoLead_label"]').scrollIntoView({ duration: 500 }).should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="acompanhamentoContatoForm:j_idt490:tipoLead_label"]').click()
        //         cy.get('li[data-label="Geniuzz"]').click()
        //         cy.wait(450)
    
        //         cy.get('label[id="acompanhamentoContatoForm:j_idt490:slteste_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="acompanhamentoContatoForm:j_idt490:slteste_label"]').click()
        //         cy.wait(450)
        //         cy.get('li[data-label="Masculino"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[data-label="Masculino"]').click()
        //         cy.wait(450)
    
        //         cy.wait(450)
        //         cy.get('button[id="acompanhamentoContatoForm:j_idt490:gerarLead"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[id="acompanhamentoContatoForm:j_idt490:gerarLead"]').click()
        //     })
        // })

    })

    context('Menu Ações', () => {
        it('Controle de Leads - Iniciar  Atendimento', () => {
            cy.acaoIniciarAtendimentoLead()
        })
        it.only('Controle de Leads - Atribuir/Trocar Atendente', () => {
            cy.acaoIniciarAtribuirAtendente()
        })
        it.only('Controle de Leads - Indicar novo Lead', () => {
            cy.acaoIndicarNovoLead()
        })

    })





})