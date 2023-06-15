export type Word = {
  id: number;
  word: string;
  pos: 'adverb' | 'verb' | 'noun' | 'adjective';
};

export type Data = {
  wordList: Word[];
  scoresList: number[];
};
