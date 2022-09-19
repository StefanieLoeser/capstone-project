import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #eee
    }

    h1 {

    }
`;

export default GlobalStyle;
