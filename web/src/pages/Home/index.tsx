import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import Header from '../../components/Header';
import usePersistedState from '../../utils/usePersistedState';

import light from '../../styles/themes/light';
import dracule from '../../styles/themes/dracule';

import GlobalStyle from '../../styles/global';
import { 
  Content,
  Container,
  Main
 } from './styles';

const Home = () => {
  const pathName = 'Home';
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dracule);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dracule : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Content>
          < Header toggleTheme={toggleTheme} pathName={pathName}/>
          <Main>
            <h1>Seu marketplace de coleta de resíduos.</h1>
            <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>

            <Link to="/create-point">
              <span>
                <FiLogIn />
              </span>
              <strong>Cadastre um ponto de coleta</strong>
            </Link>
          </Main>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default Home;