import express from 'express';
import controller from '../controllers/words.controller';

const router = express.Router();

router.get('/', controller.getWordsHandler);

export default router;
