import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.BACKEND_HOST || process.env.NEXT_PUBLIC_BACKEND_HOST,
});