import { createSelector } from 'reselect';
import { AppStateProps } from './types';

const getRepositoriesState = (state: { app: AppStateProps }) => {
  return state.app;
};

export const getAllRepositories = createSelector(
  getRepositoriesState,
  ({ repositories }: AppStateProps) => {
    return repositories.map(({ id, name, owner, stargazers_count }) => ({
      id,
      name,
      owner,
      stargazers_count,
    }));
  }
);

export const getMinorDetails = createSelector(
  getRepositoriesState,
  ({ isLoading, isThereMore, page, searchTerm }: AppStateProps) => {
    return { isLoading, isThereMore, page, searchTerm };
  }
);
