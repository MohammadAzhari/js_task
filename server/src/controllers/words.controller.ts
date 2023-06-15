import { Request, Response } from 'express';
import { wordsServices } from '../services/words.services';

const getWordsHandler = (req: Request, res: Response) => {
  const words = wordsServices.getRandomWords(10);

  res.status(200).send(words);
};

export default { getWordsHandler };
