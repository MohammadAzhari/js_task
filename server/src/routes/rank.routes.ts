import express from 'express';
import controller from '../controllers/rank.controller';

const router = express.Router();

router.post('/', controller.rankCalcHandler);

export default router;
