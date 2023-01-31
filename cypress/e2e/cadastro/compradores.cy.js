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

    context('Ações Basicas', () => {
        it('Pesquisar Compradores', () => {
            cy.acaoPesquisarCompradores()
        })

        it('Limpar Compradores', () => {
            cy.acaoLimparCompradores()
        })
        it('Exportar Compradores', () => {
            // cy.acaoExportarCompradores()
        })

    })

    context('Cadastrar um novo compradores', () => {
        const compradores = require('../../fixtures/compradores.json')
        compradores.forEach(compradores => {
            it('Test Menu Cadastro - Compradores', () => {
                cy.acaoCadastrarCompradores()

                cy.get('input[id="cnpj"]').type(compradores.cnpjCompradores)
                cy.get('input[id="razaoSocial"]').type(compradores.razaoSocial)
                cy.get('input[id="inscEstadual"]').type(compradores.inscricaoSocial)
                cy.get('input[id="cpfR"]').type(compradores.cpf)
                cy.get('input[id="nomeR"]').type(compradores.nome)

                cy.get('input[id="fone1"]').type(compradores.telefone1)
                cy.get('input[id="fone2"]').type(compradores.telefone2)
                cy.get('input[id="docIdentidadeRep"]').type(compradores.docIdentidade)
                cy.get('input[name="dataNascimentoRepresentante_input"]').type(compradores.dataNascimento)
                cy.get('input[id="emailPJ"]').type(compradores.email)
                cy.get('textarea[name="observacaoPJ"]').type(compradores.observacao)

                cy.get('a[id="j_idt617"]').scrollIntoView({ duration: 500 }).should('be.visible').then(() => { cy.wait(250) });
                cy.get('a[id="j_idt617"]').click();
                cy.wait(500)

                cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').scrollIntoView({ duration: 500 }).should('be.visible').then(() => { cy.wait(250) });
                cy.get('label[id="enderecoForm:tpEnderecoCombo_label"]').click();
                cy.wait(500)
                cy.get('li[data-label="Comercial"]').scrollIntoView({ duration: 500 }).should('be.visible').then(() => { cy.wait(250) });
                cy.get('li[data-label="Comercial"]').click();
                cy.wait(500)

                cy.get('input[name="enderecoForm:cep"]').type(compradores.cep)
                cy.get('input[name="enderecoForm:numEndereco"]').type(compradores.numero)
                cy.get('input[name="enderecoForm:dcComplemento"]').type(compradores.complemento)

                cy.get('button[id="enderecoForm:btnOk"]').scrollIntoView({ duration: 500 }).should('be.visible').then(() => { cy.wait(250) });
                cy.get('button[id="enderecoForm:btnOk"]').click();
                cy.wait(500)

                cy.get('a[id="j_idt639"]').scrollIntoView({ duration: 500 }).should('be.visible').then(() => { cy.wait(250) });
                cy.get('a[id="j_idt639"]').click();
                cy.wait(500)

                cy.get('label[id="contaBancariaForm:tipoConta_label"]').scrollIntoView({ duration: 500 }).should('be.visible').then(() => { cy.wait(250) });
                cy.get('label[id="contaBancariaForm:tipoConta_label"]').click();
                cy.wait(500)
                cy.get('li[data-label="Conta Poupança"]').scrollIntoView({ duration: 500 }).should('be.visible').then(() => { cy.wait(250) });
                cy.get('li[data-label="Conta Poupança"]').click();
                cy.wait(500)

                cy.get('label[id="contaBancariaForm:banco_label"]').scrollIntoView({ duration: 500 }).should('be.visible').then(() => { cy.wait(250) });
                cy.get('label[id="contaBancariaForm:banco_label"]').click();
                cy.wait(500)
                cy.get('li[data-label="237 - Bradesco"]').scrollIntoView({ duration: 2000 }).should('be.visible').then(() => { cy.wait(250) });
                cy.get('li[data-label="237 - Bradesco"]').click();
                cy.wait(500)

                cy.get('input[name="contaBancariaForm:titular"]').type(compradores.titular)
                cy.get('input[name="contaBancariaForm:cpf"]').type(compradores.cpfCnpj)
                cy.get('input[name="contaBancariaForm:numeroAgencia"]').type(compradores.numAgenciaCompradores)
                cy.get('input[name="contaBancariaForm:digitoAgencia"]').type(compradores.numDigitoAgenciaCompradores)
                cy.get('input[name="contaBancariaForm:numeroConta"]').type(compradores.numContaCompradores)
                cy.get('input[name="contaBancariaForm:digitoConta"]').type(compradores.numDigitoContaCompradores)

                cy.get('button[id="contaBancariaForm:btnOk"]').should('be.visible').then(() => { cy.wait(250) });
                cy.get('button[id="contaBancariaForm:btnOk"]').click();
                cy.wait(500)

                // cy.get('button[id="btnSalvar"]').should('be.visible').then(() => { cy.wait(250) });
                // cy.get('button[id="btnSalvar"]').click();
                // cy.wait(500)

                // cy.get('button[id="limparPesquisa"]').should('be.visible').then(() => { cy.wait(250) });
                // cy.get('button[id="limparPesquisa"]').click();
            })
        })
    })

    context('Menu acoes', () => {
        it('Ações Compradores - Editar', () => {
            cy.acaoPesquisarCompradores()
            cy.wait(500)
            cy.get('button[id="tabelaComprador:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaComprador:0:btnEditar"]').click()
        })

        it('Ações Compradores - Arquivo', () => {
            cy.acaoPesquisarCompradores()
            cy.wait(500)
            cy.get('button[id="tabelaComprador:0:acoes_button"]').click()
            cy.wait(500)
            cy.get('a[id="tabelaComprador:0:btnArquivos"]').click()
        })
    })
})

