import { axiosInstance } from '../config/axios';

export type RespositoryProps = {
  id: string;
  name: string;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
};

export type RespositoryResponseProps = {
  total_count: number;
  items: RespositoryProps[];
};

export const findRepositories = async (searchTerm: string, page = 1) => {
  try {
    const resp = await axiosInstance.get(
      `/search/repositories?q=${searchTerm}&per_page=20&page=${page}`
    );
    return resp.data as RespositoryResponseProps;
  } catch (error: any) {
    console.log(error.response.data);
    return null;
  }
};
