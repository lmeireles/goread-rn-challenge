import { RespositoryProps } from '../services/api';

export const GET_REPOSITORIES = '@APP/GET_REPOSITORIES';
export const SET_REPOSITORIES = '@APP/SET_REPOSITORIES';

export const getRepositories = (searchTerm: string, page: number) => ({
  type: GET_REPOSITORIES,
  payload: {
    searchTerm,
    page,
  },
});

export const setRepositories = (
  repositories: RespositoryProps[],
  page: number,
  isThereMore: boolean
) => ({
  type: SET_REPOSITORIES,
  payload: { repositories, page, isThereMore },
});
