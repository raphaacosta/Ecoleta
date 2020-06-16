import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import dracule from './styles/themes/dracule';
import light from './styles/themes/light';
import usePersistedState from './utils/usePersistedState';
import GlobalStyles from './styles/global';

import Routes from './routes';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dracule);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dracule : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme}/>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
