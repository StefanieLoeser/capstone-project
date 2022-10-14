import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
  --clr-primary: #ee6352;
  --clr-body: #333;
  --clr-bg: #ddd;
}
`;

export default GlobalStyle;
