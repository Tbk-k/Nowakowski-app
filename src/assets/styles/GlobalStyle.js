import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.p};
    scroll-behavior: smooth;
}

body {
    padding: 0;
    margin: 0;
    &::-webkit-scrollbar{
        display: none;
    }
}
section{
    overflow: hidden;
    width: 100vw;
    max-width: 100vw;
}

h2{
    font-family: ${({ theme }) => theme.fonts.h};
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
}

`;
