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

    describe('Ações Basicas - Titulos Emitidos', () => {
        it('Titulo Emitidos - Pesquisar', () => {
            cy.acaoPesquisarTitulosEmitidos()
        })

        it('Titulo Emitidos - Pesquisar Exlcuidos', () => {
            cy.acaoPesquisarTitulosExcluidos()
        })
    })

    describe('Cadastrar Novo Titulo - Titulos Emitidos', () => {
        it('Titulos Emitidos - Novo', ( ) =>{
            cy.acaoPesquisarCadastrarTituloEmitidos()
        })
     })

    describe('Menu Ações - Titulos Emitidos', () => { 
        it('Gerar Boleto - Ações', () =>{
            cy.acaoGerarBoleto()
        })

        it('Registrar Pagamento - Ações', () =>{
            cy.acaoRegistrarPagamento()
        })

        it('Editar Valores do Boleto - Ações', () =>{
            cy.acaoEditarValoresBoleto()
        })

        it('Editar - Ações', () =>{
            cy.acaoEditar()
        })
    })

    describe('Menu Outras Ações', () => {
        it('Visualizar Titulo', () =>{
            cy.acaoVisualizarTitulo()
        })
        
        it('Editar Mensagem', () =>{
            cy.acaoEditarMensagens()
        })
        
        it('Excluir Boleto', () =>{
            cy.acaoExcluirBoleto()
        })
        
        it('Deetalhar Mensalidade', () =>{
            cy.acaoDetalharMensalidade()
            
        })
        
        it('Historico Veiculo', () =>{
            cy.acaoHistoricoVeiculo()
            
        })
        
        it('Enviar Boleto email', () =>{
            cy.acaoEnviarBoletoEmail()
            
        })
        
        it('Enviar p/ Aprovação', () =>{
            cy.acaoEnviarAprovção()
            
        })
        
        it('Download Boleto', () =>{
            cy.acaoDownloadBoleto()
            
        })
        
        it('Enviar SMS', () =>{
            cy.acaoEnviarSMS()

        })

    })

})

