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
    const solicitarContratacao = require('../../../fixtures/solicitarContratacao.json')
    solicitarContratacao.forEach(solicitarContratacao => {
        it(`RH - Solicitar Contratação ${solicitarContratacao.cargoProposto}`, () => {
            cy.wait(500)
            cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
            cy.wait(450)
            cy.get('li[id="menuform:btnMenuRh"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuRh"]').click()
            cy.wait(500)
            cy.get('li[id="menuform:btnMenuSolicitaContrata"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="menuform:btnMenuSolicitaContrata"]').click()
            cy.wait(500)
            cy.get('button[id="pesquisarBotao"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="pesquisarBotao"]').click()
            cy.wait(500)
            cy.get('button[id="j_idt380"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="j_idt380"]').click()
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
            cy.get('label[id="tabSolicitacao:tipoContratacao_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="tabSolicitacao:tipoContratacao_label"]').click()
            cy.wait(500)
            cy.get('li[id="tabSolicitacao:tipoContratacao_4"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="tabSolicitacao:tipoContratacao_4"]').click()
            cy.wait(500)
            cy.get('label[id="tabSolicitacao:analistaLista_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="tabSolicitacao:analistaLista_label"]').click()
            cy.wait(500)
            cy.get('li[id="tabSolicitacao:analistaLista_21"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="tabSolicitacao:analistaLista_21"]').click()
            cy.wait(500)
            cy.get('label[id="tabSolicitacao:statusContratacao_label"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('label[id="tabSolicitacao:statusContratacao_label"]').click()
            cy.wait(500)
            cy.get('li[id="tabSolicitacao:statusContratacao_4"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[id="tabSolicitacao:statusContratacao_4"]').click()
            cy.wait(500)

            cy.get('input[id="tabSolicitacao:inputResponsavelEditar"]').type(solicitarContratacao.cargoProposto)
            cy.get('input[id="tabSolicitacao:valorPedido"]').type(solicitarContratacao.salarioProposto)
            cy.get('textarea[id="tabSolicitacao:j_idt454"]').type(solicitarContratacao.justificativa)

            cy.wait(500)
            cy.get('li[data-item-label="E-mail"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-item-label="E-mail"]').dblclick()
            cy.wait(500)
            cy.get('li[data-item-label="Computador"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-item-label="Computador"]').dblclick()
            cy.wait(500)
            cy.get('li[data-item-label="Notebook"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-item-label="Notebook"]').dblclick()
            cy.wait(500)
            cy.get('li[data-item-label="Fone de Ouvido"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-item-label="Fone de Ouvido"]').dblclick()
            cy.wait(500)
            cy.get('li[data-item-label="Agente VSPhone"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-item-label="Agente VSPhone"]').dblclick()
            cy.wait(500)
            cy.get('li[data-item-label="Computador"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('li[data-item-label="Computador"]').dblclick()
            cy.wait(500)
            cy.get('button[id="btnSalvar"]').should('be.visible').then(() => { cy.wait(500) });
            cy.get('button[id="btnSalvar"]').click()
            cy.wait(500)

        })

    })
    it.skip(`RH - Solicitar Contratação Consultar/editar`, () => {
        cy.get('li [id="menuform:btnMenuSolicitacao"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li [id="menuform:btnMenuSolicitacao"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuRh"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuRh"]').click()
        cy.wait(500)
        cy.get('li[id="menuform:btnMenuSolicitaContrata"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="menuform:btnMenuSolicitaContrata"]').click()
        cy.wait(500)

        cy.get("#tabelaSolicitacoes\\:0\\:j_idt410").should('be.visible').then(() => { cy.wait(500) });
        cy.get("#tabelaSolicitacoes\\:0\\:j_idt410").click()
        cy.wait(500)
        cy.wait(450)

        cy.get('li[id="j_idt560:j_idt568:selectNovoStatus_12"]').should('be.visible').then(() => { cy.wait(500) });
        cy.get('li[id="j_idt560:j_idt568:selectNovoStatus_12"]').click()
        cy.wait(500)

        const observacao = 'iuahfdjkasfhlsajfhsdjkfas dfjalksfhadf asdfhasdlj fh asdljfh asdjkl';

        cy.get('textarea[id="j_idt560:j_idt568:observacaoNovoStatus"]').type(observacao)

    })
})
