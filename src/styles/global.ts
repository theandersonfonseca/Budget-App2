import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%; 
  }

  body {
    ${({ theme }) => css` 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
      background: ${theme.colors.primary};
      display: flex;
      justify-content: center;
      align-items: center;
  `}
  }

  button {
    cursor: pointer;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyle;
