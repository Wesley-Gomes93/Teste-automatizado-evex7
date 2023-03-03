
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

    it(' Menu Cadastro - Regional', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnMenuRegional"]').click()
        cy.get('button[id="pesquisarRegional"]').click()
    })

    it('Menu Cadastro - Consultores - Atualizacao Cadastral', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnMenuConsultores"]').click()
        cy.get('li[id="menuform:btnMenuAtualizacaoCadastral"]').click()
        cy.get('button[id="pesquisarAtualizacaoConsultor"]').click()
    })

    it('Menu Cadastro - Consultores - Gerenciar Consultores', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnMenuConsultores"]').click()
        cy.get('li[id="menuform:btnMenuGerenciarConsultores"]').click()
        cy.get('button[id="pesquisarConsultor"]').click()
    })

    it('Menu Cadastro - Fornecedores', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnMenuFornecedores"]').click()
        cy.get('button[id="tabFiltros:pesquisarFornecedor"]').click()
    })

    it('Menu Cadastro - Compradores', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnMenuCompradores"]').click()
        cy.get('button[id="pesquisarComprador"]').click()
    })

    it('Menu Cadastro - Usuario', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnUsuarios"]').click()
        cy.get('button[id="pesquisarUsuario"]').click()
    })

    it(' Menu Cadastro - Meta Comercial', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnMenuConsultores"]').click()
        cy.get('li[id="menuform:btnMetaComercial"]').click()
        cy.get('button[id="Pesquisar"]').click()
        cy.get('button[id="Novo"]').click()
        cy.get('button[id="metaComercialAlterarForm:btnCancelar"]').click()
        cy.get('button[id="limpar"]').click()
    })
    
    it(' Menu Cadastro - Importar Meta Comercial', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnMenuConsultores"]').click()
        cy.get('li[id="menuform:btnImportarMetaComercial"]').click()
    })
    
    it(' Menu Cadastro - Dashboard Meta Comercial', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnMenuConsultores"]').click()
        cy.get('li[id="menuform:btnMetaComercialDashboard"]').click()
    })

    it(' Menu Cadastro - Cupom', () => {
        cy.get('li[id="menuform:btnMenuCadastro"]').click()
        cy.get('li[id="menuform:btnCupom"]').click()
    })

    // it('Menu Associados - Aniversarios', () => {
    //     cy.get('li[id="menuform:btnMenuAssociado"]').click()
    //     cy.get('li[id="menuform:btnMenuAssociadoEmailAniversario"]').click()
    // })

    // it('Menu Associados - Consultar Associado', () => {
    //     cy.get('li[id="menuform:btnMenuAssociado"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultarAssociado"]').click()
    //     cy.get('button[id="pesquisarAssociado"]').click()
    // })

    // it('Menu Associado - SPC/SERASA', () => {
    //     cy.get('li[id="menuform:btnMenuAssociado"]').click()
    //     cy.get('li[id="menuform:btnMenuSpcSerasa"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    //     cy.get('button[id="j_idt374"]').click()
    //     cy.get('button[id="j_idt380"]').click()
    //     cy.get('button[id="limparBotao"]').click()
    // })

    // it('Menu Associados - Controle Leads', () => {
    //     cy.get('li[id="menuform:btnMenuAssociado"]').click()
    //     cy.get('li[id="menuform:btnMenuControleLeads"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    // })

    // it('Menu Associados - Supervisao Leads', () => {
    //     cy.wait(450)
    //     cy.get('li [id="menuform:btnMenuAssociado"]').should('be.visible').then(() => { cy.wait(450) });
    //     cy.get('li [id="menuform:btnMenuAssociado"]').click()
    //     cy.wait(450)
    //     cy.get('li [id="menuform:btnMenuSupervisaoLeads"]').should('be.visible').then(() => { cy.wait(450) });
    //     cy.get('li [id="menuform:btnMenuSupervisaoLeads"]').click()
    //     cy.wait(450)
    //     cy.get('a[href="#tabs:j_idt384"]').should('be.visible').then(() => { cy.wait(450) });
    //     cy.get('a[href="#tabs:j_idt384"]').click()
    //     cy.wait(450)
    //     cy.get('a[href="#tabs:j_idt413"]').should('be.visible').then(() => { cy.wait(450) });
    //     cy.get('a[href="#tabs:j_idt413"]').click()
    //     cy.wait(450)
    //     cy.get('a[href="#tabs:j_idt440"]').should('be.visible').then(() => { cy.wait(450) });
    //     cy.get('a[href="#tabs:j_idt440"]').click()
    //     // cy.wait(450)
    //     // cy.get('a[href="#tabs:relatorioDashboardLeads"]').should('be.visible').then(() => { cy.wait(450) });
    //     // cy.get('a[href="#tabs:relatorioDashboardLeads"]').click()
    //     cy.wait(450)
    //     cy.get('a[href="#tabs:distPerdidos"]').should('be.visible').then(() => { cy.wait(450) });
    //     cy.get('a[href="#tabs:distPerdidos"]').click()
    //     cy.wait(450)
    //     cy.get('a[href="#tabs:origemLead"]').should('be.visible').then(() => { cy.wait(450) });
    //     cy.get('a[href="#tabs:origemLead"]').click()
    //     cy.wait(450)
    //     cy.get('a[href="#tabs:relatorioLead"]').should('be.visible').then(() => { cy.wait(450) });
    //     cy.get('a[href="#tabs:relatorioLead"]').click()
    //     cy.wait(450)
    //     cy.get('a[href="#tabs:relatorioLead"]').should('be.visible').then(() => { cy.wait(450) });
    //     cy.get('a[href="#tabs:relatorioLead"]').click()
    // })

    // it('Menu Associados - Atualizacao Cadastral', () => {
    //     cy.wait(500)
    //     cy.get('li[id="menuform:btnMenuAssociado"]').click()
    //     cy.wait(500)
    //     cy.get('li[id="menuform:btnMenuAtualizacaoCadastralAssociado"]').click()
    //     cy.wait(500)
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    // })

    // it('Menu Associados - Atendimento Parcial', () => {
    //     cy.wait(500)
    //     cy.get('li[id="menuform:btnMenuAssociado"]').click()
    //     cy.wait(500)
    //     cy.get('li[id="menuform:btnMenuAtendimentoParcial"]').click()
    //     cy.wait(500)
    //     cy.get('button[id="pesquisarBtn"]').click()
    //     cy.wait(500)
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Simulacao Web', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuSimulacaoWeb"]').click()

    // })

    // it('Menu Consultar Veiculo', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultarVeiculo"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    // })

    // it('Menu Novo Veiculo', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuNovoVeiculo"]').click()
    //     cy.get('button[id="j_idt826"]').click()
    // })

    // it('Menu Aprovar Veiculo', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuAprovarVeiculo"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    // })

    // it('Menu Negativa Automatica', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuNegativaAutomatica"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    //     cy.get('button[id="j_idt368"]').click()
    //     cy.get('button[id="j_idt367"]').click()
    // })

    // it('Menu Dist. Aprovacao - Supervisao Aprovacao', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuDistAprovacao"]').click()
    //     cy.get('li[id="menuform:btnMenuSupervisaoAprovacao"]').click()
    //     cy.get('button[id="limpar"]').should('be.visible')
    //     cy.get('button[id="limpar"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    // })

    // it('Menu Dist. Aprovacao - Controle Analistas', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuDistAprovacao"]').click()
    //     cy.get('li[id="menuform:btnMenuControleAnalistas"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluirUsuarioEvento"]').click()
    //     cy.get('button[id="btCancelar"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Consultas - Consultar Situacao', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultas"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultarSituacao"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.get('button[id="criarSolicitacaoNegativa"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    //     // cy.get('button[id="excel"]').click()
    // })

    // it('Menu Consultas - Consultar Situacao Envio Assistencia', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultas"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultarSituacaoEnvio"]').click()
    //     cy.get('button[id="pesquisarVeiculoAssistencia"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Consultas - Consultar Motivo Reprovacao', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultas"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultaMotivoReprovacao"]').click()
    //     cy.get('button[id="pesquisarSimulacao"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    //     // cy.get('button[id="excel"]').click()
    // })

    // it('Menu Direcionamento - Situacoes Direcionamento', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuDirecionamento"]').click()
    //     cy.get('li[id="menuform:btnMenuSituacaoDirecionamento"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Direcionamento - Direcionamento Veiculo', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuDirecionamento"]').click()
    //     cy.get('li[id="menuform:btnMenuDirecionamentoVeiculo"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    // })

    // it('Menu Direcionamento - Linha Tempo', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuDirecionamento"]').click()
    //     cy.get('li[id="menuform:btnMenuLinhaTempoDirec"]').click()
       
    // })

    // it('Menu Rastreador - Solicitacoes - Controle Solicitacoes', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuSolicitacoesRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuControleSolicitacoesRastreador"]').click()
    //     cy.get('label[id="comboEmpresaFiltro_label"]').should('be.visible').then(() => { cy.wait(500) });
    //     cy.get('label[id="comboEmpresaFiltro_label"]').click()
    //     cy.get('li[data-label="Universo AGV"]').click()
    //     cy.get('#pesquisarBotao > .ui-button-text').click()
    // })

    // it('Menu Rastreador - Solicitacoes - Situacao Rastreador', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuSolicitacoesRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuSituacaoRastreador"]').click()
    //     cy.get('button[id="btnNovo"]').click()
    //     cy.get('button[id="btFechar"]').click()
    // })

    // it('Menu Estoque - Controle Estoque', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuEstque"]').click()
    //     cy.get('li[id="menuform:btnMenuControleEstoque"]').click()
    //     cy.get('button[id="tabs:j_idt380"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    //     cy.get('button[id="tabs:limparBotao"]').click()
    //     cy.get('a[href="#tabs:tabAlterarLote"]').click()
    //     cy.get('a[href="#tabs:tabPosse"]').click()
    //     cy.get('a[href="#tabs:j_idt461"]').click()
    // })

    // it('Menu Estoque - Situacoes Estoque', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuEstque"]').click()
    //     cy.get('li[id="menuform:btnMenuSituacoesEstoque"]').click()
    //     cy.get('button[id="btnNovo"]').click()
    //     cy.get('button[id="btFechar"]').click()
    // })

    // it('Menu Estoque - Rastreador', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuEstque"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreadorPesquisar"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluirRastreador"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Veiculo  - Barreira Servico', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuBarreiraServico"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    //     cy.get('button[id="limparBotao"]').click()
    //     cy.get('button[id="exportar"]').click()          
    // })

    // it('Menu Veiculo  - Controle de Envios', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuControleEnvioRastreador"]').click()
    //     cy.get('button[id="j_idt360:pesquisarBotao"]').click()
    //     cy.get('button[id="j_idt360:limparBotao"]').click()
    // })

    // it('Menu Veiculo  - Controle de Usuarios', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuControleUsuario"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluirUsuarioRastreador"]').click()
    //     cy.get('label[id="usuarioSelect_label"]').should('be.visible')
    //     cy.get('label[id="usuarioSelect_label"]').click()
    //     cy.get('li[data-label="AMANDA PEREIRA DOS SANTOS"]').click()
    //     cy.get('button[id="btCancelar"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Veiculo  - Linha do Tempo', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreador"]').click()
    //     cy.get('li[id="menuform:btnMenuLinhaTempoRastreador"]').click()

    // })

    // it('Menu Visto - Solicitacoes Vistoria', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuVisto"]').click()
    //     cy.get('li[id="menuform:btnMenuSolicitacoesVistoria"]').click()
    //     cy.get('button[id="pesquisarSolicitacaoVistoriaVisto"]').click()
    // })

    // it('Menu Visto - Integracao Vistoria', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuVisto"]').click()
    //     cy.get('li[id="menuform:btnMenuIntegracaoVistoria"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    // })

    // it('Menu Veiculo Sem Placa Informada', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuVeiculoSemPlacaInformada"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    //     // cy.get('button[id="excel"]').click()
    // })

    // it('Menu Fila de Desconto', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuFilaDesconto"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.wait(4500)
    //     cy.get('button[id="limpar"]').click()
    // })

    // it('Menu Aplicar Questionario', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuAplicarQuestionario"]').click()
    //     cy.get('button[id="tabs:pesquisarVeiculo"]').click()
    //     cy.wait(500)
    //     cy.get('button[id="tabs:limparPesquisa"]').click()
    // })

    // it('Menu Reserva Preferencia', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuReservaPreferencia"]').click()
    //     cy.get('button[id="tabReserva:pesquisarBotao"]').click()
    //     cy.get('button[id="tabReserva:limparBotao"]').click()
    //     // cy.get('button[id="tabReserva:exportarReservaMercado"]').click()         
    // })

    // it('Menu Reintegracao', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuReintegracao"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="formSolicitacaoReativacao:j_idt814"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    //     // cy.get('button[id="excel"]').click()         
    // })

    // it('Menu Negativa Veiculo', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuNegativaVeiculo"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.wait(800)
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Troca Veiculo/Associado', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuTrocaVeiculoAssociado"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.wait(1800)
    //     cy.get('#novaTroca > .ui-button-text').click()
    //     cy.get('button[id="btnCancelar"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Vistoria Terceirizada', () => {
    //     cy.get('li[id="menuform:btnMenuVeiculo"]').click()
    //     cy.get('li[id="menuform:btnMenuVistoriaTerceirizada"]').click()
    //     cy.get('button[id="btnPesquisar"]').click()
    // })

    // it('Menu Solicitacoes - Consultoria Juridica', () => {
    //     cy.get('li[id="menuform:btnMenuSolicitacao"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultoriaJuridica"]').click()
    //     cy.get('button[id="btnAbrirNovaSolicitacao"]').click()
    //     cy.get('button[id="btnFecharConsultoria"]').click()
    // })

    // it('Menu Solicitacoes - Procedimento Locação', () => {
    //     cy.get('li[id="menuform:btnMenuSolicitacao"]').click()
    //     cy.get('li[id="menuform:btnMenuProcedimentoLocacao"]').click()
    //     // cy.get('button[id="btnAbrirNovaSolicitacao"]').click()
    //     // cy.wait(500)
    //     // cy.get('button[id="btnFecharProcedimentoLocacao"]').click()
    // })

    // it('Menu Solicitacoes - Entrega Coleta', () => {
    //     cy.get('li[id="menuform:btnMenuSolicitacao"]').click()
    //     cy.get('li[id="menuform:btnMenuEntregaColeta"]').click()
    //     cy.get('label[id="selectTipoFiltro_label"]').should('be.visible')
    //     cy.get('label[id="selectTipoFiltro_label"]').click()
    //     cy.get('li[data-label="Entrega"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    //     cy.get('button[id="j_idt388"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    //     cy.get('button[id="limparBotao"]').click()
    // })

    // it('Menu Solicitacoes - RH - Solicitar Contratacao', () => {
    //     cy.get('li[id="menuform:btnMenuSolicitacao"]').click()
    //     cy.get('li[id="menuform:btnMenuRh"]').click()
    //     cy.get('li[id="menuform:btnMenuSolicitaContrata"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    //     cy.get('button[id="j_idt380"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    //     cy.get('button[id="limparBotao"]').click()
    // })

    // it('Menu Solicitacoes - RH - Solicitar Desligamento', () => {
    //     cy.get('li[id="menuform:btnMenuSolicitacao"]').click()
    //     cy.get('li[id="menuform:btnMenuRh"]').click()
    //     cy.get('li[id="menuform:btnMenuSolicitaDesliga"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    //     cy.get('button[id="j_idt380"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    //     cy.get('button[id="limparBotao"]').click()
    // })

    // it('Menu Solicitacoes - RH - Hora Extra', () => {
    //     cy.get('li[id="menuform:btnMenuSolicitacao"]').click()
    //     cy.get('li[id="menuform:btnMenuRh"]').click()
    //     cy.get('li[id="menuform:btnMenuConsutaHoraExtra"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    // })

    // it('Menu Assitencia - Servico Assitencia', () => {
    //     cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    //     cy.get('li[id="menuform:btnMenuServicoAssist"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Assitencia - Situacao Assitencia', () => {
    //     cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    //     cy.get('li[id="menuform:btnMenuSituacaoAssist"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Assitencia - Motivo Assitencia', () => {
    //     cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    //     cy.get('li[id="menuform:btnMenuMotivoAssist"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Assitencia - Condicao Assitencia', () => {
    //     cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    //     cy.get('li[id="menuform:btnMenuCondicaoVeiculo"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Assitencia - Tipo Atendimento', () => {
    //     cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    //     cy.get('li[id="menuform:btnMenuTipoAtendimento"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('#btnCancelar > .ui-button-text').click()
    // })

    // it('Menu Assitencia - Evento Assitencia', () => {
    //     cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    //     cy.get('li[id="menuform:btnMenuEventoAssist"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.wait(4200)
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnVoltarPesquisa"]').click()
    //     cy.get('button[id="limpar"]').click()
    // })

    // it('Menu Assitencia - Supervisao Acionamento', () => {
    //     cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    //     cy.get('li[id="menuform:btnMenuCondicaoVeiculo"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Assitencia - Dashboard Assistencia', () => {
    //     cy.get('li[id="menuform:btnMenuAssistencia"]').click()
    //     cy.get('li[id="menuform:btnMenuDashboardAssistencia"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    // })

    // it('Menu C.A.T - Situações C.A.T', () => {
    //     cy.get('li[id="menuform:btnMenuCat"]').click()
    //     cy.get('li[id="menuform:btnMenuSituacaoCat"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    //     cy.get('button[id="j_idt362"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    //     cy.get('button[id="limparBotao"]').click()
    // })

    // it('Menu C.A.T - Controle C.A.T', () => {
    //     cy.get('li[id="menuform:btnMenuCat"]').click()
    //     cy.get('li[id="menuform:btnMenuControleCat"]').click()
    //     cy.get('label[id="tipoSindicancia_label"]').should('be.visible').then(() => { cy.wait(200) });
    //     cy.get('label[id="tipoSindicancia_label"]').click()
    //     cy.get('li[data-label="Colisões"]').click()
    //     cy.get('button[id="pesquisar"]').click()

    // })

    // it('Menu C.A.T - Linha do Tempo C.A.T', () => {
    //     cy.get('li[id="menuform:btnMenuCat"]').click()
    //     cy.get('li[id="menuform:btnMenuLinhaTempoCat"]').click()
    // })
    // it('Menu C.A.T - Linha do Tempo C.A.T', () => {
    //     cy.get('li[id="menuform:btnMenuCat"]').click()
    //     cy.get('li[id="menuform:btnMotivosNegativasSindicancia"]').click()
    // })

    // it('Menu C.A.T - Controle de Analista C.A.T', () => {
    //     cy.get('li[id="menuform:btnMenuCat"]').click()
    //     cy.get('li[id="menuform:btnMenuControleAnalistaCat"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluirUsuarioSindicancia"]').click()
    //     cy.get('button[id="btCancelar"]').click()
    //     cy.get('button[id="test"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Evento - Controle Eventos', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuControleEventos"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.wait(3500)
    //     cy.get('button[id="incluirSinistro"]').click()
    // })

    // it('Menu Evento - Acompanhamento Oficina', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuAcompanhamentoOficina"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Evento - Tarefa Evento', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuTarefaEvento"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Evento - Pagamento Evento', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuPagamentosEventos"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
       
    // })

    // it('Menu Evento - Nota Fiscal Evento', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuNotasFiscaisEventos"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Evento - Situacoes do Evento', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuSituacoesEventos"]').click()
    //     cy.get('button[id="btnNovo"]').click()
    //     cy.get('button[id="btFechar"]').click()
    // })

    // it('Menu Evento - Linha do Tempo Evento', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btsMenuLinhaTempoEventos"]').click()
    //     // cy.get('button[id="j_idt378"]').click()
    // })

    // it('Menu Evento - Aviso de Evento App', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuAvisoEventoApp"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    //     cy.get('button[id="limparBotao"]').click()
    // })

    // it('Menu Evento - Controle de Analistas', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuControleAnalistasEventos"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluirUsuarioEvento"]').click()
    //     cy.get('button[id="btCancelar"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Evento - Salvados - Controle de Salvados', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuSalvados"]').click()
    //     cy.get('li[id="menuform:btnMenuControleSalvados"]').click()
    //     cy.get('button[id="pesquisarSalvado"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Evento - Salvados - Situacoes Salvados', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuSalvados"]').click()
    //     cy.get('li[id="menuform:btnMenuSituacoesSalvados"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Evento - Salvados - Patio', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuSalvados"]').click()
    //     cy.get('li[id="menuform:btnMenuPatios"]').click()
    //     cy.get('button[id="incluir"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    // })

    // it('Menu Evento - Salvados - Depreciações', () => {
    //     cy.get('li[id="menuform:btnMenuEventos"]').click()
    //     cy.get('li[id="menuform:btnMenuSalvados"]').click()
    //     cy.get('li[id="menuform:btnDepreciacao"]').click()
    //     cy.get('button[id="j_idt369"]').click()
    //     cy.get('button[id="j_idt370"]').click()
    //     cy.get('button[id="formEditarDepreciacao:j_idt422"]').click()
    //     cy.get('button[id="j_idt371"]').click()
    // })

    // it('Menu Financeiro - Titulo Emitidos', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuTituloEmiti"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluirMensalidade"]').click()
    //     cy.get('button[id="btnCancelarMensalidade"]').click()
    // })

    // it('Menu Financeiro - Cobranca', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuCobranca"]').click()
    //     cy.get('button[id="pesquisarContato"]').click()
    // })

    // it('Menu Financeiro - Desconto', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuDesconto"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="incluirDesconto"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Financeiro - Promoção', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuPromocao"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.wait(1000)
    //     cy.get('#incluirPromocao > .ui-button-text').click()
    //     cy.get('button[id="btnCancelar"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Financeiro - Lancamento de Rateio', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuLancamentoRateio"]').click()
    //     cy.get('button[id="pesquisarLancamento"]').click()
    // })

    // it('Menu Financeiro - Arquivo Bancario - Arquivo Remessa', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuArquivosBancarios"]').click()
    //     cy.get('li[id="menuform:btnMenuArquivoRemessa"]').click()
    //     cy.get('#dtInicial_input').click()
    //     cy.get("#dtInicial_panel > div.ui-datepicker-group.ui-widget-content > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtInicial_panel > div.ui-datepicker-group.ui-widget-content > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="dtFinal_input"]').click()
    //     cy.get("#dtFinal_panel > div.ui-datepicker-group.ui-widget-content > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(6) > td:nth-child(2) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtFinal_panel > div.ui-datepicker-group.ui-widget-content > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(6) > td:nth-child(2) > a").click()
    //     cy.get('#comboContaBancaria_label').click()
    //     cy.get('#comboContaBancaria_4').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.wait(750)
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Financeiro - Arquivo Bancario - Arquivo Retorno', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuArquivosBancarios"]').click()
    //     cy.get('li[id="menuform:btnMenuArquivoRetorno"]').click()
    // })

    // it('Menu Financeiro - Fechamento', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuFechamento"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="novo"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Financeiro - Inadimplente', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuInadimplentes"]').click()
    //     cy.get('input[id="dataInicial_input"]').click()
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="dataFinal_input"]').click()
    //     cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(6) > td:nth-child(2) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(6) > td:nth-child(2) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
    // })

    // it('Menu Financeiro - Cobranca Terceirizada', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:btnMenuCobrancaTerceirizada"]').click()
    //     cy.get('input[id="dataInicial_input"]').click()
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="dataFinal_input"]').click()
    //     cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(6) > td:nth-child(2) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(6) > td:nth-child(2) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Financeiro - Devolucao Boleto', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:devBoleto"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    //     cy.wait(3000)
    //     cy.get('button[id="j_idt390"]').click()
    //     cy.get('button[id="btnCancelar"]').click()
    //     cy.get('button[id="limparBotao"]').click()
    // })

    // it('Menu Financeiro - Controle Reembolso', () => {
    //     cy.get('li[id="menuform:btnMenuFinanceiro"]').click()
    //     cy.get('li[id="menuform:controleDocs"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    // })

    // it('Menu Relatorio - Indicadores', () => {
    //     cy.wait(500)
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.wait(500)
    //     cy.get('li[id="menuform:btnMenuIndicadores"]').click()
    //     cy.wait(500)
    //     cy.get('a[href="#tabIndicadores:j_idt367"]').click()
    //     //assistencia
    //     cy.get('a[href="#tabIndicadores:j_idt374"]').click()
    //     //cadastro
    //     cy.get('a[href="#tabIndicadores:j_idt384"]').click()
    //     //cat
    //     cy.get('a[href="#tabIndicadores:j_idt403"]').click()
    //     //comercial
    //     cy.get('a[href="#tabIndicadores:j_idt412"]').click()
    //     //eventos
    //     cy.get('a[href="#tabIndicadores:j_idt441"]').click()
    //     //rastreador
    //     cy.get('a[href="#tabIndicadores:j_idt457"]').click()
    //     //financeiro
    //     cy.get('a[href="#tabIndicadores:j_idt461"]').click()
    //     //juridico
    //     cy.get('a[href="#tabIndicadores:j_idt468"]').click()
    //     //ti        
    //     cy.get('a[href="#tabIndicadores:j_idt471"]').click()
    //     //indicadoresMensais 
    //     cy.wait(500)
    // })

    // it('Menu Relatorio - Relatorio Avulsos', () => {
    //     cy.wait(500)
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.wait(500)
    //     cy.get('li[id="menuform:btnMenuRelatoriosAvulsos"]').click()
    //     cy.wait(500)
    //     cy.get('a[href="#tabRelatorios:j_idt367"]').click()
    //     //assitencia
    //     cy.get('a[href="#tabRelatorios:j_idt368"]').click()
    //     //cadastro        
    //     cy.get('a[href="#tabRelatorios:j_idt371"]').click()
    //     //cat        
    //     cy.get('a[href="#tabRelatorios:j_idt373"]').click()
    //     //comercial        
    //     cy.get('a[href="#tabRelatorios:j_idt376"]').click()
    //     //eventos        
    //     cy.get('a[href="#tabRelatorios:j_idt378"]').click()
    //     //juridico       
    //     cy.get('a[href="#tabRelatorios:j_idt381"]').click()
    //     //rastreador        
    //     cy.get('a[href="#tabRelatorios:j_idt383"]').click()
    //     //financeiro
    //     cy.get('[data-index="8"] > a').click()
    //     //suporte
    //     cy.wait(500)
    // })

    // it('Menu Relatorio - Carteira Diaria', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuCarteiraDiaria"]').click()
    // })

    // it('Menu Relatorio - Analise de Movimentações Veiculos', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuAnaliseMovimentoVeiculos"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('a[href="#tabs:j_idt413"]').click()
    // })

    // it('Menu Relatorio - Producao', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuProducao"]').click()
    // })

    // it('Menu Relatorio - Gestao Financeira Regional', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuGestaoFinanceiraRegional"]').click()
    //     cy.get('button[id="pesquisarRegionais"]').click()
    //     // cy.get('a[href="#tabs:j_idt413"]').click()
    // })

    // it('Menu Relatorio - Analise Recebimento', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuAnaliseRecebimentos"]').click()

    // })

    // it('Menu Relatorio - Associado', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuAssociados"]').click()
    //     cy.get('input[id="dtInicial_input"]').click()
    //     cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7)").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7)").click()
    //     cy.get('input[id="dtFinal_input"]').click()
    //     cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisarAssociado"]').click()
    //     // cy.get('a[href="#tabs:j_idt413"]').click()
    // })
    
    // it('Menu Relatorio - Veiculo', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuVeiculos"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
        
    // })
    
    // it('Menu Relatorio - Veiculo por Oficina', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuAnaliseRecebimentos"]').click()
        
    // })
    
    // it('Menu Relatorio - Direc. de Veiculo', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuDirecVeiculos"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
        
    // })
    
    // it('Menu Relatorio - Contato Associado', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuContatoAssociado"]').click()
    //     cy.get('input[id="dataInicialFiltro_input"]').click()
    //     cy.get("#dataInicialFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(4) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataInicialFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(4) > a").click()
    //     cy.get('input[id="dataFinalFiltro_input"]').click()
    //     cy.get("#dataFinalFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataFinalFiltro_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
        
    // })

    // it('Menu Relatorio - Consultar Atividades', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultarAtividades"]').click()
    //     cy.get('input[id="dia_input"]').click()
    //     cy.get("#dia_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(4) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dia_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(4) > a").click()
    //     cy.get('input[id="diaComparar_input"]').click()
    //     cy.get("#diaComparar_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#diaComparar_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
        
    // })
     
    // it('Menu Relatorio - Produto - Produto Veiculo', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuProdutos"]').click()
    //     cy.get('li[id="menuform:btnMenuProdutosVeiculo"]').click()
    //     cy.get('input[id="dataInicial_input"]').click()
    //     cy.get('input[id="dataInicial_input"]').type('01052022')
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="dataFinal_input"]').click()
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(6) > td:nth-child(2) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(6) > td:nth-child(2) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Relatorio - Produto - Produto Associado', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuProdutos"]').click()
    //     cy.get('li[id="menuform:btnMenuProdutosAssociado"]').click()
    //     cy.get('input[id="dataInicial_input"]').click()
    //     cy.get('input[id="dataInicial_input"]').type('01052022')
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="dataFinal_input"]').click()
    //     cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
    // })

    // it('Menu Relatorio - Produto - Produto PAP', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuProdutos"]').click()
    //     cy.get('li[id="menuform:btnMenuProdutosAssociado"]').click()
    //     cy.get('input[id="dataInicial_input"]').click()
    //     cy.get('input[id="dataInicial_input"]').type('01052022')
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="dataFinal_input"]').click()
    //     cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
    // })

    // it('Menu Relatorio - Evento - Evento', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuEventosRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuEvento"]').click()
    //     cy.get('input[id="calendarDataInicio_input"]').click()
    //     cy.get('input[id="calendarDataInicio_input"]').type('01052022')
    //     cy.get("#calendarDataInicio_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#calendarDataInicio_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="calendarDataFinal_input"]').click()
    //     cy.get("#calendarDataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#calendarDataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisarSinistro"]').click()
    // })

    // it('Menu Relatorio - Evento - Orçamento', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuEventosRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuOrcamentos"]').click()
    //     cy.get('input[id="calendarDataInicio_input"]').click()
    //     cy.get('input[id="calendarDataInicio_input"]').type('01052022')
    //     cy.get("#calendarDataInicio_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#calendarDataInicio_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="calendarDataFinal_input"]').click()
    //     cy.get("#calendarDataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#calendarDataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisarSinistro"]').click()
    // })

    // it('Menu Relatorio - Evento - Carro Reserva', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuEventosRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuCarroReserva"]').click()
    // })
    
    // it('Menu Relatorio - Evento - Sindicancia Evento', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuEventosRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuSindicanciaEvento"]').click()
    //     cy.get('input[id="calendarDataInicio_input"]').click()
    //     cy.get('input[id="calendarDataInicio_input"]').type('01052022')
    //     cy.get("#calendarDataInicio_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#calendarDataInicio_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="calendarDataFinal_input"]').click()
    //     cy.get('input[id="calendarDataFinal_input"]').type('01052022')
    //     cy.get("#calendarDataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#calendarDataFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisarSinistro"]').click()
    // })
    
    // it('Menu Relatorio - Assistencia - Orçamento', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuAssistenciaRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuAssistenciaOrcamentos"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    // })
    
    // it('Menu Relatorio - Assistencia - Situação', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuAssistenciaRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuSituacao"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    // })
    
    // it('Menu Relatorio - Rastreador', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuRastreadorRelatorio"]').click()
    // })
    
    // it('Menu Relatorio - Titulo Emitidos', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuTitulosEmit"]').click()
    //     cy.get('input[id="dtInicial_input"]').click()
    //     cy.get('input[id="dtInicial_input"]').type('01052022')
    //     cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="dtFinal_input"]').click()
    //     cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
    // })
    
    // it('Menu Relatorio - Titulo Emitidos', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuTitulosRecebidos"]').click()
    //     cy.get('input[id="dtInicial_input"]').click()
    //     cy.get('input[id="dtInicial_input"]').type('01052022')
    //     cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="dtFinal_input"]').click()
    //     cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
    // })
    
    // it('Menu Relatorio - Raio X', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuRelatorioRaioX"]').click()
    //     cy.get('input[id="dtInicial_input"]').click()
    //     cy.get('input[id="dtInicial_input"]').type('01052022')
    //     cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtInicial_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(1) > td:nth-child(7) > a").click()
    //     cy.get('input[id="dtFinal_input"]').click()
    //     cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").should('be.visible').then(() => { cy.wait(500) });
    //     cy.get("#dtFinal_panel > div > div.ui-datepicker-calendar-container > table > tbody > tr:nth-child(5) > td:nth-child(6) > a").click()
    //     cy.get('button[id="pesquisar"]').click()
    // })
    
    // it('Menu Relatorio - Estatistica Gerencial', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuEstatisticasGerencial"]').click()
    //     cy.get('button[id="tab:pesquisarLive"]').click()
    // })
    
    // it('Menu Relatorio - Ranking Consultores', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuRankingConsultores"]').click()
    // })
    
    // it('Menu Relatorio - Ranking Consultores', () => {
    //     cy.get('li[id="menuform:btnMenuRelatorios"]').click()
    //     cy.get('li[id="menuform:btnMenuCarteira"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    // })
    
    // it('Menu Clube You - Controle Clube You', () => {
    //     cy.get('li[id="menuform:btnMenuClubeYou"]').click()
    //     cy.get('li[id="menuform:btnMenuControleClubeYou"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    // })
    
    // it('Menu Juridico - Consultoria Juridia', () => {
    //     cy.get('li[id="menuform:btnMenuJuridico"]').click()
    //     cy.get('li[id="menuform:btnMenuConsultJuridica"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.wait(900)
    //     cy.get('button[id="limparPesquisa"]').click()
    // })

    // it('Menu Juridico - Procedimento Locação', () => {
    //     cy.get('li[id="menuform:btnMenuJuridico"]').click()
    //     cy.get('li[id="menuform:btnMenuProcedLocacao"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    //     cy.wait(900)
    //     cy.get('button[id="limparPesquisa"]').click()
    // })
    
    // it('Menu Juridico - Analise de Processos', () => {
    //     cy.get('li[id="menuform:btnMenuJuridico"]').click()
    //     cy.get('li[id="menuform:btnMenuAnaliProcessos"]').click()
    //     cy.get('button[id="pesquisar"]').click()
    // })
    
    // it('Menu Juridico - Solicitacao - 2 via Contrato', () => {
    //     cy.get('li[id="menuform:btnMenuJuridico"]').click()
    //     cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
    //     cy.get('li[id="menuform:btnMenu2ViaContrato"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    // })
    
    // it('Menu Juridico - Confecção Contrato (Administrativos)', () => {
    //     cy.get('li[id="menuform:btnMenuJuridico"]').click()
    //     cy.get('li[id="menuform:btnMenuSolicitacaoJurid"]').click()
    //     cy.get('li[id="menuform:btnMenuConfeccaoContrato"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    // })
    
    // it('Menu Juridico - Notificações e Declarações', () => {
    //     cy.get('li[id="menuform:btnMenuJuridico"]').click()
    //     cy.get('li[id="menuform:btnMenuNotificDeclaracao"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    // })
    
    // it('Menu Juridico - Denúncia contratual', () => {
    //     cy.get('li[id="menuform:btnMenuJuridico"]').click()
    //     cy.get('li[id="menuform:btnMenuDenunciaContrato"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    // })
    
    // it('Menu Juridico - Ressarcíveis', () => {
    //     cy.get('li[id="menuform:btnMenuJuridico"]').click()
    //     cy.get('li[id="menuform:btnMenuRessarsivel"]').click()
    //     cy.get('button[id="pesquisarVeiculo"]').click()
    // })
    
    // it('Menu Performance - Controle Tickets', () => {
    //     cy.get('li[id="menuform:btnMenuPerformance"]').click()
    //     cy.get('li[id="menuform:btnControleTicketsPerformance"]').click()
    //     cy.get('button[id="pesquisarBotao"]').click()
    // })
    
    // it('Menu Performance - Dashboard Performance', () => {
    //     cy.get('li[id="menuform:btnMenuPerformance"]').click()
    //     cy.get('li[id="menuform:btnDashboardTicketsPerformance"]').click()
    // })
    
    // it('Menu Performance - Configuracao', () => {
    //     cy.get('li[id="menuform:btnMenuPerformance"]').click()
    //     cy.get('li[id="menuform:btnConfiguracoesPerformance"]').click()
    // })
    
})

