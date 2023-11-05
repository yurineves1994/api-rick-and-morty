import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    width: 100%;
    height: 100vh;
    background: rgb(39, 43, 51);
    color: white;
  }
`;
