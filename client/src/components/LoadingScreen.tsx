import { CircularProgress } from '@mui/material';
import CenterScreen from './CenterScreen';

export default function LoadingScreen() {
  return (
    <CenterScreen>
      <CircularProgress />
    </CenterScreen>
  );
}
