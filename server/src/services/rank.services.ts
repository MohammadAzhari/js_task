import { scoresList } from '../data';
import { IScoresListAccess } from '../data/IscoreList';

export const rankServices: IScoresListAccess = {
  calculateRankPercentage(newScore: number): number {
    let totalScoresNumber = scoresList.length;
    let scoresBellowNewScore = 0;

    for (let score of scoresList) {
      if (score < newScore) {
        scoresBellowNewScore++;
      }
    }

    return Number(
      (100 * (scoresBellowNewScore / totalScoresNumber)).toFixed(2)
    );
  },
};
