import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* outline: none; */
  }

  html { 
    font-size: 62.5%;
    font-family: var(--font-family);
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    color: var(--black)
  }

  h1, h2, h3, strong {
  }

  ul, li, a, span {
    text-decoration: none;
    color: var(--black);
    font-family: var(--font-family);
  }

  ::-webkit-input-placeholder {
    color: var(--pinkjussi);
  }

  button { 
    color: var(--black);
    border: 1px solid var(--black);
    font-weight: var(--weight-medium);
    cursor: pointer;
    border-radius: 6px;
    padding: 12px 25px;
    transition: all .5s ease;
    &:hover {
      background-color: var(--black);
      color: var(--text-color);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :root {
    --background: #ffffff;
    --lemongreen: #03FFA5;
    --shape: #F2F2F2;
    --pinkjussi: #EE0E7D;
    --black: #000000;
    --text-color: #ffffff;

    --font-family: 'Barlow', sans-serif;

    --font-size: 62.5%;
    --font-xs: 1.2rem;
    --font-sm: 1.6rem;
    --font-md: 3.2rem;
    --font-lg: 6.4rem;

    --weight-bold: 700;
    --weight-medium: 500;

    --xs: 480px;
    --sm: 769px;
    --lg: 998px;

    --swiper-navigation-size: 25px;
    --swiper-theme-color: var(--pinkjussi)
  }
`;


