import { getRepositories, setRepositories } from '../../src/redux/actions';

describe('redux/actions', () => {
  describe('getRepositories', () => {
    const result = getRepositories('Hola', 5);
    it('should return type: @APP/GET_REPOSITORIES', () => {
      expect(result.type).toBe('@APP/GET_REPOSITORIES');
    });
    it('should return payload: { searchTerm: "Hola" }', () => {
      expect(result.payload.searchTerm).toBe('Hola');
    });
    it('should return payload: { page: 5 }', () => {
      expect(result.payload.page).toBe(5);
    });
  });

  describe('setRepositories', () => {
    const result = setRepositories(
      [
        {
          id: '123',
          name: 'GithubName',
          owner: { avatar_url: 'https://google.com', login: 'eccianime' },
          stargazers_count: 50,
        },
      ],
      4,
      false
    );
    it('should return type: @APP/SET_REPOSITORIES', () => {
      expect(result.type).toBe('@APP/SET_REPOSITORIES');
    });
    it('should return payload.isThereMore = false }', () => {
      expect(result.payload.isThereMore).toBeFalsy();
    });
    it('should return payload.login = eccianime', () => {
      expect(result.payload.repositories[0].owner.login).toBe('eccianime');
    });
  });
});
