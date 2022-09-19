import { createGlobalStyle } from 'styled-componenents';

const GlobalStyle = createGlobalStyle`

*, *::after, *::before {
  box-sizing: border-box;
}

body {
    background-color: hotpink;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

`;

export default GlobalStyle;
