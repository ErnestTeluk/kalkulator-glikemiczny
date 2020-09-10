import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
    }
    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.15;
        overflow-x: hidden;
    }
`;

export const SiteWrapper = styled.div`
  width: 100%;
  height: auto;
`;
