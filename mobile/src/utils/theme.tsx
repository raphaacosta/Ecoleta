import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import { AsyncStorage } from 'react-native';

import { useColorScheme } from 'react-native-appearance';
import {
  ThemeProvider as StyledProvider,
  DefaultTheme,
} from 'styled-components';
import light from '../themes/light';
import dracule from '../themes/dracule';

interface ThemeContextData {
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const deviceTheme = useColorScheme();
  const [theme, setTheme] = useState(deviceTheme === 'light' ? light : dracule);

  useEffect(() => {
    async function getPersistedTheme(): Promise<void> {
      const persistedTheme = await AsyncStorage.getItem('theme');

      if (persistedTheme) {
        setTheme(persistedTheme === 'light' ? light : dracule);
      }
    }

    getPersistedTheme();
  }, []);

  const persistTheme = useCallback(async themeToPersist => {
    setTheme(themeToPersist === 'light' ? light : dracule);
    await AsyncStorage.setItem('theme', themeToPersist);
  }, []);

  useEffect(() => {
    persistTheme(deviceTheme);
  }, [deviceTheme, persistTheme]);

  const toggleTheme = useCallback(() => {
    persistTheme(theme.title === 'light' ? 'dracule' : 'light');
  }, [theme.title, persistTheme]);

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };