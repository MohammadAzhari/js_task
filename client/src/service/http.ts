import axios, { AxiosResponse } from 'axios';

// create a http instance with headers
const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json',
    'x-client-secret': process.env.REACT_APP_CLIENT_SECRET || 'change me',
    'x-client-id': process.env.REACT_APP_CLIENT_ID || '1234',
  },
});

export const handler = async (req: Promise<AxiosResponse<any, any>>) => {
  try {
    const { data } = await req;
    return data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
};

export default http;
