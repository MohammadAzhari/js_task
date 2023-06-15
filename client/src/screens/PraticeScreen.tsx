import { Box, LinearProgress, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import WordBox from '../components/WordBox';
import { useAppState } from '../context/appContext';
import api from '../service/api';
import { Word } from '../types/types';

export default function PracticeScreen() {
  const [words, setWords] = useState<Word[]>([]);
  const [progress, setProgress] = useState(0);

  const {
    setCurrectAnswers,
    setIsLoading,
    setIsGameEnded,
    isLoading,
    numberOfWords,
  } = useAppState();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const words = await api.getWords();
      setWords(words);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getNextWord = () => {
    if (progress === numberOfWords - 1) {
      setIsGameEnded(true);
    }
    setProgress((prev) => prev + 1);
  };

  const handleCurrectAnswer = () => {
    setCurrectAnswers((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const progressValue = useMemo(
    () => Math.round((progress * 100) / numberOfWords),
    [progress, numberOfWords]
  );

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Box mb={3}>
        <Typography>{progressValue}% completed</Typography>
        <LinearProgress variant='buffer' value={progressValue} />
      </Box>
      <WordBox
        word={words[progress]}
        getNextWord={getNextWord}
        handleCurrectAnswer={handleCurrectAnswer}
      />
    </>
  );
}
