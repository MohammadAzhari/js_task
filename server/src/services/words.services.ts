import { wordList } from '../data';
import { IWordListAccess } from '../data/IwordList';
import { Word } from '../types/types';

export const wordsServices: IWordListAccess = {
  getRandomWords(numberOfWords: number): Word[] {
    // set all the pos types -> false
    let selectedPosTypes: any = {
      adverb: false,
      verb: false,
      noun: false,
      adjective: false,
      // ... here we can add more types

      isAllSeleted: function () {
        for (let key in this) {
          if (this[key] === false) return false;
        }
        return true;
      },
    };
    // save selected ids here -> {Set} takes O(1) vs {Array} takes O(n)
    let selectedIds = new Set();
    // save selected words here
    let selectedWords: Word[] = [];

    while (selectedWords.length !== numberOfWords) {
      // get random number in range 0 to n-1;
      let randomNumber = Math.floor(Math.random() * numberOfWords);
      //   get word based on random number
      let selectedWord = wordList[randomNumber];

      // the word shouldent be choosed before
      if (selectedIds.has(selectedWord.id)) continue;
      // make sure to insert all types once until all types get selected
      if (
        selectedPosTypes[selectedWord.pos] &&
        !selectedPosTypes.isAllSeleted()
      )
        continue;

      selectedPosTypes[selectedWord.pos] = true;
      selectedWords.push(selectedWord);
      selectedIds.add(selectedWord.id);
    }

    return selectedWords;
  },
};
