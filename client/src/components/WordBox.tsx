import { Alert, Box, Button, LinearProgress, Typography } from '@mui/material';
import { useState } from 'react';
import { posTypes, Word } from '../types/types';

interface IProps {
  word: Word;
  getNextWord: () => void;
  handleCurrectAnswer: () => void;
}

const answerStatus = {
  notAnsweredYet: 0,
  correctAnswer: 1,
  uncorrectAnswer: 2,
};

export default function WordBox({
  word,
  getNextWord,
  handleCurrectAnswer,
}: IProps) {
  const [answerd, setAnswerd] = useState(answerStatus.notAnsweredYet);

  const handleClickAnswer = (answer: string) => {
    if (answer === word.pos) {
      setAnswerd(answerStatus.correctAnswer);
      handleCurrectAnswer();
    } else {
      setAnswerd(answerStatus.uncorrectAnswer);
    }
  };

  const handleClickNext = () => {
    setAnswerd(answerStatus.notAnsweredYet);
    getNextWord();
  };

  return (
    <Box>
      <Typography>Select the type of this word</Typography>
      <Typography variant='h3'>{word.word}</Typography>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        gap={1}
        mt={2}
        flexWrap='wrap'
      >
        {posTypes.map((posType, index) => (
          <Box key={index}>
            <Button
              disabled={answerd !== answerStatus.notAnsweredYet}
              variant='contained'
              onClick={() => handleClickAnswer(posType)}
            >
              {posType}
            </Button>
          </Box>
        ))}
      </Box>
      {answerd !== answerStatus.notAnsweredYet ? (
        <Box>
          <Alert
            sx={{ my: 3 }}
            color={answerd === answerStatus.correctAnswer ? 'success' : 'error'}
          >
            {answerd === answerStatus.correctAnswer ? 'Correct!' : 'Uncorrect!'}
          </Alert>
          <Button variant='outlined' onClick={handleClickNext}>
            Next Word
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
