import React, {  useContext } from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';

import logo from '../../assets/logo.svg'
import logoDracule from '../../assets/logoDracule.png';

import { Container, Content } from './styles';

interface Props {
  toggleTheme(): void;
  pathName: string;
}

const Header:React.FC<Props> = ({ toggleTheme, pathName }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
        <Content>
          { title === 'light' ? (
            <img src={logo} alt="Ecoleta" />
          ) : (
            <img src={logoDracule} alt="Ecoleta" />
          )}
        
          {pathName === "Home" ? () => {} : (
            <Link to="/">
              <span>
                <FiArrowLeft />
              </span>
              <strong>Cadastre um ponto de coleta</strong>
            </Link>
          )}

          <Switch 
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={colors.primary}
            onColor={colors.secundary}
          />
        </Content>
    </Container>
  );
}

export default Header;