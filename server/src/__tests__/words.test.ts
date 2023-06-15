import { wordsServices } from '../services/words.services';

// import { wordsServ

describe('test word service', () => {
  let words1 = wordsServices.getRandomWords(10);
  let words2 = wordsServices.getRandomWords(8);
  it('test case #1', () => {
    expect(words1.length).toBe(10);
  });
  it('test case #2', () => {
    expect(words2.length).toBe(8);
  });
});
