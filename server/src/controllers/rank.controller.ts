import { Request, Response } from 'express';
import { rankServices } from '../services/rank.services';

const rankCalcHandler = (req: Request, res: Response) => {
  // validations
  if (!('score' in req.body)) {
    return res.status(400).send('Please provide the score');
  }

  const { score } = req.body;

  const rankPercentage = rankServices.calculateRankPercentage(score);

  res.status(200).json({ rank: rankPercentage });
};

export default { rankCalcHandler };
