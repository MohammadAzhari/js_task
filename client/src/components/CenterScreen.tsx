import { Box } from '@mui/material';

export default function CenterScreen({ children }: { children: JSX.Element }) {
  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      {children}
    </Box>
  );
}
