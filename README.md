# Abril ReactNative Challenge
Desafio para Dev React Native

Para este desafio vamos criar um aplicativo de pesquisa de reposotórios do GitHub, usando a API aberta de busca.
Crie um repositório no GitHub e responda o e-mail de test com um link para o mesmo.

**Protótipo**: [Link](https://www.figma.com/proto/NA4Ead7eUjwt4OLJp3DPoD/Shary-Copy?node-id=0%3A2&scaling=scale-down)<br/>
**Documentação**: [Link](https://developer.github.com/v3/search/#search-repositories)<br/>
**Não é preciso se autenticar para realizar essa requisição**

--------

## Requisitos

### Usabilidade

- Seguir o layout de listagem apresentado no Protótipo.
- Ao clicar no campo de busca o usuário pode digitar a vontade, realizar a requisição apenas quando o usuário pressionar o botão de enviar no teclado digital ou retirar o foco do campo de busca.
- Ao clicar em qualquer um dos repositórios listados o aplicativo deve abrir um WebViewer exibindo a página do mesmo.
- A listagem dese seguir o layout apresentando:
  - Avatar do criador do repositório (`owner.avatar_url`)
  - Nome do Repo (`name`)
  - Login do criador (`owner.login`)
  
### Código

**Obrigatória utilização:**
- react-native (versão `0.60.0` ou superior)
- redux (versão `4.0.4` ou superior)
- styled-components
- react-navigation (versão `4.0.0` ou superior)

**Diferencial:**
- Utilização de Hooks e "Redux Hooks"
  - reselect
  - redux-thunk
- Utilizar biblioteca Axios nas requests
- Testes


Boa Sorte!
