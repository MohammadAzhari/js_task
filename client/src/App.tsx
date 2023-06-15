import { Box, CircularProgress } from '@mui/material';
import CenterScreen from './components/CenterScreen';
import { useAppState } from './context/appContext';
import PracticeScreen from './screens/PraticeScreen';
import RankScreen from './screens/RankScreen';

function App() {
  const { isGameEnded } = useAppState();

  return (
    <CenterScreen>
      <Box
        p={5}
        m={10}
        bgcolor='aliceblue'
        borderRadius='12px'
        textAlign='center'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        {isGameEnded ? <RankScreen /> : <PracticeScreen />}
      </Box>
    </CenterScreen>
  );
}

export default App;
