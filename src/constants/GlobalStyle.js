import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

  *,
  :after,
  :before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
  }

  body,
  html {
    width: 100%;
    height: 100%;
    font-family: 'Lato', sans-serif;
    font-size: 15px;
  }

  body {
    background-color: ${props => props.theme.foreground};
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme.primary};
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }

  .recharts-legend-wrapper {
    left: 35px !important;
  }

  .reset-icon {
    position: absolute !important;
    z-index: 9 !important;
    bottom: 50px !important;
    left: 90px !important;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  svg {
    fill: ${({ theme }) => theme.primary};
  }
`;

export default GlobalStyle;
