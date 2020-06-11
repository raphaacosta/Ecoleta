import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-color: #34CB79;
    --title-color: #322153;
    --text-color: #6C6C80;
    --background-color: #F0F0F5;
    --box-color: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background-color);
    -webit-font-smoothing: antialiased;
    color: var(--text-color);
  }

  border-style, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--title-color);
    font-family: Ubuntu;
  }
`;