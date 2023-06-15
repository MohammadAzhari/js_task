export type Word = {
  id: number;
  word: string;
  pos: 'adverb' | 'verb' | 'noun' | 'adjective';
};

export const posTypes = ['adverb', 'verb', 'noun', 'adjective'];

export interface IAppContext {
  isGameEnded: boolean;
  setIsGameEnded: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currectAnswers: number;
  setCurrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  numberOfWords: number;
}

export interface IApiEndPoints {
  getWords: () => Promise<Word[]>;
  rankScore: (n: number) => Promise<{ rank: number }>;
}
