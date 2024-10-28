
describe('Teste de UI no Portal Acadêmico', () => {

  // URL base do portal
  const url = 'https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico'
  beforeEach(() => {
    cy.visit(url);
  });

  it('Caso de teste 1: Verificar título da página', () => {
    // Verifica se o título da página é exatamente igual ao esperado
    cy.title().should('eq', 'Site Acadêmico- Página de Autenticação');
  });
  
  
    it('Caso de teste 2: Verificar presença do botão Continuar', () => {
      // Verifica se o botão "Continuar" está visível na tela inicial
      cy.get('input[type="submit"][value="Continuar"]').should('be.visible');
    });
  
    //teste negativo uma vez que nessa time line nao tem esse texto alterar senha, entao ja e um erro esperado
    it('Caso de teste 3: Verificar ausência de funcionalidade de alteração de senha', () => {
      // Faz uma requisição para a URL que deveria ser de "alterar senha"
      cy.visit(`${url}/alterar-senha`, { failOnStatusCode: false });
    
      // Verifica se a página não contém elementos de alteração de senha
      cy.contains('Alterar senha').should('not.exist'); // Verifique se o link ou texto "Alterar senha" está ausente
    });
    
  
    it('Caso de teste 4: Verificar ausência de "Esqueci minha senha" (caso negativo)', () => {
      // Verifica que o link ou botão de "Esqueci minha senha" não está presente
      cy.contains('Esqueci minha senha').should('not.exist');
    });
  
    it('Caso de teste 5: Verificar a presença do texto "Home" no canto superior esquerdo', () => {
      // Acessa a página
      cy.visit('https://siteseguro.inatel.br/PortalAcademico/WebLogin.aspx?ReturnUrl=%2fPortalacademico');
    
      // Verifica se o texto "Home" está visível no canto superior esquerdo da página
      cy.contains('Home').should('be.visible');
    });

    it('Caso de teste 6: Mudar para a seção "Área Acadêmica"', () => {
      // Localiza e clica no link "Área Acadêmica"
      cy.contains('Área Acadêmica').click();
    
      // o conteúdo da página mudou para a seção "Área Acadêmica"
      cy.contains('Login do Docente/Funcionário').should('be.visible');
    });

  });