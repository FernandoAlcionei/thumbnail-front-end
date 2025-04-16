import axios from 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    bypassInterceptor?: boolean;
  }
}

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
