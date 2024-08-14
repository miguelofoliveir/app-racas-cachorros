# AppRacasCachorros

Este projeto foi criado para consumir a API do [The Dog API](https://thedogapi.com/) e exibir informações detalhadas sobre raças de cachorros. Ele foi desenvolvido utilizando [Angular](https://angular.io/) e estilizado com Angular Material, seguindo os princípios de SOLID e boas práticas de desenvolvimento.

## Funcionalidades

- Consumo da API do The Dog API para listar raças de cachorros.
- Exibição dos elementos em um grid responsivo (6 colunas no web e 2 no mobile).
- Cada elemento da lista exibe:
  - Nome da raça.
  - Lista de características/temperamento.
  - Imagem de um cachorro da raça.
- Ao clicar em um elemento, é exibido um modal com mais informações, como peso, altura, origem, expectativa de vida, etc.
- Paginação dos resultados para melhor navegação.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Construção

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

### Testes Cobertos

- `RacasApiService`: Verifica o consumo correto da API e a obtenção de dados de raças.
- `ListaRacasComponent`: Testa a exibição de raças em um grid paginado e a abertura de um modal para detalhes.
- `DetalheRacaComponent`: Garante a exibição correta dos detalhes de uma raça no modal.
- `AppComponent`: Verifica a criação do componente principal e a configuração correta do `RouterOutlet`.

## Executando Testes de Fim a Fim

Execute `ng e2e` para executar os testes de fim a fim via a plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente as capacidades de testes de fim a fim.

## Estilo e Padrões

O projeto utiliza SCSS para estilização, aproveitando a flexibilidade do SASS para criar um design responsivo e consistente. Além disso, foi utilizado o Angular Material para a estilização dos componentes.

## Requisitos

- **Angular**: Este projeto foi desenvolvido com Angular versão `18.1.4`.
- **Angular Material**: Utilizado para a estilização dos componentes com SASS.
- **Dependências**: 
  - `@angular/animations: ^18.1.0`
  - `@angular/cdk: ^18.1.4`
  - `@angular/common: ^18.1.0`
  - `@angular/compiler: ^18.1.0`
  - `@angular/core: ^18.1.0`
  - `@angular/forms: ^18.1.0`
  - `@angular/material: ^18.1.4`
  - `@angular/platform-browser: ^18.1.0`
  - `@angular/router: ^18.1.0`
  - `rxjs: ~7.8.0`
  - `typescript: ~5.5.2`

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página de [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
