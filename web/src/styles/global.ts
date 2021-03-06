import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    -webit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.text};
  }

  border-style, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
    font-family: Ubuntu;
  }
`;