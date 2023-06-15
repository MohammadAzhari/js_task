import { IApiEndPoints, Word } from '../types/types';
import http, { handler } from './http';

const api: IApiEndPoints = {
  getWords: () => handler(http.get('/words')),
  rankScore: (score: number) => handler(http.post('/ranks', { score })),
};

export default api;
