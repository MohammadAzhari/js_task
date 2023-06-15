import { createContext, useContext, useMemo, useState } from 'react';
import { IAppContext } from '../types/types';

const AppContext = createContext<IAppContext>({
  isGameEnded: false,
  setIsGameEnded: () => {},
  isLoading: true,
  setIsLoading: () => {},
  currectAnswers: 0,
  setCurrectAnswers: () => {},
  numberOfWords: 10,
});

export const useAppState = () => {
  return useContext<IAppContext>(AppContext);
};

export default function AppProvider({ children }: { children: JSX.Element }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [currectAnswers, setCurrectAnswers] = useState(0);
  const numberOfWords = useMemo(() => 10, []);

  return (
    <AppContext.Provider
      value={{
        isGameEnded,
        setIsGameEnded,
        isLoading,
        setIsLoading,
        currectAnswers,
        setCurrectAnswers,
        numberOfWords,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
