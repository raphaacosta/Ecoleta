import styled from 'styled-components';

import backgroundImg from '../../assets/home-background.svg';

export const Container = styled.div`
  height: 100vh;
  margin: 10px 0 0;
  background: url(${backgroundImg}) no-repeat 550px bottom;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > header {
    margin: 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;

    header {
      margin: 48px auto 0;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 54px;
    color: ${({ theme }) => theme.colors.title};
  }

  p{
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

  a {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: ${({ theme }) => theme.colors.button};
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;
  }

  span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    svg {
      color: ${({ theme }) => theme.title === 'light' ? theme.colors.box : theme.colors.text};
      width: 20px;
      height: 20px;
    }
  }

  strong{
    flex: 1;
    text-align: center;
    color: ${({ theme }) => theme.title === 'light' ? theme.colors.box : theme.colors.text};
  }

  @media (max-width: 900px) {
    align-items: center;

    h1 {
      font-size: 42px;
    }

    p {
      font-size: 24px;
    }
  }
`;

