import { Word } from '../types/types';

export interface IWordListAccess {
  getRandomWords(numberOfWords: number): Word[];
}
