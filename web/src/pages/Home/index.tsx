import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { 
  Content,
  Container,
  Main
 } from './styles';
import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <Container>
      <Content>
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
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
  );
}

export default Home;