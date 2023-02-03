import { GET_REPOSITORIES } from '../../src/redux/actions';
import { appReducer, initialState } from '../../src/redux/reducers';

describe('redux/reducers', () => {
  describe('appReducer', () => {
    it('should return the initial state', () => {
      expect(appReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should handle GET_REPOSITORIES with page 1', () => {
      const getAction = {
        type: GET_REPOSITORIES,
        payload: {
          page: 0,
          searchTerm: 'Testing',
        },
      };
      expect(appReducer(undefined, getAction)).toEqual({
        ...initialState,
        isLoading: true,
        searchTerm: 'Testing',
        repositories: [],
      });
    });

    // it('should handle SET_REPOSITORIES', () => {

    // })
  });
});
