import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora';
    }
    
`;
export default GlobalStyle;
