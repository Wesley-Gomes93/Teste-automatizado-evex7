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
    })

    context('Ações Basica', () => {
        it('Cadastro - Consultor - Gerenciar Consultores - Pesquisar', () => {
            cy.acaoGerenciarConsultoresPesquisar()
        })

        it('Cadastro - Consultor - Gerenciar Consultores - Limpar', () => {
            cy.acaoGerenciarConsultoresPesquisar()
        })
    })

    context('Cadastrar Consultores', () => {
        // const gerenciarConsultores = require('../../../../fixtures/gerenciarConsultores.json')
        // gerenciarConsultores.forEach(gerenciarConsultores => {

        //     it('Test Menu Cadastro - Consultores(Gerenciar consultores)', () => {
        //         cy.get('.menu-button > .pi').click()
        //         cy.wait(450)

        //         cy.get('li[id="menuform:btnMenuCadastro"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[id="menuform:btnMenuCadastro"]').click()

        //         cy.get('li[id="menuform:btnMenuConsultores"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[id="menuform:btnMenuConsultores"]').click();

        //         cy.get('li[id="menuform:btnMenuGerenciarConsultores"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[id="menuform:btnMenuGerenciarConsultores"]').click();
        //         cy.url().should('eq', 'http://localhost:8080/sav-web-1.0/paginas/consultor/consultor.faces')


        //         cy.get('button[id="pesquisarConsultor"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[id="pesquisarConsultor"]').click();
        //         cy.wait(1750)

        //         cy.wait(250)
        //         cy.get('button[name="incluirConsultor"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[name="incluirConsultor"]').click();
        //         cy.wait(450)

        //         cy.wait(250)
        //         cy.get('label[id="regional_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="regional_label"]').click();
        //         cy.wait(450)
        //         cy.get('li[id="regional_87"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[id="regional_87"]').click();
        //         cy.wait(450)

        //         cy.get('input[id="cpf"]').type(gerenciarConsultores.cpf)
        //         cy.get('input[name="nomeCompletoAlterar"]').type(gerenciarConsultores.nomeCompleto)

        //         cy.get('input[name="dataNascimento_input"]').type(gerenciarConsultores.dataNascimento)
        //         cy.wait(200)
        //         cy.get('input[name="dtInicio_input"]').type(gerenciarConsultores.dataInicio)
        //         cy.wait(200)
        //         cy.get('input[name="contato"]').type(gerenciarConsultores.nomeContato)
        //         cy.get('input[name="docIdentidade"]').type(gerenciarConsultores.docIdentidade)
        //         cy.get('input[name="foneCelular"]').type(gerenciarConsultores.celularContato)
        //         cy.get('input[name="email"]').type(gerenciarConsultores.emailContato)
        //         cy.get('input[name="instagram"]').type(gerenciarConsultores.instagram)
        //         cy.get('input[name="facebook"]').type(gerenciarConsultores.facebook)

        //         cy.get('label[id="tipo_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="tipo_label"]').click();
        //         cy.wait(1750)
        //         cy.get('li[data-label="O(a) próprio(a) consultor(a)"]').click()

        //         cy.get('input[name="foneCelularPendencia"]').type(gerenciarConsultores.whastappContatoPendencia)

        //         cy.get('a[id="j_idt907"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('a[id="j_idt907"]').click();
        //         cy.wait(450)

        //         cy.wait(200)
        //         cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').click();
        //         cy.wait(200)
        //         cy.get('li[data-label="Comercial"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[data-label="Comercial"]').click();
        //         cy.wait(200)
        //         cy.get('input[name="enderecoForm:cep"]').type(gerenciarConsultores.cep)

        //         cy.get('input[name="enderecoForm:numEndereco"').type(gerenciarConsultores.numero)
        //         cy.get('input[name="enderecoForm:dcComplemento"]').type(gerenciarConsultores.complemento)

        //         cy.get('button[id="enderecoForm:btnOk"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[id="enderecoForm:btnOk"]').click();
        //         cy.wait(1200)

        //         cy.get('a[id="j_idt929"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('a[id="j_idt929"]').click();
        //         cy.wait(200)

        //         cy.get('label[id="contaBancariaForm:tipoConta_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="contaBancariaForm:tipoConta_label"]').click();
        //         cy.wait(450)
        //         cy.get('li[data-label="Conta Corrente"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[data-label="Conta Corrente"]').click();
        //         cy.wait(450)


        //         cy.get('label[id="contaBancariaForm:banco_label"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('label[id="contaBancariaForm:banco_label"]').click();
        //         cy.wait(450)
        //         cy.get('li[data-label="654 - A.J RENNER SA"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('li[data-label="654 - A.J RENNER SA"]').click();
        //         cy.wait(450)

        //         cy.get('input[id="contaBancariaForm:titular"]').type(gerenciarConsultores.titular)
        //         cy.get('input[name="contaBancariaForm:cpf"]').type(gerenciarConsultores.cpfCnpj)

        //         cy.get('input[name="contaBancariaForm:numeroAgencia"]').type(gerenciarConsultores.numAgenciaConsultor)
        //         cy.get('input[name="contaBancariaForm:digitoAgencia"]').type(gerenciarConsultores.numDigitorAgenciaConsultor)

        //         cy.get('input[name="contaBancariaForm:numeroConta"]').type(gerenciarConsultores.numContaConsultor)
        //         cy.get('input[name="contaBancariaForm:digitoConta"]').type(gerenciarConsultores.numDigitoContaConsultor)

        //         cy.get('input[id="contaBancariaForm:operacao"]').type(gerenciarConsultores.operacao)

        //         cy.get('button[id="contaBancariaForm:btnOk"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[id="contaBancariaForm:btnOk"]').click();
        //         cy.wait(450)


        //         cy.get('button[name="btnCriarConsultor"]').should('be.visible').then(() => { cy.wait(450) });
        //         cy.get('button[name="btnCriarConsultor"]').click();
        //         cy.wait(450)

        //     })
        // })



        // it('Cadastro - Consultor - Gerenciar Consultores - Exporta', () => {
        //     cy.wait(500)
        //     cy.get('.menu-button > .pi').click()
        //     cy.wait(500)
        //     cy.get('li[id="menuform:btnMenuCadastro"]').click()
        //     cy.wait(500)
        //     cy.get('li[id="menuform:btnMenuConsultores"]').click()
        //     cy.wait(500)
        //     cy.get('li[id="menuform:btnMenuGerenciarConsultores"]').click()
        //     cy.wait(500)
        //     cy.get('button[id="pesquisarConsultor"]').click()
        //     cy.wait(1500)
        //     cy.get('button[id="excel"]').click()
        // })
    })

    context('Menu Ações', () => {
        it('Cadastro - Consultor - Gerenciar Consultores - Acoes - Consultar', () => {
            cy.acaoGerenciarConsultoresPesquisar()
            cy.get('button[id="tabelaConsultor:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaConsultor:0:btnConsultar"]').click()
            cy.wait(500)
            cy.get('button[id="btnVoltar"]').click()
        })

        it('Cadastro - Consultor - Gerenciar Consultores - Acoes - Editar', () => {
            cy.acaoGerenciarConsultoresPesquisar()
            cy.wait(500)
            cy.get('button[id="tabelaConsultor:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaConsultor:0:btnEditar"]').click()
            cy.wait(500)
            cy.get('label[id="tipo_label"]').click()
            cy.wait(500)
            cy.get('li[data-label="Gestor(a) da regional"]').click()
            cy.wait(500)
            cy.get('input[id="foneCelularPendencia"]').click()
            cy.get('input[id="foneCelularPendencia"]').type('31999999999')
            cy.wait(500)
            cy.get('button[id="btnCancelarConsultor"]').click()
        })

        it('Cadastro - Consultor - Gerenciar Consultores - Acoes - Excluir', () => {
            cy.acaoGerenciarConsultoresPesquisar()
            cy.wait(500)
            cy.get('button[id="tabelaConsultor:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaConsultor:0:btnExcluir"]').click()
            cy.wait(500)
        })

        it('Cadastro - Consultor - Gerenciar Consultores - Acoes - Solicitar Atualizacao de Dados', () => {
            cy.acaoGerenciarConsultoresPesquisar()
            cy.wait(500)
            cy.get('button[id="tabelaConsultor:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaConsultor:0:btnSolicitarAtualizacao"]').click()
            cy.wait(500)
        })

        it('Cadastro - Consultor - Gerenciar Consultores - Acoes - Arquivos', () => {
            cy.acaoGerenciarConsultoresPesquisar()
            cy.wait(500)
            cy.get('button[id="tabelaConsultor:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaConsultor:0:btnArquivos"]').click()
            cy.wait(500)
            cy.get('button[id="arquivoForm:btFecharModalArquivo"]').click()
            cy.wait(500)
        })

        it('Cadastro - Consultor - Gerenciar Consultores - Acoes - Transferir Carteira', () => {
            cy.acaoGerenciarConsultoresPesquisar()
            cy.wait(500)
            cy.get('button[id="tabelaConsultor:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaConsultor:0:btnTransf"]').click()
            cy.wait(1500)
            cy.get('button[id="j_idt1069:j_idt1098"]').click()
            cy.wait(500)
        })
    })
})