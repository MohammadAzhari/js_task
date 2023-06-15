import express from 'express';
import cors from 'cors';
import wordsRouter from './routes/words.routes';
import rankRouter from './routes/rank.routes';
import { reqHeaders } from './middlewares/reqHeaders';

const app = express();

app.use(express.json());
app.use(cors());
app.use(reqHeaders);

app.use('/api/words', wordsRouter);
app.use('/api/ranks', rankRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
