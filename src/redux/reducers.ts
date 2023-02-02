import { AnyAction, Reducer } from 'redux';
import { GET_REPOSITORIES, SET_REPOSITORIES } from './actions';
import { AppStateProps } from './types';

const initialState: AppStateProps = {
  repositories: [],
  page: 1,
  searchTerm: '',
  isLoading: false,
  isThereMore: false,
};

export const appReducer: Reducer<AppStateProps, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_REPOSITORIES: {
      return {
        ...state,
        isLoading: true,
        repositories: !action.payload.page ? [] : state.repositories,
        searchTerm: action.payload.searchTerm || state.searchTerm,
      };
    }
    case SET_REPOSITORIES: {
      const updatedRepos = action.payload.repositories || [];
      return {
        ...state,
        repositories:
          action.payload?.page === 1
            ? updatedRepos
            : [...state.repositories, ...updatedRepos],
        isLoading: false,
        page: action.payload.page || 1,
        isThereMore: action.payload.isThereMore,
      };
    }
    default:
      return state;
  }
};
