# Desafio Abril para Dev ReactNative

Para este desafio vamos criar um aplicativo de pesquisa de reposotórios do GitHub, usando a API aberta de busca.
Crie um repositório no GitHub e responda o e-mail de teste com um link para o mesmo ou crie um pull request nesse repositório com seu código.

**Protótipo**: [Link](https://www.figma.com/file/ROaFck4gHEITw3vdUzSwsi/Test-Abril---Github-list?node-id=0%3A1)<br/>
**Documentação do endpoint**: [Link](https://developer.github.com/v3/search/#search-repositories)<br/>
Não é preciso se autenticar para realizar essa requisição, o endpoint é aberto.<br/>
Exemplo cURL da request:
```
curl --location --request GET 'https://api.github.com/search/repositories?q=TERMO_DA_BUSCA&per_page=10'
```

--------

## Requisitos

### Usabilidade

- Seguir da maneira mais fiel possível o layout de listagem apresentado no Protótipo.
- Ao clicar no campo de busca o usuário pode digitar a vontade, realizar a requisição apenas quando o usuário pressionar o botão de enviar no teclado digital ou retirar o foco do campo de busca.
- Ao clicar em qualquer um dos repositórios listados o aplicativo deve navegar para uma segunda tela e usar um <WebViewer /> para exibir a página do repositório.
- A listagem dese seguir o layout apresentando:
  - Avatar do criador do repositório (`owner.avatar_url`)
  - Nome do Repo (`name`)
  - Login do criador (`owner.login`)
  - Número de estrelas (`stargazers_count`)
  
### Código

**Obrigatória utilização:**
- react-native (versão `0.67.4` ou superior)
- redux (versão `4.1.0` ou superior)
- styled-components
- @react-navigation (pacotes da versão 6)

**Diferencial:**
- Utilização de Hooks e "Redux Hooks"
  - reselect
  - redux-saga
- Infinite scroll
- Utilizar biblioteca Axios nas requests
- Testes de ao menos 1 componente

Boa Sorte!
