import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
      margin: 0;
    }

    body {
        background-color: white;
        margin: 0;
    }
`;

export default GlobalStyle;
