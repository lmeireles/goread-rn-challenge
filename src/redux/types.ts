import { RespositoryProps } from '../services/api';

export type AppStateProps = {
  repositories: RespositoryProps[];
  page: number;
  searchTerm: string;
  isLoading: boolean;
  isThereMore: boolean;
};

export type GetRepoAction = {
  searchTerm: string;
  repositories: RespositoryProps[];
};

export type SetRepoAction = {
  repositories: RespositoryProps[];
  page: number;
  isThereMore: boolean;
};

export type AppAction = {
  type: string;
  payload: GetRepoAction & SetRepoAction;
};
