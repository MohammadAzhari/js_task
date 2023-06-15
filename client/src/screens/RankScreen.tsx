import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import { useAppState } from '../context/appContext';
import api from '../service/api';

export default function RankScreen() {
  const [rank, setRank] = useState(0);

  const { currectAnswers, setIsLoading, isLoading, numberOfWords } =
    useAppState();

  const postScoreAndGetRank = async () => {
    setIsLoading(true);
    let totalScore = Math.round((currectAnswers * 100) / numberOfWords);
    try {
      const response = await api.rankScore(totalScore);
      setRank(response.rank);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayAgain = () => {
    window.location.reload();
  };

  useEffect(() => {
    postScoreAndGetRank();
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Typography variant='h3'>Your rank is {rank}% across peers</Typography>
      <Button sx={{ mt: 3 }} variant='contained' onClick={handlePlayAgain}>
        Try again!
      </Button>
    </>
  );
}
