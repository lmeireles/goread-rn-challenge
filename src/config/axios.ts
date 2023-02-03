import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
