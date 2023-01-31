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
    const solicitarDesligamento = require('../../../fixtures/solicitarDesligamento.json')
    solicitarDesligamento.forEach(solicitarDesligamento => {


        it(`RH - Solicitar Desligamento ${solicitarDesligamento.nome}`, () => {

            cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
            cy.wait(500)
            cy.get('li[id="menuform:btnMenuRh"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuRh"]').click()
            cy.wait(500)
            cy.get('li[id="menuform:btnMenuSolicitaDesliga"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuSolicitaDesliga"]').click()
            cy.wait(500)
            cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(500)
            cy.get('button[id="j_idt380"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="j_idt380"]').click()
            cy.wait(500)
            cy.get('input[id="tabSolicitacao:inputFuncionarioDesligado"]').type(solicitarDesligamento.nome)
            cy.get('input[id="tabSolicitacao:inputResponsavelEditar"]').type(solicitarDesligamento.areaAtuacao)
            cy.get('textarea[id="tabSolicitacao:j_idt474"]').type(solicitarDesligamento.motivo)
            cy.wait(500)
            cy.get('label[id="tabSolicitacao:setorEditar_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="tabSolicitacao:setorEditar_label"]').click()
            cy.wait(500)
            cy.get('li[id="tabSolicitacao:setorEditar_19"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="tabSolicitacao:setorEditar_19"]').click()
            cy.wait(500)
            cy.get('label[id="tabSolicitacao:empresaLista_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="tabSolicitacao:empresaLista_label"]').click()
            cy.wait(500)
            cy.get('li[id="tabSolicitacao:empresaLista_6"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="tabSolicitacao:empresaLista_6"]').click()
            cy.wait(500)
            cy.get('label[id="tabSolicitacao:analistaLista_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="tabSolicitacao:analistaLista_label"]').click()
            cy.wait(500)
            cy.get('li[data-label="CAMILA LOPES DE SOUZA"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-label="CAMILA LOPES DE SOUZA"]').click()
            cy.wait(500)
            cy.get('label[id="tabSolicitacao:statusSolicitacaoDesligamento_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="tabSolicitacao:statusSolicitacaoDesligamento_label"]').click()
            cy.wait(500)
            cy.get('li[id="tabSolicitacao:statusSolicitacaoDesligamento_3"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="tabSolicitacao:statusSolicitacaoDesligamento_3"]').click()
            cy.wait(500)
            cy.get('label[id="tabSolicitacao:funcaoFuncionario_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="tabSolicitacao:funcaoFuncionario_label"]').click()
            cy.wait(500)
            cy.get('li[id="tabSolicitacao:funcaoFuncionario_59"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="tabSolicitacao:funcaoFuncionario_59"]').click()
            cy.wait(500)
            cy.get('label[id="tabSolicitacao:tipoContratacao_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="tabSolicitacao:tipoContratacao_label"]').click()
            cy.wait(500)
            cy.get('li[id="tabSolicitacao:tipoContratacao_4"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="tabSolicitacao:tipoContratacao_4"]').click()
            cy.wait(500)
            cy.get("#tabSolicitacao\\:j_idt481 > div.ui-button.ui-widget.ui-state-default.ui-button-text-only.ui-corner-left > span").click()
            cy.get('button[id="btnSalvar"]').click()
        })

        it(`RH - Solicitar Desligamento - ${solicitarDesligamento.nome} - Menu Ações`, () => {
            cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
            cy.wait(500)
            cy.wait(450)
            cy.get('li[id="menuform:btnMenuRh"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuRh"]').click()
            cy.wait(500)
            cy.wait(450)
            cy.get('li[id="menuform:btnMenuSolicitaDesliga"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuSolicitaDesliga"]').click()
            cy.wait(500)
            cy.wait(450)
            cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(500)
    
            cy.wait(450)
            cy.get('button[id="tabelaSolicitacoes:0:j_idt411"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="tabelaSolicitacoes:0:j_idt411"]').click()
            cy.wait(500)
            cy.wait(450)
            cy.get('button[id="btnCancelar"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="btnCancelar"]').click()
            cy.wait(500)
    
            cy.wait(450)
            cy.get('button[id="tabelaSolicitacoes:0:j_idt410"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="tabelaSolicitacoes:0:j_idt410"]').click()
            cy.wait(500)
            cy.wait(450)
            cy.get('button[id="btnCancelar"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="btnCancelar"]').click()
            cy.wait(500)
    
            cy.wait(450)
            cy.get('button[id="tabelaSolicitacoes:0:j_idt412"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="tabelaSolicitacoes:0:j_idt412"]').click()
            cy.wait(500)
            cy.wait(450)
            cy.get('label[id="j_idt581:j_idt589:idNovoStatusDesligamento_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="j_idt581:j_idt589:idNovoStatusDesligamento_label"]').click()
            cy.wait(500)
            cy.get('li[id="j_idt581:j_idt589:idNovoStatusDesligamento_1"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="j_idt581:j_idt589:idNovoStatusDesligamento_1"]').click()
            cy.wait(500)
    
            cy.get('textarea[id="j_idt581:j_idt589:j_idt600"]').type('lidfajsdfaldshi adsufhasduif haiudsf asdf oag1 34 123 4123 4 132 4123 4 1234 12')
    
            cy.wait(450)
            cy.get('button[id="j_idt581:btnsalvarTrocaSituacao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="j_idt581:btnsalvarTrocaSituacao"]').click()
            cy.wait(500)
    
            cy.wait(450)
            cy.get('button[id="limparBotao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="limparBotao"]').click()
            cy.wait(500)
    
        })
    })
})